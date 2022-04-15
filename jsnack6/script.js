

const result = document.querySelector('#result');

numero = parseInt(prompt('insirisci un numero'));
let cubo;

for(let i = 1; i <= numero; i++){
  cubo = (i**3);
  result.innerHTML += "il cubo di " + i + " è " + cubo + "<br>"
  console.log(cubo);
}