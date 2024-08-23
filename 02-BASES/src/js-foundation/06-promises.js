const getPokemonById = (id,callback) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    return fetch(url)
        // .then((response) =>response.json().then(data =>console.log(data)))
        // .catch()
        .then((response)=>response.json())
        .then(()=> { throw new Error('pokemon dont exist')})
        .then(data =>data.name)
}

module.exports = getPokemonById