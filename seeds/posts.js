
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {post_id: 1,
        author_id: 1,
        title: 'The Arrival',
        tag_id:  null,
        contents: 'A little story about beginings',
        date_added: null},
        {post_id: 2,
        author_id: 2,
        title: 'The Rise',
        tag_id:  null,
        contents: 'Things are getting interesting',
        date_added: null},
        {post_id: 3,
        author_id: 3,
        title: 'The Fall',
        tag_id:  null,
        contents: 'Things end badly',
        date_added: null}
      ]);
    });
};
