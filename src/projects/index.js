const { controller } = require('../botkit');
const searchController = require('./controllers/search');

const phrases = require('./phrases');

const eventTypes = ['direct_message', 'direct_mention'];

controller.hears([phrases.search], eventTypes, searchController);
