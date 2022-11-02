/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.schema.hasTable('users').then(async function(exists) {
    if (exists) {
      await knex('users').del()
    }
  });
  await knex('users').insert([
    {username: "Sanju"},
    {username: "Rei"},
    {username: "Cris"}
  ]);
};
