const pokemonImage = document.getElementById('pokemon_image');
const pokemonNumber = document.getElementById("pokemon_number");
const pokemonName = document.getElementById("pokemon_name");
const formPokemon = document.getElementById("form");
const inputPokemon = document.getElementById("input");

const buttonPrev = document.getElementById("prev")
const buttonNext = document.getElementById("next")
var APIstatus = null;




function fetchPokemon(pokemon){
    const urlAPI = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    fetch(urlAPI)
        .then((response) =>{
            APIstatus = response.ok
            if(APIstatus){
                return response.json()
            }else{
                pokemonName.innerHTML = "- Not Found"
                pokemonImage.style.display = "none"
                pokemonNumber.innerHTML = " "
                input.value = " "
            }
        }).then(data =>{
            pokemonImage.src = data.sprites.front_default
            pokemonNumber.innerHTML = data.id + " " + "-"
            pokemonName.innerHTML = data.name
            search_number = data.id
        })
    }

formPokemon.addEventListener('submit', (event) => {
    event.preventDefault();
    fetchPokemon(input.value.toLowerCase());
});

buttonNext.addEventListener("click", () => {
    search_number++
    fetchPokemon(search_number)
})

buttonPrev.addEventListener("click", () => {
    if(search_number > 1){
        search_number--
        fetchPokemon(search_number);
    }
})

fetchPokemon("1")