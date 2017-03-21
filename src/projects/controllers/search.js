const request = require('request');

const searchPhrase = require('../phrases').keyword;

const SEARCH_RESULT_LIMIT = 20;

function makeSearchList(results) {
  return results.reduce((mem, result) => {
    const server = 'afp://SignalNoise._afpovertcp._tcp.local';

    const path = result.path.replace(/\s/g, '%20');
    const link = `<${server}${path}|${result.name}>`;

    return `${mem}:open_file_folder: ${link}\n`;
  }, '');
}

function replyWithSearch(bot, message, query) {
  const endpoint = `http://127.0.0.1:3001/search?q=${query}&limit=${SEARCH_RESULT_LIMIT}`;

  request(endpoint, (err, response, body) => {
    if (err || response.statusCode !== 200) {
      return console.log('Error', err, response.statusCode);
    }

    const results = JSON.parse(body).results;

    if (!results.length) {
      return bot.reply(message, `I looked for *"${query}"* on the server but could not find anything :eyes:`);
    }

    const list = makeSearchList(results);
    const responseMsg = `Here's what I found for *"${query}"* on the server:\n${list}`;

    return bot.reply(message, {
      text: responseMsg,
      attachments: [],
    });
  });

  bot.startTyping(message);
}

module.exports = (bot, message) => {
  const text = message.text;
  const phrase = searchPhrase.exec(text)[0];
  const query = phrase === '' ? text : text.split(phrase)[1];

  if (!query.length) {
    bot.startConversation(message, (err, convo) => {
      return convo.ask('What project should I search for?', (response) => {
        replyWithSearch(bot, message, response.text);
        return convo.stop();
      });
    });
    return;
  }

  replyWithSearch(bot, message, query);
};
