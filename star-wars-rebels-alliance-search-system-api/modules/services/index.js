module.exports = {
  name: 'services',
  version: '1.0.0',
  async register(server) {
    const services = [].concat(
      require('./contents'),
    );
    server.method(services);
  },
};
