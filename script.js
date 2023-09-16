const pokemonContenedor = document.querySelector('.ContenedorPokemon')

function fetchPokemon(id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => res.json())
    .then((data) => {
        crearPokemon(data);

    });

} 

function fetchPokemons(number){
    for (let i =1; i <= number; i++ ){
        fetchPokemon(i);
    }
}


function crearPokemon(pokemon){

    const card = document.createElement('div');
    card.classList.add('bloque-pokemon');

    const spriteContainer = document.createElement('div');
    spriteContainer.classList.add('imagen-contenedor');

    const sprite = document.createElement('img');
    sprite.src = pokemon.sprites.front_default;

    spriteContainer.appendChild(sprite);

    const number =document.createElement('p');
    number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;

    const name = document.createElement('p');
    name.classList.add('nombre');
    name.textContent = pokemon.name;

    const type = document.createElement("p")
    type.classList.add("tipo")
    type.textContent = `Tipo: ${pokemon.types.map((type) => type.type.name).join(", ")}`;

card.appendChild(spriteContainer);
card.appendChild(number);
card.appendChild(name);
card.appendChild(type);


pokemonContenedor.appendChild(card);
}

fetchPokemons(151);