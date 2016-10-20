const Botkit = require('botkit');

const controller = Botkit.slackbot({
  debug: false,
});

let bot;

function spawn() {
  bot = controller.spawn({
    token: process.env.SNBOT_TOKEN || '',
  }).startRTM();
}

controller.on('rtm_close', (e) => {
  setTimeout(() => {
    console.log('Retry...');
    spawn();
  }, 5000);
});

spawn();

module.exports.Botkit = Botkit;
module.exports.controller = controller;
