
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users',tabel=>{
      tabel.increments('id').primary()
      tabel.string('name',80).notNullable()
      tabel.string('email',80).notNullable()
      tabel.string('password',80).notNullable()
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users')
};
