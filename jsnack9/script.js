let somma = 0;

for(i=1; i <= 10 ; i++){
  somma += i;
  console.log(somma)
}

const media = somma / 10;
console.log(media);

result = document.querySelector("#result").innerHTML = `La somma dei primi 10 numeri è ${somma} e la media di quest ultimi è ${media}.`