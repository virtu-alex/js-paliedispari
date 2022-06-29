/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/


// ?1 - Come la chiamo?
// ?2 - Ho bisogno di parametri? (se si quali?)
// ?3 - Devo restituire qualcosa? (se si cosa? di che tipo?)
// ?4 - OPZIONALE:  Qualcosa  potrebbe andare storto? (se si, cosa?)



//AZIONE 1 ---- CHIEDO ALL'UTENTE UNA PAROLA
let userWord = prompt("Inserisci una parola", "anna");
let reversedWord = swapWord(userWord);
//AZIONE 2 ---- CREO UNA FUNZIONE CON RELATIVO CONTROLLO
function swapWord(word) {
  //AZIONE 3 ---- VARIABILE APPOGGIO DI TIPO STRINGA
  let result = '';
  //DICHIARO VARIABILE "I" PER IL CICLO WHILE
  let i = word.length - 1;
  //CICLO WHILE
  while (i >= 0) {
    result += word[i];
    //DECREMENTO
    i--;
  }
  // controllo se abbia inserito effettivamente LETTERE ed in caso, chiedo nuovamente.
  while (!isNaN(word) || word.length == "") {
    // Alert NO PAROLA
    alert('Non hai inserito una parola')
    // Richiamo nuovamente il prompt FINCHE' non soddisfa i requisiti (in questo caso, no numeri)
    word = prompt("Inserisci una parola", "anna");
  }
  // Stampo in console i risultati
  console.log(word)
  console.log(result)
  if (word == result) {
    console.log('la parola inserita è palindroma');
  } else {
    console.log('la parola inserita non è palindroma');
  }
  // ----- Return -----
  return result;
}
