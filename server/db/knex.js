const knex = require('knex');
const config = require('..knexfile.js');

// This may change once we deploy the app.
exports.knex = knex(process.env.PORT ? config.production : config.development);
// export default knex(process.env.PORT ? config.production : config.development)