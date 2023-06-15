const slides = document.querySelectorAll('.slide');
const btnNext = document.querySelector('.btn-next');
const btnPrev = document.querySelector('.btn-prev');
let current = 0;  // la imagen del carousel que estamos viendo

// poner todas las imagenes en fila
for (let i = 0; i < slides.length; i++) {
  slides[i].style.transform = `translateX(${i * 100}%)`;
}


btnNext.addEventListener('click', () => {
  if (current === slides.length - 1) {
    current = 0;
  } else {
    current++;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = `translateX(${100 * (i - current)}%)`;
  }
});

btnPrev.addEventListener('click', () => {
  if (current === 0) {
    current = slides.length - 1;
  } else {
    current--;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = `translateX(${100 * (i - current)}%)`;
  }
});
