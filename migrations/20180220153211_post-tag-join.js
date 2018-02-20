
exports.up = function(knex, Promise) {
  return Promise.all(
    knex.schema.createTable('post_tag_join', (table) => {
      table.integer('post_id')
        .references('post_id')
        .inTable('posts')
      table.integer('tag_id')
        .references('tag_id')
        .inTable('tags')
    })
  )
};

exports.down = function(knex, Promise) {
  return Promise.all(
    knex.schema.dropTable('post_tag_join')
  )
};
