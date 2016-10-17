const Botkit = require('botkit');
const controller = Botkit.slackbot({
  debug: false,
});

controller.spawn({
  token: 'xoxb-91842795602-FHiU40tQBBM5I4omrTGH69YG',
}).startRTM();

module.exports.Botkit = Botkit;
module.exports.controller = controller;
