
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('authors').del()
    .then(function () {
      // Inserts seed entries
      return knex('authors').insert([
        {author_id: 1, name: 'Guy Stapleton', email: 'gcs@gmail.com'},
        {author_id: 2, name: 'Carlos Boozer', email: 'cb@gmail.com'},
        {author_id: 3, name: 'Nate Robinson', email: 'nr@gmail.com'}
      ]);
    });
};
