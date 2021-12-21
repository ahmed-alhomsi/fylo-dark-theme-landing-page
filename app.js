const darkIcon = document.querySelector('.dark-icon');
const lightIcon = document.querySelector('.light-icon');
const switchMode = document.querySelector('.shift-colors');
let darkMode = true;

switchMode.addEventListener('click', (e)=>{
    if(darkMode) {
        const mainElements = document.querySelectorAll('.bg-dark-main');
        darkMode = false;
        lightIcon.classList.add('d-none');
        darkIcon.classList.remove('d-none');
        mainElements.forEach(element=>{
            element.classList.remove('bg-dark-main');
            element.classList.add('bg-light-main');
            element.classList.add('text-dark');
        });
    } else {
        const mainElements = document.querySelectorAll('.bg-light-main');
        darkMode = true;
        lightIcon.classList.remove('d-none');
        darkIcon.classList.add('d-none');
        mainElements.forEach(element=>{
            element.classList.add('bg-dark-main');
            element.classList.remove('bg-light-main');
            element.classList.remove('text-dark');
        });
    }
});