// /////////////////////////////////////MENU HAMBURGER/////////////////////////////////
let menuMobile = document.querySelector('.menu_mobile')
let menuMobileIcone = document.querySelector('.menu_mobile_img')
let ulNav = document.querySelector('.ul_nav')

function toggleMenu(){ 
    ulNav.classList.toggle('active'); 
    if(ulNav.classList.contains('active')){
        menuMobileIcone.setAttribute('src', '../imagens/menu_hamburger.svg')
    } else{
        menuMobileIcone.setAttribute('src', '../imagens/menu_x.svg')
    }
    
}
menuMobile.addEventListener('click', toggleMenu);


// /////////////////////////////FECHA MENU HAMBURGER /////////////////////////////////



//////////////////////////////////////DATA ANIME////////////////////////////////////////////////////////////
const item = document.querySelectorAll("[data-anime");

const animeScroll = () => {
    const windowTop = window.pageYOffset + window.innerHeight * 0.85;

    item.forEach(element => {
        if (windowTop > element.offsetTop){
            element.classList.add('animate')
        } else {
            element.classList.remove('animate');
        }
    })
}
animeScroll()

window.addEventListener('scroll', () =>{
    animeScroll();
})
//////////////////////////////////////////FECHA DATA ANIME///////////////////////////////////////////////////


