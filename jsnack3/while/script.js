let total = 0;
const richieste = 5;

c = 0

while(richieste > c){
  let number = parseInt(prompt(`Inserisci il ${c} numero`));

  total += number;

  c++
}

const result = document.querySelector('#result').innerHTML = `La somma totale è: ${total}`;
