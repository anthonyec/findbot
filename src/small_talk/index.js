const { controller } = require('../botkit');

const greetingController = require('./controllers/greeting');
const goodbyeController = require('./controllers/goodbye');
const thanksController = require('./controllers/thanks');
const helpController = require('./controllers/help');

const phrases = require('./phrases');

const eventTypes = ['direct_message', 'direct_mention'];

controller.hears(phrases.help, eventTypes, helpController);
controller.hears(phrases.greeting, eventTypes, greetingController);
controller.hears(phrases.goodbye, eventTypes, goodbyeController);
controller.hears(phrases.thanks, eventTypes, thanksController);
