import knex from 'knex';
import config from '../knexfile';

// This may change once we deploy the app.
exports.knex = knex(process.env.PORT ? config.production : config.development);
// export default knex(process.env.PORT ? config.production : config.development)