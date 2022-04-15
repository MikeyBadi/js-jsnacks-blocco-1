
const result = document.querySelector("#result")

let tot = 1

let i = 0

do{
  result.innerHTML += 2 + " esponente " + i + " è uguale a: " + tot + "<br>";
  i++
  tot = 2**i
  console.log(tot);
  console.log("esponente",i)
} while (tot < 1000)
