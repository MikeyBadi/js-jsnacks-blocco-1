const invitato = prompt("Inserisci il tuo nome")

const pplInvited  = ["mihai", "teo", "giulio"]



if (pplInvited.includes(invitato)){
  document.querySelector("#result").innerHTML  = "benvenuto/a alla festa: " + invitato
} else {
  document.querySelector("#result").innerHTML  = "Non è stato invitato alla festa"
}
  