module.exports = {
  name: 'api',
  version: '1.0.0',
  async register(server) {
    server.register(require('./contents'));
    server.register(require('./users'));
  },
};
