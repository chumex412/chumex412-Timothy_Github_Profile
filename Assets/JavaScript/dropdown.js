// Toggle for hiding and showing
let nav = document.querySelector('.nav');
nav.addEventListener('click', showDropdown);

function showDropdown(e) {
  if (!e.target.classList.contains('nav__link--dropbtn')) return;
  //console.log(e.target)
  document.getElementById("myDropdown").classList.toggle("show");
}

// Closes when clicked outside it

window.onclick = function(event) {
  if (!event.target.matches('.nav__link--dropbtn')) {
    let dropdowns = document.getElementsByClassName("dropdown");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
    let  openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}