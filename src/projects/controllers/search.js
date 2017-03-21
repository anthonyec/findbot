const debug = require('debug')('findbot');
const request = require('request');
const template = require('../../templates');

const searchPhrase = require('../phrases').keyword;

const SEARCH_RESULT_LIMIT = 20;

function cleanResults(results) {
  return results.map((result) => {
    const newResult = result;

    newResult.path = result.path.replace(/\s/g, '%20');

    return newResult;
  });
}

function replyWithSearch(bot, message, query) {
  const url = 'http://127.0.0.1:3001/search?q=';
  const endpoint = `${url}${query}&limit=${SEARCH_RESULT_LIMIT}`;

  request(endpoint, (err, response, body) => {
    if (err || response.statusCode !== 200) {
      return debug(err);
    }

    let results = JSON.parse(body).results;

    if (!results.length) {
      template('no_results', { query }).then((output) => {
        return bot.reply(message, output);
      });

      return false;
    }

    results = cleanResults(results);

    return template('results', { query, results }).then((output) => {
      return bot.reply(message, {
        text: output,
        attachments: [],
      });
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
