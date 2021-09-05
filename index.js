const pokedex = document.getElementById('pokedex');

  const fetchPokemon = () => {
      const promises = [];
      for (let i = 1; i <= 150; i++) {
          const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
          promises.push(fetch(url).then((res) => res.json()));
      }
      Promise.all(promises).then((results) => {
          const pokemon = results.map((result) => ({
              name: result.name,
              image: result.sprites['front_default'],
              type: result.types.map((type) => type.type.name).join(', '),
              ability: result.abilities.map((ability) =>ability.ability.name).join(', '),
              id: result.id
          }));
          displayPokemon(pokemon);
      });
  };

const displayPokemon = (pokemon) => {
    console.log(pokemon);
    const pokemonHTMLString = pokemon
        .map(
            (pokeman) => `
        <li class="card">
            <img class="card-image" src="${pokeman.image}"/>
            <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2>
            <p class="card-subtitle">Type: ${pokeman.type}</p>
            <p class="card-ability"> Ability: ${pokeman.ability}</p>
        </li>
    `
        )
        .join('');
    pokedex.innerHTML = pokemonHTMLString;
};

fetchPokemon();



        // fetch(url)
        //     .then( res => {
        //         return res.json();
        //     })
            // .then(data => { //promise
            //     console.log(data);
            //     const pokemon = {
                    
            //     };
            //     console.log(pokemon);
        
            // const pokemon = {};
            // pokemon['name'] = data.name;
            // pokemon['id'] = data.id;
            // pokemon['image'] = data.sprites['front_default'];
            // // pokemon['type'] = data.types.type;
            // // pokemon['type'] = ""; //initialize empty string to get rid of the undefined type coming in the output
            // // data.types.forEach((type) => { //iterate over the array and concatenate them to separated by comma and display in a line
            // //     pokemon['type'] = pokemon['type'] + ',' + type.type.name;
            // // })
            // //making the forEach lot cleaner
            // //Pokemon Types
            // pokemon['type'] = data.types
            //     .map((type) => type.type.name)
            //     .join(', ');
            // // adding abilities
            // pokemon['ability'] = data.abilities
            //     .map((ability) => ability.ability.name)
            //     .join(', ');
            // ability: data.abilities.map((ability) =>ability.ability.name).join(', '),

            // <p class="card-ability"> Ability: ${pokeman.ability}</p>
