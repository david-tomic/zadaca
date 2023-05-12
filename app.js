let zadaci = [];
let btn = document.querySelector('.dodaj');
let input = document.querySelector('input');
let err = document.querySelector('.error');
let taskovi = document.querySelector('.taskovi');

let brojacId = 0;

btn.addEventListener('click', () => {
  let paragraf = document.createElement('p');
  let deleteBtn = document.createElement('button');
  let section = document.createElement('section');

  deleteBtn.innerHTML = '<img src="images/Trash.svg" />';

  let unos = input.value;
  let newZadatak = {
    id: brojacId,
    text: unos,
  };

  if (unos.trim() != '') {
    err.textContent = '';
    zadaci.push(newZadatak);
    paragraf.textContent = unos;
    input.value = '';
    input.focus();
    section.appendChild(paragraf);
    section.appendChild(deleteBtn);
    deleteBtn.setAttribute('idBroj', brojacId);
    section.classList.add('flex');
    brojacId++;

    deleteBtn.addEventListener(
      'click',
      function (e) {
        section.parentNode.removeChild(section);
        let id = deleteBtn.getAttribute('idBroj');
        console.log(id);

        let indeks = zadaci.findIndex((obj) => obj.id === id);
        zadaci.splice(indeks, 1);
      },
      false
    );

    taskovi.appendChild(section);
  } else {
    err.textContent = 'Ne smije bit prazno';
  }
});

input.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    btn.click();
  }
});
