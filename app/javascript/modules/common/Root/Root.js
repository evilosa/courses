const { env } = require('process');

if (env.NODE_ENV === 'production') {
    module.exports = require('./Root.prod.js');
} else {
    module.exports = require('./Root.dev.js');
}