module.exports = (server) => {
  const handlers = require('./handlers')(server);
  const fetchContent = require('./routes_prerequisites').fetchContent(server);
  const { contentPathParamsValidations, contentsQueryParamsValidations } = require('./validations/input');

  return [
    // GET /api/contents?search=&type=&page
    {
      method: 'GET',
      path: '/contents',
      handler: handlers.getContents,
      options: {
        validate: contentsQueryParamsValidations,
        auth: 'jwt',
      },
    },
    // GET /api/contents/species/1
    {
      method: 'GET',
      path: '/contents/{type}/{contentId}',
      handler: handlers.getContent,
      options: {
        pre: [
          fetchContent,
        ],
        validate: contentPathParamsValidations,
        auth: 'jwt',
      },
    },
  ];
};
