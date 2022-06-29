/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Sommiamo i due numeri
Dichiariamo chi ha vinto.*/




// ?1 - Come la chiamo?
// ?2 - Ho bisogno di parametri? (se si quali?)
// ?3 - Devo restituire qualcosa? (se si cosa? di che tipo?)
// ?4 OPZIONALE:  Qualcosa  potrebbe andare storto? (se si, cosa?)





// ----- FUNZIONE NUMERO RANDOM PER CPU
function randomNumberFromCpu(min, max) {
    // ----- FORMULA MATH RANDOM
    return Math.floor(Math.random() * (max - min) + min);
}

let randomCpu = randomNumberFromCpu(1, 5);
// Creo delle variabili da poter ri-utilizzare nel codice
let pari = "pari";
let dispari = "dispari";

// ----- PROMPT PARI O DISPARI
let userChoice = prompt("Pari o dispari").toLowerCase();

// ----- PROMPT INSERISCI NUMERO
let userNumber = parseInt(prompt("Inserisci un numero compreso tra 1 e 5"));

// ----- VARIABILE DI APPOGGIO PER LA SOMMA
let sum = 0;
// ----- SOMMA = NUMERO GENERATO RANDOMICAMENTE + PROMPT USER 
sum = randomCpu + userNumber;
// FUNZIONE PER DETERMINARE SE IL NUMERO E' DIVISIBILE PER 2 QUINDI TRUE
function isEven(numero) {
    // --- VARIABILE FLAG
    let result;
    // --- SE E' DIVISIBILE PER 2 ALLORA E' = PARI
    if (numero % 2 === 0) {
        result = pari;
        // --- OPPURE SE NON LO E' = DISPARI
    } else {
        result = dispari;
    }
    // --- RETURN
    return result;
}

// ----- se l'utente inserisce pari e il risultato della somma e' pari ----> hai vinto
// ----- se l'utente inserisce dispari e il risultato della somma e' dispari ----> hai vinto
// ----- se l'utente inserisce pari e il risultato della somma e' dispari ----> hai perso
// ----- se l'utente inserisce dispari e il risultato della sommm e'a pari ----> hai perso

// CONTROLLO 
if (userChoice == pari && isEven(sum)) {
    alert('Hai vinto');
    console.log(sum + ` Somma totale`);
} else if (userChoice == dispari && !isEven(sum)) {
    alert('Hai vinto');
    console.log(sum + ` Somma totale`);
} else if (userChoice == pari && !isEven(sum)) {
    alert('Hai perso');
    console.log(sum + ` Somma totale`);
} else if (userChoice == dispari && isEven(sum)) {
    alert('Hai perso');
    console.log(sum + ` Somma totale`);
}

// ----- STAMPO TUTTO NELLA CONSOLE
console.log(isEven(sum) + `        true = pari | false = dispari`);
console.log(userNumber + ` numero utente`);
console.log(randomCpu + ` numero random cpu`);