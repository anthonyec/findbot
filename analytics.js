const { controller } = require('./botkit');
const dashbot = require('dashbot')(process.env.DASHBOT_API_KEY).slack;

const env = require('./enviroments');

// Don't send analytic data if running in a development environment
if (process.env.NODE_ENV !== env.DEV) {
  controller.middleware.receive.use(dashbot.receive);
  controller.middleware.send.use(dashbot.send);
}
