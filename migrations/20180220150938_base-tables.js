
exports.up = function(knex, Promise) {
  return Promise.all([

    knex.schema.createTable('authors', (table) => {
      table.increments('author_id').primary()
      table.string('name')
      table.string('email')
    }),
    knex.schema.createTable('posts', (table)=> {
      table.increments('post_id').primary()
      table.integer('author_id')
        .references('author_id')
        .inTable('authors')
      table.string('title')
      table.integer('tag_id')
        .references('tag_id')
        .inTable('tags')
      table.string('contents')
      table.date('date_added')
    }),
    knex.schema.createTable('tags', (table)=> {
      table.increments('tag_id').primary()
      table.string('tag_name')
    })
  ])
};

exports.down = function(knex, Promise) {
return Promise.all(
  knex.schema.dropTable('authors'),
  knex.schema.dropTable('posts'),
  knex.schema.dropTable('tags')
)
};
