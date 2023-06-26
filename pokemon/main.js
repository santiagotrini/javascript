let pokemonId = Math.floor(Math.random() * 151);
let url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data);
    let card = document.createElement('div');
    let img = document.createElement('img');
    let title = document.createElement('h1');
    img.src = data.sprites.other.dream_world.front_default;
    title.textContent = data.name.toUpperCase();
    card.append(img);
    card.append(title);
    document.body.append(card);
  });
