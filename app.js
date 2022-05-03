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
  this.name = name;
  this.weight = weight;
  this.height = height;
  this.diet = diet;
}

function fetchData(){
  fetch('dino.json')
    .then(response => {
      return response.json(); 
    })
    .then((data) => {
    console.log(data)
    })
    
}


document.addEventListener("DOMContentLoaded", function () {
const form = document.getElementById("dino-compare");
  console.log("ready");
form.addEventListener("submit", (e) => {
  e.preventDefault();
     e.stopPropagation();
     const elements = Array.from(e.currentTarget);
     const state = elements.reduce((acc, el) => {
       if (el.name) {
         acc[el.name] = el.value;
       }

       return acc;
     }, {});

     console.log(state); // {test: '123'}



  form.remove();
  console.log("Js working");
  fetchData();
});
});