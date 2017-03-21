const template = require('../../templates');

const greetings = [
  'Hey',
  'Hi',
  'Hello',
];

function getRandomGreeting() {
  const index = Math.floor(Math.random() * greetings.length);
  return greetings[index];
}

module.exports = (bot, message) => {
  const greeting = getRandomGreeting();
  const user = message.user;

  bot.api.users.info({ user }, (error, response) => {
    const { real_name } = response.user;
    const firstName = real_name.split(' ')[0];

    template('greeting', { greeting, firstName }).then((output) => {
      bot.reply(message, output);
    });
  });
};
