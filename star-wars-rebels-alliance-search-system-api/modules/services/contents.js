const Promise = require('bluebird');
const { client } = require('../../lib/client');
const config = require('../../config/index');

function getRelatedContentNames(mainContent) {
  const mainContentProps = Object.keys(mainContent);
  return [...config.swapi.schemaNames, ...config.swapi.customSchemaNames]
    .filter((value) => mainContentProps.includes(value));
}

function constructApiEndpointMultipleContents({ search, type, page }, endpoint) {
  if (endpoint === config.app.contentsEndpoint) {
    return `${endpoint}?${search ? `search=${search}` : ''}&${page ? `page=${page}` : ''}&${type ? `type=${type}` : ''}`;
  }
  return `${endpoint}/${type}?${search ? `search=${search}` : ''}&${page ? `page=${page}` : ''}`;
}

function constructApiEndpointSingleContent({ type, contentId }, endpoint) {
  return `${endpoint}/${type}/${contentId}`;
}

function constructApiEndpoint(params, endpoint) {
  if (params.contentId !== undefined) {
    return constructApiEndpointSingleContent(params, endpoint);
  }
  return constructApiEndpointMultipleContents(params, endpoint);
}

function getParamsFromUrl(url) {
  const urlDataSeparation = url.split('?');
  const path = urlDataSeparation[0].split('/').filter((element) => element !== '');
  const pathParams = {};
  const supposedContentId = path[path.length - 1];
  if (!config.swapi.schemaNames.includes(supposedContentId)) {
    pathParams.contentId = supposedContentId;
    pathParams.type = path[path.length - 2];
  } else {
    pathParams.type = supposedContentId;
  }
  if (urlDataSeparation.length > 1) {
    const query = urlDataSeparation[1].split('&');
    const queryParams = query.reduce((acc, param) => {
      const paramKeyValue = param.split('=');
      acc[paramKeyValue[0]] = paramKeyValue[1];
      return acc;
    }, {});

    return { ...queryParams, ...pathParams };
  }
  return pathParams;
}

function convertSwapiPaginationUrlsToIds({ next, previous }) {
  const nextUrlPageId = next ? getParamsFromUrl(next).page : null;
  const previousUrlPageId = previous ? getParamsFromUrl(previous).page : null;

  return {
    next: nextUrlPageId,
    previous: previousUrlPageId,
  };
}

function removeRelatedContents(mainContent) {
  const relatedContentNames = getRelatedContentNames(mainContent);
  return Object.entries(mainContent).reduce((acc, [key, val]) => {
    if (!relatedContentNames.includes(key)) {
      acc[key] = val;
    }
    return acc;
  }, {});
}

function formatRelatedContent(relatedContent) {
  const formattedRelatedContent = removeRelatedContents(relatedContent);
  const urlParams = getParamsFromUrl(relatedContent.url);
  const convertedUrl = constructApiEndpoint(urlParams, config.app.contentsEndpoint);
  return { ...formattedRelatedContent, url: convertedUrl, id: urlParams.contentId };
}

async function addRelatedContents(mainContent) {
  const relatedContentNames = getRelatedContentNames(mainContent);

  const relatedContentsPromises = relatedContentNames.reduce(
    (accumulator, relatedContentName) => {
      const relatedContent = mainContent[relatedContentName];
      if (relatedContent instanceof Array) {
        accumulator[relatedContentName] = Promise.map(
          relatedContent,
          (relatedContentUrl) => client(relatedContentUrl, { method: 'GET' }).then((content) => formatRelatedContent(content)),
        );
      } else if (relatedContent != null) {
        accumulator[relatedContentName] = client(mainContent[relatedContentName], { method: 'GET' })
          .then((content) => formatRelatedContent(content));
      }
      return accumulator;
    }, {},
  );

  const relatedContentsFetched = await Promise.props(relatedContentsPromises);
  return { ...mainContent, ...relatedContentsFetched };
}

async function formatContent(content) {
  const contentWithRelatedContents = await addRelatedContents(content);
  const urlParams = getParamsFromUrl(content.url);
  const convertedUrl = constructApiEndpoint(urlParams, config.app.contentsEndpoint);
  return { ...contentWithRelatedContents, url: convertedUrl, id: urlParams.contentId };
}

function formatContentsSingleType(data) {
  const paginationUrlConverted = convertSwapiPaginationUrlsToIds(data);
  const resultsFormatted = data.results.map((content) => formatRelatedContent(content));
  return { ...data, ...paginationUrlConverted, results: resultsFormatted };
}

async function getByIdAndType(params) {
  const endpoint = constructApiEndpoint(params, config.swapi.rootEndpoint);
  const content = await client(endpoint, {
    method: 'GET',
  });
  return formatContent(content);
}

async function fetchListOfContents(params) {
  const endpoint = constructApiEndpoint(params, config.swapi.rootEndpoint);
  return client(endpoint, {
    method: 'GET',
  })
    .then((data) => formatContentsSingleType(data))
    .catch(() => Promise.resolve({
      count: 0,
      next: null,
      previous: null,
      results: [],
    }));
}

async function getAllTypes(params) {
  return Promise.props(config.swapi.schemaNames.reduce((acc, type) => {
    acc[type] = fetchListOfContents({ ...params, type });
    return acc;
  }, {}));
}

async function getAll(params) {
  if (params.type) {
    return fetchListOfContents(params).then((data) => ({
      [params.type]: data,
    }));
  }
  return getAllTypes(params);
}

module.exports = [
  {
    name: 'services.contents.getByIdAndType',
    method: getByIdAndType,
  },
  {
    name: 'services.contents.getAll',
    method: getAll,
  },
];
