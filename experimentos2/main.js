document.querySelector('.box').addEventListener('click', handleClick);

function handleClick() {
  let colors = ['forestgreen','crimson','violet','pink','red','blue','black','gray','yellow','aquamarine','teal','cyan']
  console.log(event.target);
  console.log(event.target.dataset);
  console.log(event.target.dataset.color);
  event.target.dataset.color++;
  if (event.target.dataset.color == colors.length) event.target.dataset.color = 0;
  event.target.style.background = colors[event.target.dataset.color];
}
