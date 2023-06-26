// function yes() {
//   alert('aceptaste');
// }
// function gael() {
//   alert('gael');
// }
// function no () {
//   alert('que lastima');
// }
//
// function start(f,g) {
//   let answer = confirm('si o no?');
//   if (answer) f();
//   else        g();
// }
//
// // start(yes,no);
//
// fetch('https://dummyjson.com/products')
//   .then(res => res.json())
//   .then(console.log);


function move() {
  let s = Math.random() + 0.25;
  let d = Math.floor(Math.random() * 720) - 360;
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let x = Math.floor(Math.random() * 66) - 33;
  document.querySelector('.box').style.transform = `rotate(${d}deg) scale(${s})`;
  document.querySelector('.box').style.background = `rgb(${r},${g},${b})`
  document.querySelector('.box').textContent = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`
  document.querySelector('.listing').style.transform = `translateX(${x}%)`;
}

setInterval(move, 2000);
