let firstNumber = parseInt(prompt("Inserisci il primo numero"));
console.log(firstNumber);
let secondNumber = parseInt(prompt("Inserisci il secondo numero"));
console.log(secondNumber);
let thirdNumber = parseInt(prompt("Inserisci il terzo numero"));
console.log(thirdNumber);
let fourthNumber = parseInt(prompt("Inserisci il quarto numero"));
console.log(fourthNumber);
let fifthNumber = parseInt(prompt("Inserisci il quinto numero"));
console.log(fifthNumber);

const total = firstNumber + secondNumber + thirdNumber + fourthNumber + fifthNumber;;
console.log(total);

const result = document.querySelector('#result').innerHTML = `La somma totale è: ${total}`