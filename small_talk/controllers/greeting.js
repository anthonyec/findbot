const greetings = [
  'Hey there!',
  'Hi',
  'Hello',
];

module.exports = (bot, message) => {
  bot.reply(message, 'Hey, how can I help?');
};
