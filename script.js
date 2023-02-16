const menuClose = document.getElementById("menu-close");
const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobile-nav");


hamburger.addEventListener("click", () => {
    if (mobileNav.classList.contains("opacity-none")){
        mobileNav.classList.remove("opacity-none");
    }else{
        mobileNav.classList.add("opacity-none");
    }
})