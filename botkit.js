const Botkit = require('botkit');

const controller = Botkit.slackbot({
  debug: false,
  stats_optout: true,
});

const bot = controller.spawn({
  token: process.env.SNBOT_TOKEN || '',
  retry: 10,
});

bot.startRTM((err) => {
  if (err) {
    console.log('[error]');
    throw Error(err);
  }

  console.log('[connected]');
});

controller.on('rtm_close', (e) => {
  console.log('[rtm_close]');
});

module.exports.Botkit = Botkit;
module.exports.controller = controller;
