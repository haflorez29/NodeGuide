const { getAgeAdapter } = require('./get-age.plugin')
const { getUUID } = require('./get-id.plugin')
const { httpClient } = require('./http-client.plugin')
const buildLogger = require('./logger.plugin')

module.exports = {
    getAgeAdapter,
    getUUID,
    httpClient,
    buildLogger
}