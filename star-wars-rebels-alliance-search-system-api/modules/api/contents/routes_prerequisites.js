const Boom = require('@hapi/boom');

const fetchContent = (server) => ({
  method: async (request) => {
    try {
      return await server.methods.services.contents.getByIdAndType(
        request.params,
      );
    } catch (error) {
      throw Boom.boomify(new Error(error.message), { statusCode: error.statusCode });
    }
  },
  assign: 'content',
});

module.exports = {
  fetchContent,
};
