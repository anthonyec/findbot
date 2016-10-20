const { controller } = require('../botkit');

const greetingController = require('./controllers/greeting');
const goodbyeController = require('./controllers/goodbye');
const thanksController = require('./controllers/thanks');
const helpController = require('./controllers/help');
const unknownController = require('./controllers/unknown');

const phrases = require('./phrases');

controller.hears(phrases.help, ['direct_message', 'direct_mention'], helpController);
controller.hears(phrases.greeting, ['direct_message', 'direct_mention'], greetingController);
controller.hears(phrases.goodbye, ['direct_message', 'direct_mention'], goodbyeController);
controller.hears(phrases.thanks, ['direct_message', 'direct_mention'], thanksController);
controller.hears(phrases.unknown, ['direct_message', 'direct_mention'], unknownController);
