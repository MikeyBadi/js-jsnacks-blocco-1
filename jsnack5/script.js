const arrOdd = []

for(let i = 0; i < 6; i++){
  const numero = parseInt(prompt("Inserisci il numero intero"))
  
  console.log(numero);

  if(numero % 2){
    arrOdd.push(numero)
  }

  console.log(arrOdd);
};

document.querySelector("#result").innerHTML = `I numeri dispari che hai inserito sono = ${arrOdd}`