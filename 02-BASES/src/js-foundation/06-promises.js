const getPokemonById = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    // return fetch(url)
    //     // .then((response) =>response.json().then(data =>console.log(data)))
    //     // .catch()
    //     .then((response)=>response.json())
    //     .then(()=> { throw new Error('pokemon dont exist')})
    //     .then(data =>data.name)
    // asyn await
    try {
        const resp = await fetch(url)
        const pokemon = await resp.json()
        return pokemon.name
    } catch {
        console.error('pokemon no existe');
    }
}

module.exports = getPokemonById