function power(x,n) {
  let result = 1;
  for (let i = 0; i < n; i++)
    result *= x;
  return result;
}

function handleSubmit() {
  event.preventDefault();
  let x = +event.target.x.value;
  let n = +event.target.n.value;
  let p = document.createElement('p');
  p.textContent = `${x}^${n} es ${power(x,n)}`
  event.target.x.value = '';
  event.target.n.value = '';
  document.querySelector('#result').innerHTML = '';
  document.querySelector('#result').append(p);
}
