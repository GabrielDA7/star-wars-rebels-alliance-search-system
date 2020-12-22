module.exports = (server) => {
  const Jwt = require('@hapi/jwt');
  const config = require('../../../config/index');
  const Boom = require('@hapi/boom');

  return {
    /**
         * POST /api/users/login
         * @param {*} request
         * @param {*} h
         */
    async login(request, h) {
      const { username } = request.payload;
      const { password } = request.payload;

      if (username !== config.auth.username || password !== config.auth.password) return Boom.badRequest('Invalid username/password.');

      const token = Jwt.token.generate({ username }, config.auth.secret);
      return h.response({ token }).code(200);
    },
  };
};
