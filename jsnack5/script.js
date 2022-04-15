const arrOdd = []
const arrEven = []

for(let i = 0; i < 6; i++){
  const numero = parseInt(prompt("Inserisci il numero intero"))
  
  console.log(numero);

  if(numero % 2){
    arrOdd.push(numero)
  } else {
    arrEven.push(numero)
  }

  console.log(arrOdd);
};

document.querySelector("#resultOdd").innerHTML = `I numeri dispari che hai inserito sono = ${arrOdd}`

document.querySelector("#resultEven").innerHTML = `gli altri numeri che hai inserito sono pari = ${arrEven}`