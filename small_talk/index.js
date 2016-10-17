const { controller } = require('../botkit');

const greetingController = require('./controllers/greeting');
const goodbyeController = require('./controllers/goodbye');
const helpController = require('./controllers/help');

const phrases = require('./phrases');

controller.hears(phrases.help, ['direct_message', 'direct_mention'], helpController);
controller.hears(phrases.greeting, ['direct_message', 'direct_mention'], greetingController);
controller.hears(phrases.goodbye, ['direct_message', 'direct_mention'], goodbyeController);
