module.exports = (bot, message, next) => {
  if (message.text) {
    message.text = message.text.toLowerCase();
  }

  next();
}
