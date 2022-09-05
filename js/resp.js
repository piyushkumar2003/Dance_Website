burger = document.querySelector('.burger');
navibar = document.querySelector('.navibar');
navlist = document.querySelector('.nav-list');
options = document.querySelector('.options');
rightnav = document.querySelector('.rightnav');


burger.addEventListener('click',()=>{
    rightnav.classList.toggle('v-class')
    navlist.classList.toggle('v-class')
    navibar.classList.toggle('h-nav')
})