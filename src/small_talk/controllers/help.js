module.exports = (bot, message) => {
  const text = message.text;

  switch (text) {
    case 'search':
      bot.startTyping(message);

      setTimeout(() => {
        bot.reply(message, 'You can search for project folders by sending me messages like these:');
        bot.reply(message, '`find drax`\n`search for signal web`\n`look for ubs 2015 conf`');
      }, Math.random() * 500);

      break;

    default:
      bot.reply(message, 'I\'m not that smart right now but I can find project folders for you');
      bot.reply(message, 'Send me a message like `find drax`');
      break;
  }
};
