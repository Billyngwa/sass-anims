let hamburger = document.querySelector("div.hamburger");
let second = document.querySelectorAll(".ham");
mobileNav = document.querySelector("nav.mobile");
hamburger.addEventListener("click",(e)=>{
second.forEach(paragraph =>{
    paragraph.classList.toggle('active')

})
mobileNav.classList.toggle('active');

})

const localInfo = JSON.parse(localStorage.getItem("userInfo"));
const dp = document.getElementById("dp");
const dpName = document.getElementById("profilename");
const dpEmail = document.getElementById("profileemail");
const changeImage = document.querySelector(".changeImage");
dpName.textContent = localInfo.data.firstName;
dpEmail.textContent = localInfo.data.email

dp.src = localInfo.data.imageUrl
const ut = dp.src;
console.log("dp",ut);

changeImage.addEventListener("click", (e)=> {
    alert("could not change image")
})