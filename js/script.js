/*
Scrivi un applicazione che sia in grado di generare una serie di numeri randomici.
L'utente, tramite 3 input, deve avere la possibilità di definire:
- Quanti box generare
- il numero minimo di generazione dei numeri random
- il numero massimo di generazione dei numeri random
Cliccando sul tasto "genera", vengono generati i box con i parametri specificati dall'utente e andremo a colorare di VERDE i numeri pari e di ROSSO i numeri dispari.
*/

//Targhettizzo gli elementi in pagina

const userBoxNumber = document.getElementById('box-number');
const userMin = document.getElementById('min-number');
const userMax = document.getElementById('max-number');
const generate = document.getElementById('generate');
const generatedRow = document.querySelector('#generated .row');

//Prendo i valori inseriti dall'utente

generate.addEventListener('click', function () {
    const boxNumber = parseInt(userBoxNumber.value.trim());
    const min = parseInt(userMin.value.trim());
    const max = parseInt(userMax.value.trim());

    //Validazione dati inseriti
    if (isNaN(boxNumber) || isNaN(min) || isNaN(max)) {
        alert('Hai inserito valori non validi!');
        return;
    }

    //Ciclo creazione box in pagina
    for (let i = 1; i <= boxNumber; i++) {
        //Creo la colonna
        const col = document.createElement('div');
        col.classList.add('col');
        //Creo elemento contenitore di number
        const numberContain = document.createElement('p');
        numberContain.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'h-100', 'w-100');
        col.appendChild(numberContain);
        //Genero un numero casuale
        const number = Math.floor(Math.random() * (max - min + 1) + min);
        numberContain.append(number);

        if ((number % 2) === 0) {
            numberContain.classList.add('bg-green');
        } else {
            numberContain.classList.add('bg-red');
        }

        generatedRow.appendChild(col);
    }
});