function toggleShow() {
  let body = event.target.parentElement.nextElementSibling;
  if (body.hidden) {
    event.target.classList.remove('fa-chevron-down');
    event.target.classList.add('fa-chevron-up');
  } else {
    event.target.classList.remove('fa-chevron-up');
    event.target.classList.add('fa-chevron-down');
  }
  body.hidden = !body.hidden;
}
