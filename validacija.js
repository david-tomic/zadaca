let nameInput = document.querySelector('.ime');
let emailInput = document.querySelector('.email');
let form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let name = nameInput.value;
  let email = emailInput.value;

  if (
    name.trim().length > 0 &&
    email.trim().length > 0 &&
    email.includes('@')
  ) {
    console.log(' Submitting form');
  } else {
    alert('Polja nepravilno unesena, probajte ponovno');
  }
});
