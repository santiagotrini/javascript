function handleSubmit(e) {
  e.preventDefault();
  let n = e.target.number.value;
  let table = document.querySelector('table');
  table.innerHTML = '';
  console.log(table);
  let thead = document.createElement('thead');
  let tbody = document.createElement('tbody');
  let bin = document.createElement('th');
  bin.textContent = 'Binario';
  let dec = document.createElement('th');
  dec.textContent = 'Decimal';
  thead.append(bin);
  thead.append(dec);
  for (let i = 0; i <= n; i++) {
    let tr = document.createElement('tr');
    let tdb = document.createElement('td');
    tdb.textContent = i.toString(2);
    let tdd = document.createElement('td');
    tdd.textContent = i;
    tr.append(tdb);
    tr.append(tdd);
    tbody.append(tr);
  }
  table.append(thead);
  table.append(tbody);
  e.target.number.value = '';
}
