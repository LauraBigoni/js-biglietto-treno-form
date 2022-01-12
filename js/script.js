console.log('JS OK!');
/* 
TRACCIA:
Il programma dovrà mostrare una form da compilare con cui chiedere all'utente 
il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, 
secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
Il recap dei dati e l'output del prezzo finale va stampato in pagina 
(formattato con massimo due decimali, per indicare centesimi sul prezzo).

BONUS:
replicare anche lo stile estetico fornito dallo screenshot tramite CSS

ATTENZIONE:
- Controlliamo che tipo di valore viene restituito dai value degli input?
- Evitiamo per il momento di utilizzare il tag <form> di HTML , 
poichè potrebbe giocarci qualche scherzetto inaspettato!
*/

// Recupero gli elementi in pagina
const nameElement = document.getElementById('name');
const kmElement = document.getElementById('km');
const ageElement = document.getElementById('age');
const buttonElement = document.getElementById('generate');
const buttonDeleteElement = document.getElementById('cancel');
const placeholderElement = document.getElementById('placeholder');

// Creo le variabili per il calcolo del costo del biglietto
const price = 0.21;
let kmPercorsi = 0;
let userAge = 0;
let percentage = 0;
let finalPrice = 0;
let discountValue = 0;
const sum = price * kmPercorsi;
let message = 'Il costo del tuo biglietto è:';

// Faccio funzionare i button
buttonElement.addEventListener('click', function () {
    const nameValue = nameElement.value;
    const  kmValue = parseInt(kmElement.value);
    const ageValue = ageElement.value;
    console.log(nameValue);
    console.log(kmValue);
    console.log(ageValue);
    nameElement.value = '';
    kmElement.value = '';
    ageElement.value = '';
    
    if (nameValue) {
    placeholderElement.innerText = nameValue + kmValue + ageValue;
    }
});

buttonDeleteElement.addEventListener('click', function () {
    nameElement.value = '';
    kmElement.value = '';
    ageElement.value = '';
});

// Calcolo il prezzo del biglietto
if (userAge < 18) { 
    percentage = 20;
    discountValue = (sum / 100) * percentage;
    console.log(discountValue);
} else if (userAge >= 65) {
    percentage = 40;
    discountValue = (sum / 100) * percentage;
    console.log(discountValue);
} else {
    console.log(sum);
}

// finalPrice = (sum - discountValue).toFixed(2);
// console.log(`${message} ${finalPrice} €`);