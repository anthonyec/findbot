const greetings = [
  'hey',
  'hi',
  'hello',
];

function getRandomGreeting() {
  const index = Math.floor(Math.random() * greetings.length);
  return greetings[index];
}

module.exports = (bot, message) => {
  const greeting = getRandomGreeting();
  const user = message.user;

  bot.api.users.info({user: message.user}, (error, response) => {
    const {name, real_name} = response.user;
    const firstName = real_name.split(' ')[0];

    bot.reply(message, `${greeting} ${firstName}, how can I help?`);
  });
};
