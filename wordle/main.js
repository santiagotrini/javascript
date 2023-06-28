// lista de palabras que te pueden tocar
let dictionary = [
  'roman',
  'arbol',
  'carpa',
  'padre',
  'madre',
  'barco',
  'laser'
];
// elegir una al azar
let answer = dictionary[Math.floor(Math.random() * dictionary.length)];
console.log(answer); // para hacer trampa
let tries = 0;

function handleSubmit() {
  event.preventDefault();
  let word = event.target.word.value;
  if (word.length != 5) return;
  tries++;
  if (tries <= 6 && word != answer) {
    makeWord(word);
    gameOver();
  }
  if (word == answer) {
    makeWord(word);
    win();
  }
  event.target.word.value = '';
}

function makeWord(word) {
  let row = document.createElement('div');
  row.classList.add('row');
  for (let i = 0; i < word.length; i++) {
    console.log(word[i]);
    let l = document.createElement('h1');
    l.classList.add('letter');
    l.textContent = word[i];
    if (answer.includes(word[i])) l.classList.add('mal-pero-no-tan-mal');
    if (word[i] == answer[i]) l.classList.add('right');
    row.append(l);
  }
  document.querySelector('.container').append(row);
}

function gameOver() {
  let gameOverMessage = document.createElement('h1');
  gameOverMessage.textContent = 'Perdiste!';
  document.body.prepend(gameOverMessage);
}

function win() {
  let winMessage = document.createElement('h1');
  winMessage.textContent = 'Sos un genio!';
  document.body.prepend(winMessage);
}
