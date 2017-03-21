const firstTimeMessage = require('../assets/messages/first_time.txt');

module.exports = (bot, message, next) => {
  if (true) {
    bot.reply(message, firstTimeMessage);
  } else {
    next();
  }
}

