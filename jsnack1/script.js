// JSnack 1
//  L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore

let firstNumber = prompt("Insert you first number")
console.log(firstNumber);

let secondNumber = prompt("Insert your second number")
console.log(secondNumber);

let result;

if (firstNumber > secondNumber){
  result = firstNumber
  document.getElementById("mb_bigger_number").innerHTML = `Il numero più grande che hai messo è il 1°: ${result}`
  console.log(result)
} else {
  result = secondNumber
  document.getElementById("mb_bigger_number").innerHTML = `In numero più grande che hai messo è il 2°: ${result}`
};