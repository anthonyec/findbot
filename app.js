const Botkit = require('./botkit');
const analytics = require('./analytics');

// Specific chat topic controllers
// Handle small talk phrases like hey, bye and stuff
const smallTalk = require('./small_talk');

// Handle searching the server using sn-project-search API
const projects = require('./projects');

// Middleware that affects each incoming message
const lowercaseMiddleware = require('./middleware/lowercase');
const unescapeMiddleware = require('./middleware/unescape');
const logMiddleware = require('./middleware/log');

Botkit.controller.middleware.receive.use(lowercaseMiddleware);
Botkit.controller.middleware.receive.use(unescapeMiddleware);
Botkit.controller.middleware.receive.use(logMiddleware);
