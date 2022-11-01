const knex = require('knex');
const config = require('..knexfile.js');
require('dotenv').config({path: '.../.env'});

// This may change once we deploy the app.
exports.knex = knex(process.env.NODE_ENV === 'production' ? config.production : config.development);
// export default knex(process.env.PORT ? config.production : config.development)