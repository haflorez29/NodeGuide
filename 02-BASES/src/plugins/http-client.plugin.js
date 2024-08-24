// adapter of fetchAPI
const axios = require('axios');

// idea para el caso en que se necesito apis publicas y una con validación
// const buildHttpClient = (headers)=>{
//     return
// }

const httpClientPlugin = {
    // fetch
    // get: async (url) => {
    //     const resp = await fetch(url)
    //     return await resp.json()
    // },
    
    // axios
    get: async (url) => {
        const { data } = await axios.get(url)
        return await data
    },
    
    post: async (url, body) => {
        const resp = await fetch(url)
        return await resp.json()
    }
};

module.exports = {
    httpClient: httpClientPlugin,
}