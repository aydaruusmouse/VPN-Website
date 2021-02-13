const humberger= document.getElementById('humberger');
const list = document.getElementById('list');
humberger.addEventListener('click', ()=> {
    list.classList.toggle('show')
})

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}