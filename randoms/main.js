function getRandom(a, b) {
  return Math.trunc(Math.random() * (b - a + 1) + a);
}

function handleSubmit(e) {
  e.preventDefault();
  let div = document.getElementById('randoms');
  div.innerHTML = '';
  let n = +e.target.n.value;
  let a = +e.target.a.value;
  let b = +e.target.b.value;
  let h1 = document.createElement('h1');
  for (let i = 0; i < n; i++) {
    let r = getRandom(a,b);
    h1.textContent += ' ' + r;
  }
  div.append(h1);
  e.target.n.value = '';
  e.target.a.value = '';
  e.target.b.value = '';
}
