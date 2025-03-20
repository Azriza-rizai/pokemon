const pokemonList = [
    { thumbnail: '001.png', id: 'N°01', name: 'Bulbasaur', type: ['plant', 'poison'] },
    { thumbnail: '002.png', id: 'N°02', name: 'Charmander', type: ['fire'] },
    { thumbnail: '003.png', id: 'N°03', name: 'Caterpie', type: ['bug'] },
    { thumbnail: '004.png', id: 'N°04', name: 'Kakuna', type: ['bug', 'poison'] },
    { thumbnail: '005.png', id: 'N°05', name: 'Rattata', type: ['plant'] },
    { thumbnail: '006.png', id: 'N°06', name: 'Pikachu', type: ['normal'] },
    { thumbnail: '007.png', id: 'N°07', name: 'Vulpix', type: ['fire', 'plant'] },
    { thumbnail: '008.png', id: 'N°08', name: 'Jigglypuff', type: ['normal', 'fairy'] },
    { thumbnail: '009.png', id: 'N°09', name: 'Mew', type: ['psychic'] },
    { thumbnail: '010.png', id: 'N°10', name: 'Ponyta', type: ['fire'] },
    { thumbnail: '011.png', id: 'N°11', name: 'Cloyster', type: ['ice', 'water'] },
    { thumbnail: '012.png', id: 'N°12', name: 'Groundor', type: ['ground'] },
    { thumbnail: '013.png', id: 'N°13', name: 'Cubone', type: ['ground'] },
    { thumbnail: '014.png', id: 'N°14', name: 'Tentacruel', type: ['poison', 'water'] },
    { thumbnail: '015.png', id: 'N°15', name: 'Darkrai', type: ['dark'] },
    { thumbnail: '016.png', id: 'N°16', name: 'Diglett', type: ['ground'] }
];

const pokedex = document.getElementById("pokedex");

pokemonList.forEach(pokemon => {
    const card = document.createElement("div");
    card.classList.add("pokemon-card");

    const img = document.createElement("img");
    img.src = "img/"+ pokemon.thumbnail;
    img.alt = pokemon.name;

    const info = document.createElement("div");
    info.classList.add("pokemon-info");
    info.innerHTML = `<h3>${pokemon.name}</h3><p>${pokemon.id}</p>`;

    const types = document.createElement("div");
    types.classList.add("pokemon-types");
    pokemon.type.forEach(type => {
        const typeSpan = document.createElement("span");
        typeSpan.classList.add(`type-${type}`);
        typeSpan.textContent = type;
        types.appendChild(typeSpan);
    });

    card.appendChild(img);
    card.appendChild(info);
    card.appendChild(types);
    pokedex.appendChild(card);
});