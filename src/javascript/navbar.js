/*
    This javascript file put solid color style into the nav
    upon reaching services section and setting active link
*/
const sections = document.querySelectorAll('section');
const links = document.querySelectorAll('.nav-link');
const navbar = document.getElementById('navbar');
const serviceSection = document.getElementById('services');
window.addEventListener('scroll', triggerNavStyle);

function triggerNavStyle() { 
    if(window.scrollY >= serviceSection.offsetTop-100){
        // scrollY indicates the range of the scroll vertically from the top of the page,
        // and if in or greater than the 100px before the section outer border, will add the style
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    setActiveLink();
}

function setActiveLink() {
    let currentSection = "";
    sections.forEach(section => {
        // on scroll and upon view the next section, set active link
        if(window.scrollY >= (section.offsetTop)){
            currentSection = section.id;
        }
    });
    // check if the link id has the current section id and set the active class
    links.forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('href').includes('#' + currentSection)){
            link.classList.add('active');
            console.log(link.getAttribute('href'));
        }
    });
}