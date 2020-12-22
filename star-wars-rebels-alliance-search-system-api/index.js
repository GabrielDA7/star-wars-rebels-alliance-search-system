require('dotenv').config();
const Glue = require('@hapi/glue');
const manifest = require('./config/manifest');

const options = {
  relativeTo: `${__dirname}/modules`,
};

(async () => {
  try {
    const server = await Glue.compose(manifest, options);
    await server.start();
  } catch (error) {
    process.exit(1);
  }
})();
