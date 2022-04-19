let total = 0

for(let i = 0; i < 5; i++ ){
  let number = parseInt(prompt(`Inserisci il ${i+1}° numero`));
  total += number;
};

const result = document.querySelector('#result').innerHTML = `La somma totale è: ${total}`