const Botkit = require('botkit');
const controller = Botkit.slackbot({
  debug: false,
});

controller.spawn({
  token: process.env.SNBOT_TOKEN || '',
}).startRTM();

module.exports.Botkit = Botkit;
module.exports.controller = controller;
