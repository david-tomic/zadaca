let opcije = ['kamen', 'škare', 'papir'];
let compWon = 0;
let playerWon = 0;
let evenCount = 0;
let compChoice = '';

function dajRandom() {
  let brojRand = Math.floor(Math.random() * opcije.length);
  compChoice = opcije[brojRand];
  console.log(compChoice);
}

let buttons = document.querySelectorAll('button');
let poruka = document.querySelector('.poruka');

let compSpan = document.querySelector('.compScore');
let playerSpan = document.querySelector('.playerScore');
let userChoice = '';
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    dajRandom();
    let buttonText = e.target.textContent;
    if (
      (buttonText == 'kamen' && compChoice == 'kamen') ||
      (buttonText == 'škare' && compChoice == 'škare') ||
      (buttonText == 'papir' && compChoice == 'papir')
    ) {
      poruka.textContent = 'Nerješeno';
      console.log('Nerješeno');
    } else if (
      (buttonText == 'kamen' && compChoice == 'škare') ||
      (buttonText == 'papir' && compChoice == 'kamen') ||
      (buttonText == 'škare' && userChoice == 'papir')
    ) {
      playerWon++;
      playerSpan.textContent = 'Player won: ' + playerWon;
      // playerSpan.textContent = `Player won ${playerWon}`;
      poruka.textContent = 'POBJEDA';
      console.log('Pobjedio');
    } else {
      compWon++;
      compSpan.textContent = 'Comp won: ' + compWon;
      poruka.textContent = 'IZGUBIO';
      console.log('Izgubio');
    }
  });
});

// let btn = document.querySelector('.papir');
// setInterval(() => {
//   btn.click();
// }, 1000);
