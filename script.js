async function getPoke() {
  let search = document.getElementById("search").value;
  let name = document.getElementById("name");
  let abilities = document.getElementById("abilities");
  let pokemonImg = document.getElementById("pokemonImg");
  let baseXp = document.getElementById("baseXp");
  let height = document.getElementById("height");
  let pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  let data = await pokemon.json();
  console.log(data);

  let firstLetter = search.slice(0, 1).toUpperCase();
  let restLetters = search.slice(2);

  search = firstLetter + restLetters;
  abilities.textContent = "";
  data.abilities.forEach((abilityObj) => {
    let abilityName = abilityObj.ability.name;
    abilities.textContent += `${abilityName + ","} `; // Append ability name to the abilities element
  });

  name.textContent = search;

  pokemonImg = pokemonImg.src = data.sprites.front_default;
  console.log(pokemonImg);

  baseXp.innerHTML = data.base_experience;
  height.innerHTML = data.height;
}
function getDetails() {
  let shownDetails = document.getElementById("shownDetails");
  if (shownDetails.style.display === "none") {
    shownDetails.style.display = "block";
  } else {
    shownDetails.style.display = "none";
  }
}
