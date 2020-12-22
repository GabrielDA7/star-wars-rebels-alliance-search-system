const config = {
  app: {
    host: process.env.APP_HOST,
    port: process.env.APP_PORT,
    contentsEndpoint: `http://${process.env.APP_HOST}:${process.env.APP_PORT}/api/contents`,
  },
  swapi: {
    rootEndpoint: 'https://swapi.dev/api',
    schemaNames: ['species', 'starships', 'films', 'people', 'vehicles', 'planets'],
    customSchemaNames: ['homeworld', 'residents', 'characters', 'pilots'],
  },
  auth: {
    username: process.env.AUTH_USERNAME,
    password: process.env.AUTH_PASSWORD,
    secret: process.env.AUTH_SECRET,
  },
};

module.exports = config;
