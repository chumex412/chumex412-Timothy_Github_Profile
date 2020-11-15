// Toggle for hiding and showing

function showDropdown() {
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