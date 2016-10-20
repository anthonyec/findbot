const goodbyes = [
  'see ya',
  'TTYL',
  'bye',
  'ok, see ya',
  'good luck',
];

function getRandomGoodbye() {
  const index = Math.floor(Math.random() * goodbyes.length);
  return goodbyes[index];
}

module.exports = (bot, message) => {
  const goodbye = getRandomGoodbye();
  const user = message.user;

  bot.reply(message, goodbye);
};
