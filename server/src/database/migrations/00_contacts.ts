import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("contacts", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("phone").notNullable();
    table.string("work");
    table.string("email");
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("contacts");
}
