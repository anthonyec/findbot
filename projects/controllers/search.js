const projects = require('../projects');
const searchPhrase = require('../phrases').search;

function replyWithSearch(bot, message, query) {
  const results = projects.search(query);

  if (!results.length) {
    bot.reply(message, `I looked for "${query}" on the server but could not find anything :eyes:`);
    return;
  }

  const list = results.reduce((mem, result) => {
    const server = 'afp://SignalNoise._afpovertcp._tcp.local/';
    const path = result.path.replace('/Volumes/', '').replace(/\s/g,'%20');

    return mem + `${server}${path}\n`;
  }, '');

  const response = `I searched for "${query}" on the server. Here's what I found:\n${list}`;

  bot.reply(message, response);
}

module.exports = (bot, message) => {
  const text = message.text;
  const phrase = searchPhrase.exec(text)[0];
  const query = text.split(phrase)[1];

  if (!query.length) {
    bot.startConversation(message, function(err, convo) {
      convo.ask('What project should I search for?', function(response, convo) {
        replyWithSearch(bot, message, response.text);
        convo.stop();
      });
    });

    return;
  }

  replyWithSearch(bot, message, query);
};
