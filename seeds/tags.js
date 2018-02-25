
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tags').del()
    .then(function () {
      // Inserts seed entries
      return knex('tags').insert([
        {tag_id: 1, tag_name: 'Beginings'},
        {tag_id: 2, tag_name: 'Middles'},
        {tag_id: 3, tag_name: 'Ends'}
      ]);
    });
};
