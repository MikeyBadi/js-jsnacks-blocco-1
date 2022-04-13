// JSnack 2
// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

const firstWord = prompt ("Inserisci una parola");
console.log(firstWord);

const secondWord = prompt ("Inserisci un'altra parola");
console.log(secondWord);

const result = document.querySelector('#risultato')

if (firstWord.length > secondWord.length){
  result.innerHTML = `la parola più lunga è ${firstWord} e la più corta è ${secondWord}`;
} else if (firstWord.length < secondWord.length){
  result.innerHTML = `la parola più lunga è ${secondWord} e la più corta è ${firstWord}`;
} else {
  result.innerHTML = `La parola ${firstWord} e la parola ${secondWord} sono di egual misura`;
};