const Routes = require('./routes');

module.exports = {
  name: 'users',
  version: '1.0.0',
  async register(server) {
    server.route(Routes(server));
  },
};
