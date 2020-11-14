const menuBtn = document.querySelector('.bars');
var burger = document.querySelector('.bars__burger')
var menuOpen = false;
var navList = document.querySelector('.nav__list');
var body = document.querySelector('body');
var container = document.querySelector('.container');
var logo = document.querySelector('.nav__logo')

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


//Criando menu mobile
var mobileMenu = document.createElement('div');
    mobileMenu.className = 'menu__mobile';

    body.insertBefore(mobileMenu, container);

    //Criando list para menu mobile
    var menuList = document.createElement('ul');
    menuList.className = 'menu__list';
    mobileMenu.appendChild(menuList);
    var linksArray = ["Home", "Sobre", "Empresa", "Portfolio", "Contato"]

    for (var i = 0; i < linksArray.length; i++) {
        var menuItem = document.createElement('li');
        menuItem.className = 'menu__item';
        menuList.appendChild(menuItem);
        var menuLink = document.createElement('a');
        menuLink.className = 'menu__link'
        menuLink.href;
        menuItem.appendChild(menuLink);
        var menuText = document.createTextNode(linksArray[i]);
        menuLink.appendChild(menuText);
    }

    
//Abrir menu mobile
function menuMobile(){
    if(menuOpen == true){
        mobileMenu.classList.add('active');
        mobileMenu.classList.remove('hidden');
        logo.style.display = 'none';
    } else {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('active');
        logo.style.display = 'block';
    }
}