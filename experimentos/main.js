
function handleClick(e) {
  console.log(e.target);
  const x = Math.floor(Math.random() * 100) - 50;
  const y = Math.floor(Math.random() * 100) - 50;
  const r = (Math.random() * 2) + 1;
  const d = Math.random() * 180;
  e.target.style.transform = `rotate(${d}deg) scale(${r}) translate(${x}px,${y}px)`;
}

document.querySelector('button').addEventListener('click', handleClick);
