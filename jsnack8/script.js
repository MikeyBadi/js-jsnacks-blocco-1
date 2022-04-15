let number = prompt("Inserisci un numero a 4 cifre");
console.log(number);
const numberArr = []

if(number.length !== 4){
alert("per favore inserire un numero di 4 cifre");
let number = prompt("Inserisci un numero a 4 cifre");
console.log(number);
}


for(i=0; i < number.length; i++){
  const singleNumber = number.charAt(i);
  numberArr.push(singleNumber)
  console.log(numberArr);
};

let result = 0;

for(i=0; i < numberArr.length; i++){
  result += parseInt(numberArr[i]);
  console.log(result);
};

document.querySelector("#result").innerHTML = "Il totale del numero estratto è: " + result
