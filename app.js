const Botkit = require('./src/botkit');
require('./src/analytics');

// Specific chat topic controllers
// Handle small talk phrases like hey, bye and stuff
require('./src/small_talk');

// Handle searching the server using sn-project-search API
require('./src/projects');

// Middleware that affects each incoming message
const lowercaseMiddleware = require('./src/middleware/lowercase');
const unescapeMiddleware = require('./src/middleware/unescape');
const logMiddleware = require('./src/middleware/log');

Botkit.controller.middleware.receive.use(lowercaseMiddleware);
Botkit.controller.middleware.receive.use(unescapeMiddleware);
Botkit.controller.middleware.receive.use(logMiddleware);
