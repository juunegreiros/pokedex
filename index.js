const lista = document.querySelector('ul')

fetch('https://pokeapi.co/api/v2/pokemon')
  .then(function(juamor){
    return juamor.json()
  })
  .then(function(dados){
    const pokemons = dados.results

    pokemons.forEach((pokemon) => {
      const item = document.createElement('li')
      item.innerHTML = pokemon.name
      lista.appendChild(item)
    })
  })