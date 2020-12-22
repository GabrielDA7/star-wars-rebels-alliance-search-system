const config = require('./index');

const manifest = {
  server: {
    host: config.app.host,
    port: config.app.port,
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  },
  register: {
    plugins: [
      {
        plugin: './auth',
      },
      {
        plugin: './services',
      },
      {
        plugin: './api',
        routes: {
          prefix: '/api',
        },
      },
    ],
  },
};

module.exports = manifest;
