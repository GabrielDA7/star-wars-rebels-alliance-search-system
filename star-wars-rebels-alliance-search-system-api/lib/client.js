const fetch = require('node-fetch');
const Boom = require('@hapi/boom');

async function handleResponse(response) {
  if (response.ok) {
    return response.json();
  }
  throw Boom.boomify(new Error(response.statusText),
    { statusCode: response.status }).output.payload;
}

async function client(endpoint, { body, method, ...customConfig } = {}) {
  if (!method) throw new Error('You must provide a method for your request !');

  const requestConfig = {
    method,
    headers: {
      ...customConfig.headers,
    },
  };

  if (body) {
    requestConfig.body = requestConfig.headers['Content-Type'] === 'application/json'
      ? JSON.stringify(body)
      : body;
  }

  const fetchResult = await fetch(endpoint, requestConfig);
  return handleResponse(fetchResult);
}

module.exports = {
  client,
};
