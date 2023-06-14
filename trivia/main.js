function checkAnswer() {
  const answer = event.target.dataset.correct;
  if (answer == 'true') {
    // e.target.style.background = 'green';
    event.target.classList.add('correct');
  } else {
    event.target.classList.add('incorrect');
    // e.target.style.background = 'red';
  }
  const buttons = document.querySelectorAll('button');
  for (let b of buttons) b.disabled = true;
  setTimeout(() => location.reload(), 2000);
  // console.log('estoy en handleClick', e.target);
}
