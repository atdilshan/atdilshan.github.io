const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.onclick = function(){
    menu.classList.toggle("active");
    menuBtn.classList.toggle("active");
}