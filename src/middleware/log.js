const debug = require('debug')('findbot');

module.exports = (bot, message, next) => {
  if (message.type === 'message' && !message.replyTo) {
    debug(message.text);
  }

  next();
};

