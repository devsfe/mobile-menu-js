const menuBtn = document.querySelector('.bars');
var menuOpen = false;
var navList = document.querySelector('.nav__list');
var body = document.querySelector('body');
var container = document.querySelector('.container');

//Eventos
menuBtn.addEventListener('click', btnAnimation);
menuBtn.addEventListener('click', menuMobile);



//Animação menu bars
function btnAnimation(){
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
}

var mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile__menu';



    body.insertBefore(mobileMenu, container);


//Abrir menu mobile
function menuMobile(){
    if(menuOpen == true){
        mobileMenu.classList.add('active');
        mobileMenu.classList.remove('hidden');
    } else {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('active');
    }
}