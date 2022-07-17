const headerMenu    = document.querySelector('#header-menu');
const body          = document.querySelector('body');
const overlay       = document.querySelector('.overlay');
const fadeElems     = document.querySelectorAll('.has-fade');

headerMenu.addEventListener('click', function(){
    if (headerMenu.classList.contains('open')) {
        body.classList.remove('has-open');
        headerMenu.classList.remove('open'); //close hamburgermenu
        fadeElems.forEach(function(element){
            element.classList.remove('fadein');
            element.classList.add('fadeout');
        });
        
    } else {
        headerMenu.classList.add('open'); //open hamburgermenu
        body.classList.add('has-open');
        fadeElems.forEach(function(element){
            element.classList.remove('fadeout');
            element.classList.add('fadein');
        });
        
    }
});