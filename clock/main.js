let tick = () => {
  let d = new Date();
  let h = d.getHours();
  let m = d.getMinutes().toString();
  let s = d.getSeconds().toString();
  let clock = document.getElementById('clock');
  clock.textContent = `${h}:${m.padStart(2,'0')}:${s.padStart(2,'0')}`;
};

setInterval(tick, 1000);
