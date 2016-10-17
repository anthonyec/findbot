const { controller } = require('../botkit');
const searchController = require('./controllers/search');

const phrases = require('./phrases');

controller.hears([phrases.search], ['direct_message', 'direct_mention'], searchController);
