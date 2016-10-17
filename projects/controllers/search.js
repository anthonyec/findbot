const projects = require('../projects');
const searchPhrase = require('../phrases').search;

function replyWithSearch(bot, message, query) {
  let results = projects.search(query);

  if (!results.length) {
    bot.reply(message, `I looked for *"${query}"* on the server but could not find anything :eyes:`);
    return;
  }

  if (results.length > 3) {
    results = results.slice(0, 3);
  }

  results = results.sort((a, b) => {
    return b.id - a.id;
  });

  const list = results.reduce((mem, result) => {
    const server = 'afp://SignalNoise._afpovertcp._tcp.local/';
    const path = result.path.replace('/Volumes/', '').replace(/\s/g,'%20');

    return mem + `:open_file_folder: ${server}${path}\n`;
  }, '');

  // const response = `I searched for *"${query}"* on the server. Here's what I found:\n${list}`;
  const response = `Here's what I found for *"${query}"* on the server:\n${list}`;

  bot.startTyping(message);
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
