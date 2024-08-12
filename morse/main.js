// hacelo vos

let input = document.querySelector('input');
input.value = '';
input.addEventListener('input', e => {
  let phrase = e.target.value;
  let result = document.querySelector('#result');
  phrase = toMorse(phrase);
  result.textContent = phrase;
});



let toMorse = phrase => {
  // let morseTable = [
  //   '.-', '-...', '-.-.', '-..', '.', '..-.', '--.','....'
  // ];
  let morseTable = {
    a: '.-', b: '-...', c: '-.-.', d: '-..', 
    e: '.', f: '..-.', g: '--.', h: '....',
    i: '..', j: '.---', k: '-.-', l: '.-..',
    m: '--', n: '-.', o: '---', p: '.--.',
    q: '--.-', r: '.-.', s: '...', t: '-',
    u: '..-', v: '...-', w: '.--', x: '-..-',
    y: '-.--', z: '--..'
  };
  let result = '';
  for (let i = 0; i < phrase.length; i++) {
    if (phrase[i] != ' ')
      result += morseTable[phrase[i].toLowerCase()] + ' '; 
  }
  return result;
};