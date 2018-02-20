
exports.up = function(knex, Promise) {
    return Promise.all(
      knex.schema.createTable('author_post_join', (table) => {
        table.integer('author_id')
          .references('author_id')
          .inTable('authors')
        table.integer('post_id')
          .references('post_id')
          .inTable('posts')
      })
    )
};

exports.down = function(knex, Promise) {
  return Promise.all(
    knex.schema.dropTable('author_post_join')
  )
};
