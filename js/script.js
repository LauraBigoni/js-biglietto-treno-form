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

const ticketElement = document.getElementById('generated-ticket');
const insertNameElement = document.getElementById('insert-name');
const insertOfferElement = document.getElementById('insert-offer');
const insertCarrozzaElement = document.getElementById('insert-carrozza');
const insertCpElement = document.getElementById('insert-cp');
const insertPriceElement = document.getElementById('insert-price');

// Faccio funzionare i button
buttonElement.addEventListener('click', function () {
    const nameValue = nameElement.value;
    const kmValue = parseInt(kmElement.value);
    const ageValue = ageElement.value;

    console.log(nameValue);
    console.log(kmValue);
    console.log(ageValue);

    nameElement.value = '';
    kmElement.value = '';
    ageElement.value = '';
    
    let price = 0.21 * kmValue;

    if (!isNaN(nameValue)) {
    alert ('Hai inserito dei valori non validi');

    } else {
    insertNameElement.innerText = nameValue;
    ticketElement.classList.add('visible');

    // Calcolo il prezzo del biglietto e mostro in pagina i risultati
    if (ageValue === 'min') {
    price *= 0.8;
    console.log(price);

    insertOfferElement.innerText = 'Riduzione Minorenni';
    insertPriceElement.innerText = price.toFixed(2) + `€`;

    } else if (ageValue === 'magg') {
    console.log(price);

    insertOfferElement.innerText = 'Biglietto Standard';
    insertPriceElement.innerText = price.toFixed(2) + `€`;

    } else if (ageValue === 'over') {
    price *= 0.6;
    console.log(price);

    insertOfferElement.innerText = 'Riduzione Senior';
    insertPriceElement.innerText = price.toFixed(2) + `€`;
    }    

    const rndCarrozza = Math.floor(Math.random() * 12) +1 ;
    const rndCp = Math.floor(Math.random() * 99999) +10000 ;
    insertCarrozzaElement.innerText = rndCarrozza;
    insertCpElement.innerText = rndCp;

    
}
});

buttonDeleteElement.addEventListener('click', function () {
    nameElement.value = '';
    kmElement.value = '';
    ageElement.value = '';

    insertNameElement.innerText = '';
    insertOfferElement.innerText = '';
    insertCarrozzaElement.innerText = '';
    insertCpElement.innerText = '';
    insertPriceElement.innerText = '';

    ticketElement.classList.remove('visible');
});