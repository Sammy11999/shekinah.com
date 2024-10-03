const selectElement = selector => {
    const element = document.querySelector(selector)
    if(element) return element;
    throw new Error(`Something went wrong, make sure that ${selector} exists or is typed correctly.`);
}
// Nav styles on scroll 
const scrollHeader = () => {
    const headerElement = selectElement('#header');
    if(this.scrollY >=15){
        headerElement.classList.add('activated');
    }else{
        headerElement.classList.remove('activated');
    }
};

window.addEventListener('scroll', scrollHeader)

// Open menu & search pop-up 
const menuToggleIcon = selectElement('#menu-toggle-icon');

const toggleMenu = () => {
    const mobileMenu = selectElement('#menu');
    mobileMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated');
};

menuToggleIcon.addEventListener('click', toggleMenu);


// Open/close search  form pop-up 
const formOpenBtn = selectElement('#search-icon');
const formCloseBtn = selectElement('#form-close-btn');
const searchFormContainer = selectElement('#search-form-container');

formOpenBtn.addEventListener('click', () => searchFormContainer.classList.add('activated'));

// Close the search form popup on ESC keypress 
window.addEventListener('keyup', event => {
    if(event.key === 'Escape') searchFormContainer.classList.remove('activated');
});

// Switch theme/add to local storage 
const bodyElement = document.body;
const themeToggleBtn = selectElement('#theme-toggle-btn');

themeToggleBtn.addEventListener('click', () => {
    bodyElement.classList.toggle('light-theme');
});