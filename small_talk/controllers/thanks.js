const thanks = [
  'no problem',
  'anytime',
  'happy to help',
];

function getRandomThanks() {
  const index = Math.floor(Math.random() * thanks.length);
  return thanks[index];
}

module.exports = (bot, message) => {
  const thank = getRandomThanks();
  const user = message.user;

  bot.reply(message, thank);
};
