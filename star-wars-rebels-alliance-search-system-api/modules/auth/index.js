const Jwt = require('@hapi/jwt');
const config = require('../../config/index');

module.exports = {
  name: 'auth',
  version: '1.0.0',
  async register(server) {
    server.register(Jwt);
    server.auth.strategy('jwt', 'jwt', {
      keys: config.auth.secret,
      verify: {
        aud: false,
        iss: false,
        sub: false,
        exp: false,
      },
      validate: false,
    });
  },
};
