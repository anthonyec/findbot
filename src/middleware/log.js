module.exports = (bot, message, next) => {
  if (message.type === 'message' && !message.replyTo) {
    console.log(message.text);
  }

  next();
};

