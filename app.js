const button = document.getElementById("btn");
const formRef = document.getElementById("dino-compare");
const clearScreen = (ref) => {
  ref.remove();
};

function dinosaur(species, weight, height, diet, where, when, fact) {
  this.species = species;
  this.weight = weight;
  this.height = height;
  this.diet = diet;
  this.where = where;
  this.when = when;
  this.fact = fact;
}

function human(name, weight, height, diet) {
  this.species = "human";
  this.fact = "Random Fact";
  this.name = name;
  this.weight = weight;
  this.height = height;
  this.diet = diet;
}

let dinoArr = [];
fetch("dino.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.Dinos.forEach((dino) => {
      let dinoObj = new dinosaur(
        dino.species,
        dino.weight,
        dino.height,
        dino.diet,
        dino.where,
        dino.when,
        dino.fact
      );
      dinoArr.push(dinoObj);
    });
  });

function getHumanData() {
  return (function () {
    const humanName = document.getElementById("name").value;
    const humanFeet = document.getElementById("feet").value;
    const humanInches = document.getElementById("inches").value;
    const humanWeight = document.getElementById("weight").value;
    const humanDiet = document.getElementById("diet").value;
    let height = parseInt(humanFeet) * 12 + parseInt(humanInches);

    return new human(humanName, humanWeight, height, humanDiet);
  })();
}

function populateTiles() {
  let humanData = getHumanData();
  clearScreen(formRef);
  dinoArr.splice(4, 0, humanData);
  for (let i = 0; i < dinoArr.length; i++) {
    const tile = document.createElement("div");
    tile.className = "grid-item";
    tile.innerHTML = `<h2>${dinoArr[i].species}</h2> <img src="images/${dinoArr[
      i
    ].species.toLowerCase()}.png"/> <h3>${dinoArr[i].fact}</h3>`;
    document.querySelector("#grid").appendChild(tile);
  }
}

function heightDifference() {
  return dinosaur.height - humanHeight;
}
console.log(heightDifference);

function dietDifference() {
  return dinosaur.diet;
}
console.log(dietDifference);

button.addEventListener("click", () => {
  populateTiles();
});
