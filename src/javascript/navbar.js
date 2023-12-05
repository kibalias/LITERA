/*
    This javascript file put solid color style into the nav
    upon reaching services section
*/
const navbar = document.getElementById('navbar');
const serviceSection = document.getElementById('services');
window.addEventListener('scroll', triggerNavStyle);

function triggerNavStyle() {
    /*
        Prerequisite: scrolled (css) property and styling
    */
   
    if(window.scrollY >= serviceSection.offsetTop){
        // scrollY indicates the range of the scroll vertically from the top of the page,
        // and if in or greater than the service section outer border, will add the style
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}