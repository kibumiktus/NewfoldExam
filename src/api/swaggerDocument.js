const yaml = require('js-yaml')
const fs   = require('fs')
module.exports = yaml.load(fs.readFileSync('api/swagger.yaml', 'utf8'))
