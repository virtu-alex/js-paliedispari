/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Dichiariamo chi ha vinto.*/




// ?1 - Come la chiamo?
// ?2 - Ho bisogno di parametri? (se si quali?)
// ?3 - Devo restituire qualcosa? (se si cosa? di che tipo?)
// ?4 OPZIONALE:  Qualcosa  potrebbe andare storto? (se si, cosa?)






function randomNumberFromCpu(min, max) {

    return Math.floor(Math.random() * (max - min) + min)
}


// console.log(randomNumberFromCpu(1, 5));


const userChoice = prompt("Pari o dispari").toLowerCase();
const userNumber = parseInt(prompt("Inserisci un numero compreso tra 1 e 5"));


let randomCpu = randomNumberFromCpu(1, 5);
let sum = 0;
sum = randomCpu + userNumber;

//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function isEven(numero) {
    let result;
    if (numero % 2 === 0) {
        result = true;
    } else {
        result = false;
    }
    return result;
}
// se l'utente mette pari e esce somma pari ----> hai vinto
// se l'utente mette dispari e esce somma dispari ---> hai vinto
// se l'utente mette pari e esce somma dispari ---> hai perso
// se l'utente mette dispari e esce sommma pari ---> hai perso
if (userChoice == "pari" && isEven(sum)) {
    alert('Hai vinto')
} else if (userChoice == "dispari" && !isEven(sum)) {
    alert('Hai vinto')
} else if (userChoice == "pari" && !isEven(sum)) {
    alert('Hai perso')
} else if (userChoice == "dispari" && isEven(sum)) {
    alert('Hai perso')
}

console.log(isEven(sum));
console.log(userNumber, randomCpu);