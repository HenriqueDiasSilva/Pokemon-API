// Pokemon's List
const ul = document.getElementById('pokemons');
const url = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=' + Math.floor(Math.random() * 1154)

fetch(url)
    .then(response => response.json())
    .then(data => {
        data.results.map(function (pokemon) {
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.setAttribute("onclick", `searchPokemon("${pokemon.url}")`)
            a.innerText = pokemon.name[0].toUpperCase() + pokemon.name.slice(1).toLowerCase();

            li.appendChild(a);
            ul.appendChild(li);
        })
    })


// Search Specific Pokemon
cont = 0
function searchPokemon(url) {
    const specific = document.getElementById('pokemon')

    fetch(url)
        .then(response => response.json())
        .then(pokemon => {
            let img = document.createElement("img")
            img.src = pokemon.sprites.front_default

            let text = document.createElement("p")
            text.innerText = `NAME: ${pokemon.name[0].toUpperCase() + pokemon.name.slice(1).toLowerCase()}
            ID: ${pokemon.id}
            HEIGHT: ${pokemon.height}
            WEIGHT: ${pokemon.weight}`

            if (cont != 0) {
                specific.innerHTML = ''
            }

            specific.appendChild(img)
            specific.appendChild(text)
            cont++
        })
}