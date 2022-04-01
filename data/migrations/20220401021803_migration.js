
exports.up = async function(knex) {
  await knex.schema
  .createTable('contestants', tbl => {
      tbl.increments('contestant_id')
      tbl.string('name').notNullable()
      tbl.integer('season').notNullable()
  })
};

exports.down = async function(knex) {
  await knex.schema
  .dropTableIfExists('contestants')
};
