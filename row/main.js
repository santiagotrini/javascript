let obj = {
  nombre: 'Juan',
  edad: '123',
  casa: 'lope de vega 2150'
}

function makeRow(obj) {
  let tr = document.createElement('tr');
  for (let key in obj) {
    let td = document.createElement('td');
    td.textContent = obj[key];
    tr.append(td);
  }
  document.querySelector('tbody').append(tr);
}


setTimeout(() => makeRow(obj), 3000)
