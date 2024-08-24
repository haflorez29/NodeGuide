const { getAgeAdapter } = require('./get-age.plugin')
const { getUUID } = require('./get-id.plugin')
const { httpClient } = require('./http-client.plugin')

module.exports = {
    getAgeAdapter,
    getUUID,
    httpClient
}