var config = {};
config.port = process.env.PORT || 8080;
config.apiRoot = process.env.ROOT || '/v1';

module.exports = config;