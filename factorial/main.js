function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++)
    result *= i;
  return result;
}

function handleSubmit() {
  event.preventDefault();
  let n = +event.target.n.value;
  let p = document.createElement('p');
  p.textContent = `El factorial de ${n} es ${factorial(n)}`
  event.target.n.value = '';
  document.querySelector('#result').innerHTML = '';
  document.querySelector('#result').append(p);
}
