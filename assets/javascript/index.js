let hamburger = document.querySelector("div.hamburger");
let second = document.querySelectorAll(".ham");
mobileNav = document.querySelector("nav.mobile");
hamburger.addEventListener("click",(e)=>{
second.forEach(paragraph =>{
    paragraph.classList.toggle('active')

})
mobileNav.classList.toggle('active');

})