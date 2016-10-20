exports.up = function(knex, Promise) {
  return knex.schema.createTable('searches', function (table) {
    table.increments();
    table.string('query');
    table.string('message');
    table.string('response');
    table.string('user_slack_id');
    table.boolean('is_successfull');
    table.timestamps();
  });

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('searches');
};
