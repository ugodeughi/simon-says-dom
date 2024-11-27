

const getDifferentsRandomNumbers = (min, max, tot) => {

  const numbers = [];
  // ad ogni ciclo estraggo un numero e lo pusho nell'array solo se non è già presente
  // il ciclo termina quando la lunghezza dell'array è uguale a tot
  while(numbers.length < tot){
    const randomNumer = Math.floor(Math.random() * (max - min + 1) + min)
    if(!numbers.includes(randomNumer)) numbers.push(randomNumer)
  }

  return numbers;
}

const confirm = e => {
  // blocco il ricaricamento della pagina
  e.preventDefault()
  
  const userGuesses = [];
  for(let i = 0; i < inputFields.length; i++){
    const field = inputFields[i];
    const value = parseInt(field.value);
    // validazione dati inseriti:
    // pusho nell'array dei numeri giocati solo 
    /*
      se il valore è numerico
      se i numero non è ne inferiore ne supariore a min/max
      se non è già presente nell'array dei numeri giocati
    */
    if(!isNaN(value) && value >= min && value <= max && !userGuesses.includes(value)){
      userGuesses.push(value)
    }
   }

   // validazione: il gioco continua solo se ho inserito i dati corretti solo se la lunghezza dell'array dei numeri giocati è uguale al totale dei numeri da giocare
   if(userGuesses.length !== totalNumbers){
    messageElement.classList.add('text-danger');
    messageElement.innerHTML = 'Attenzione! Inserire 5 numeri corretti e senza duplicarli';
    return;
   }

   // a questo punto del codice i numeri sono validi
   // controllo quanti ne ho indovinati
   const correctAswers = [];
   for(let i = 0; i < userGuesses.length; i++){
    const guess = userGuesses[i];
    if(numbers.includes(guess)) correctAswers.push(guess)
  }
  
  const guessString = correctAswers.join(' - ');

  if(correctAswers.length === numbers.length){
    instructionsElement.classList.remove('text-danger');
    instructionsElement.classList.add('text-success');
    instructionsElement.innerHTML = `Complimenti hai vinto. Numeri giocati: ${guessString}`
    
  } else if (correctAswers.length === 0){
    instructionsElement.classList.add('text-danger');
    instructionsElement.innerHTML = `Ma neppure uno?!?`
  } else {
    instructionsElement.classList.add('text-warning');
    instructionsElement.innerHTML = `Non hai vinto. Numeri vincenti: ${guessString}`
  }
  
  instructionsElement.classList.add('fs-5');
  form.classList.add('d-none');
  
}