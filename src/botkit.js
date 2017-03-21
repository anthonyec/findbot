const debug = require('debug')('findbot');
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
    debug('[error]');
    throw Error(err);
  }

  debug('[connected]');
});

controller.on('rtm_close', () => {
  debug('[rtm_close]');
});

module.exports.Botkit = Botkit;
module.exports.controller = controller;
