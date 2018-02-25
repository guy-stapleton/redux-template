
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('author_post_join').del()
    .then(function () {
      // Inserts seed entries
      return knex('author_post_join').insert([
        {author_id: 1, post_id: 1},
        {author_id: 2, post_id: 2},
        {author_id: 3, post_id: 3}
      ]);
    });
};
