module.exports = (server) => ({
  /**
   * GET /api/contents?search=&type=&page
   * @param {*} request
   * @param {*} h
   */
  async getContents(request, h) {
    try {
      const contents = await server.methods.services.contents.getAll(request.query);
      return h.response(contents).code(200);
    } catch (error) {
      return h.response(error).code(error.statusCode);
    }
  },
  /**
   * GET /api/contents/{type}/{contentId}
   * @param {*} request
   * @param {*} h
   */
  getContent(request, h) {
    return h.response(request.pre.content).code(200);
  },
});
