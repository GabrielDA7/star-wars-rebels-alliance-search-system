module.exports = (server) => {
  const handlers = require('./handlers')(server);
  const { loginPayloadValidations } = require('./validations/input');

  return [
    // POST /api/users/login
    {
      method: 'POST',
      path: '/users/login',
      handler: handlers.login,
      options: {
        validate: loginPayloadValidations,
      },
    },
  ];
};
