function showMenu(e) {
  let show = e.target.nextElementSibling.hidden;
  e.target.nextElementSibling.hidden = !show;
}

// document.addEventListener('click', e => {
//   let menus = document.querySelectorAll('.dropdown-menu');
//   console.log(menus);
//
//   for (let m of menus) {
//     if (m.hidden = false) m.hidden = true;
//   }
// })

// document.addEventListener('click', (e) => {
//   let btns = document.querySelectorAll('.dropdown-btn');
//   let menus = document.querySelectorAll('.dropdown-menu');
//   console.log(menus[0],btns[0], btns[1], e.target, btns[0] != e.target);
//   if (e.target != btns[0] || e.target != btns[1]) {
//     menus[0].hidden = true;
//     menus[1].hidden = true;
//   } else {
//     e.target.nextElementSibling.hidden = !e.target.nextElementSibling.hidden;
//   }
// })
