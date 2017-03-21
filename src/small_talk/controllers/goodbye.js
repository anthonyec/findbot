const template = require('../../templates');

const goodbyes = [
  'See ya',
  'TTYL',
  'Bye',
  'Bye bye',
  'Ok, see ya',
  'Good luck',
];

function getRandomGoodbye() {
  const index = Math.floor(Math.random() * goodbyes.length);
  return goodbyes[index];
}

module.exports = (bot, message) => {
  const goodbye = getRandomGoodbye();

  template('goodbye', { goodbye }).then((output) => {
    bot.reply(message, output);
  });
};
