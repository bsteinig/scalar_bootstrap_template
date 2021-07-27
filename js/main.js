function spinnyTime(){
    var hamburger = document.querySelector(".hamburger");
    hamburger.classList.toggle("is-active");
}

function showMenu(){
    spinnyTime();
    var menu = document.querySelector('.menu-popout');
    menu.classList.toggle('menu-shown')
}