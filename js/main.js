function spinnyTime(){
    var hamburger = document.querySelector(".hamburger");
    hamburger.classList.toggle("is-active");
}

function topMenu(){
    if(document.querySelector('.menu-shown'))
        document.querySelector('.menu-shown').scroll({top:0,behavior:'smooth'});
}

function showSidebar(){
    var sidebar = document.querySelector(".right-sidebar");
    sidebar.classList.toggle("sidebar-shown")
}

function showMenu(){
    spinnyTime();
    var menu = document.querySelector('.menu-popout');
    menu.classList.toggle('menu-shown')
    topMenu();
}

function showLoader(){
    var loader = document.querySelector('.loader');
    loader.classList.toggle('loader-shown')
}