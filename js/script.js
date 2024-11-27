// recuper gli elementi della pagina
const form = document.getElementById('answers-form');
const inputFields = document.querySelectorAll('input');
const countdownElement = document.getElementById('countdown');
const numbersListElement = document.getElementById('numbers-list');
const messageElement = document.getElementById('message');
const instructionsElement = document.getElementById('instructions');

// dati iniziali
const min = 1;
const max = 50;
const totalNumbers = 5;
let time = 2;


/*
1. creo un array con i numeri estratti e li stampo
2. faccio partire il countdown
3. al termine del countdown nascodo i numeri e mostro il form
4. al click del bottone del form vengono verificati i numeri e generato l'autput

Per verificare i numeri mi occorre:
1. salvo in un array i numeri giocati (dopo la validazione)
2. ogni numero giocato (ciclo i numeri giocati) verifico se è incluse nellarrya dei numeri estrstti
3. ogni numero corretto viene pushato in un array di numeri vincenti
4. se la lunghezza dell'array dei numeri vincenti corrisponde alla lunghezza dell'array dei numeri estratti hai vinto
5. se è inferiore hai perso
6. per questi due punti (4 e 5) ferrà stampato l'elenco dei numeri vincenti
7. se l'array dei numeri vincenti è vuoto messaggio che dice che on hai indovinato nulla
*/

const numbers = getDifferentsRandomNumbers(min, max, totalNumbers);

let items = ''
for(let i = 0; i < numbers.length; i++){
  const number = numbers[i] 
  items += `<li class="fs-3">${number}</li>`;
}
numbersListElement.innerHTML = items;

countdownElement.innerHTML = time;
const countdown = setInterval(() => {
  countdownElement.innerHTML = --time;
  if(time === 0){
    clearInterval(countdown);
    numbersListElement.classList.add('d-none');
    countdownElement.classList.add('d-none');
    form.classList.remove('d-none');
    instructionsElement.innerHTML = 'Inserisci tutti i numeri che ricordi anche non nello stesso ordine'
  }
}, 1000)

form.addEventListener('submit', confirm)

