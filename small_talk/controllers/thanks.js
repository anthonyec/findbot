const thanks = [
  'No problem',
  'Anytime',
  'Happy to help',
];

function getRandomThanks() {
  const index = Math.floor(Math.random() * thanks.length);
  return thanks[index];
}

module.exports = (bot, message) => {
  const thank = getRandomThanks();
  bot.reply(message, thank);
};
