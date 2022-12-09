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