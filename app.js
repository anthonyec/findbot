const Botkit = require('./botkit');
require('./analytics');

// Specific chat topic controllers
// Handle small talk phrases like hey, bye and stuff
require('./small_talk');

// Handle searching the server using sn-project-search API
require('./projects');

// Middleware that affects each incoming message
const lowercaseMiddleware = require('./middleware/lowercase');
const unescapeMiddleware = require('./middleware/unescape');
const logMiddleware = require('./middleware/log');

Botkit.controller.middleware.receive.use(lowercaseMiddleware);
Botkit.controller.middleware.receive.use(unescapeMiddleware);
Botkit.controller.middleware.receive.use(logMiddleware);
