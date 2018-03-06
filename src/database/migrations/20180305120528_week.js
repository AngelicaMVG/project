
exports.up = function(knex, Promise) {
  return knex
  .schema
  .createTable('status', (table) => {
    table.increments()
    table.integer('week')
    table.integer('day')
    table.boolean('homework')

    return table
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('status')
};
