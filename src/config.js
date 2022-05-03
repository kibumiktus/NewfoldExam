var config = {};
config.port = process.env.PORT || 8080;
config.apiRoot = process.env.ROOT || '/v1'
config.mongoConnectionString = process.env.MONGO_CONNECTION_STRING
module.exports = config