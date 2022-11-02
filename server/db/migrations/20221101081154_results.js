/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('results', table => {
        table
            .increments("id")
            .primary();
        table
        // /!\ Check if reference works when populating data
            .integer('users_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('cascade');
        table
            .integer('score')
            .notNullable();
        table
            .integer('max_score')
            .notNullable();
        table
            .date('timestamp')
            .notNullable();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
        return knex.schema.dropTable('results');
};
