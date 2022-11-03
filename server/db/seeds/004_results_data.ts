import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("results").del();

    // Inserts seed entries
    await knex("results").insert([
        { users_id: 3, score: 4, max_score: 5 },
    ]);
};