let phonebook = JSON.parse(localStorage.getItem('phonebook')) || [];
localStorage.setItem('phonebook', JSON.stringify(phonebook));
updateTable(phonebook);

function updateTable(phonebook) {
  let tbody = document.querySelector('tbody');
  tbody.innerHTML = '';
  for (let contact of phonebook) {
    let tr = document.createElement('tr');
    for (let key in contact) {
      let td = document.createElement('td');
      td.textContent = contact[key];
      tr.append(td);
    }
    tbody.append(tr);
  }

}

function addContact() {
  event.preventDefault();
  let contact = {
    name: event.target.name.value,
    phone: event.target.phone.value
  }
  let phonebook = JSON.parse(localStorage.getItem('phonebook'));
  phonebook.push(contact);
  localStorage.setItem('phonebook', JSON.stringify(phonebook));
  updateTable(phonebook);
  event.target.name.value = '';
  event.target.phone.value = '';
}
