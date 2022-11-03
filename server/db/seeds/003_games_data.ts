import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("games").del();

    // Inserts seed entries
    await knex("games").insert([
        { users_id: 3, round: 5, max_round: 5 },
    ]);
};
