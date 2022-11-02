// import { config } from '../knexfile'
const config = require('../knexfile');
import knex, { Knex } from 'knex';
// import ProcessEnv from '../environment';

const db : Knex = process.env.PORT ? knex(config.production) : knex(config.development);

export default db;
// export default () => {
//     return knex(process.env.PORT ? config.production : config.development);
// }

// export const db = knex(process.env.PORT ? config.production : config.development);
