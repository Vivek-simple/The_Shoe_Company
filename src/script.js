const btn=document.querySelector('#hamburger');
let home=document.querySelector('#home');

let nav=document.querySelector('#navbar');
btn.addEventListener('click',()=>{
    nav.classList.toggle('nav-show');
    home.classList.toggle('home')
    //btn.classList.toggle('active')
})