// Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio,
//  secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica:
//  usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. 
// La risposta finale (o output) sarà anch’essa da scrivere in console.
// MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina 
// in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
// Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina 
// (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).

const ticketElem = document.getElementById("ticket-form");

// input da prelevare
const ageInput = document.getElementById("age");
const kmInput = document.getElementById("km");
const nameInput = document.getElementById("name");

// prelevo gli elementi dalla card da compilare
const nameElem = document.getElementById("passenger-name");
const priceElem = document.getElementById("price-total");

ticketElem.addEventListener("submit", handleForm)

function handleForm(event) {
  event.preventDefault(); 
console.log("ciao");

    // prelevo i valori dell'input
    const name = nameInput.value;
    const age = ageInput.value;
    const km = kmInput.value;
    console.log(name, age, km);

    // elaborazione logica
    const prezzoBigliettoStr = km * 0.21;
const prezzoBiglietto = parseInt(prezzoBigliettoStr);

const scontoMinorenni = (prezzoBiglietto / 100) * 20;
const bigliettoMinorenni = prezzoBiglietto - scontoMinorenni;

const scontoOver = (prezzoBiglietto / 100) * 40;
const bigliettoOver = prezzoBiglietto - scontoOver;

 if (age < 18) {
   console.log("Con lo sconto Minorenni (del 20% sul prezzo totale) il tuo biglietto ora costa:" + " " + bigliettoMinorenni.toFixed(2) + "€");
} else if(age > 65) {
    console.log("Con lo sconto Over 65 (del 40% sul prezzo totale) il tuo biglietto ora costa:" + " " + bigliettoOver.toFixed(2) + "€");
} else {
    console.log("Il tuo biglietto costa:" + " " + prezzoBiglietto.toFixed(2) + "€");
}

nameElem.innerHTML = name;
priceElem.innerHTML = `${prezzoBiglietto}€ `;

ticketElem.reset();

 }






