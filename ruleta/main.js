let deg = 0;
function spin() {
  deg += 30;
  event.target.style.transform = `rotate(${deg}deg)`;
}
