const template = require('../../templates');

module.exports = (bot, message) => {
  template('unknown').then((output) => {
    bot.reply(message, output);
  });
};
