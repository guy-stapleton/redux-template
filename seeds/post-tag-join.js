
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('post_tag_join').del()
    .then(function () {
      // Inserts seed entries
      return knex('post_tag_join').insert([
        {post_id: 1, tag_id: 1},
        {post_id: 2, tag_id: 2},
        {post_id: 3, tag_id: 3}
      ]);
    });
};
