// adapter of fetchAPI
const httpClientPlugin = {
    get: async (url) => {
        const resp = await fetch(url)
        return await resp.json()
    },

    post: async (url, body) => {
        const resp = await fetch(url)
        return await resp.json()
    }
};

module.exports = {
    httpClient: httpClientPlugin,
}