const redis = require('redis');
const manipulalista = require('./manipula-lista');
const allowlist = redis.createClient({prefix: 'allowlist-refresh-token:'});

module.exports = manipulalista(allowlist);