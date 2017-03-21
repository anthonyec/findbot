const template = require('../../templates');

module.exports = (bot, message) => {
  template('help').then((output) => {
    bot.reply(message, output);
  });
};
