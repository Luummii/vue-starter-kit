exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function (table) {
      table.increments('user_id').primary()
      table.string('email')
      table.timestamp('created_at').notNullable().defaultTo(knex.fn.now())
    })
  ])
}

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users')
  ])
}
