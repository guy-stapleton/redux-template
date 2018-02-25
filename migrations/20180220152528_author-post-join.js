
exports.up = function(knex, Promise) {
    return Promise.all(
      knex.schema.createTable('author_post_join', (table) => {
        table.integer('author_id')
        table.integer('post_id')

        table.foreign('author_id')
          .references('author_id').inTable('authors')

        table.foreign('post_id')
          .references('post_id').inTable('posts')
      })
    )
};

exports.down = function(knex, Promise) {
  return Promise.all(
    knex.schema.dropTable('author_post_join')
  )
};
