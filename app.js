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
        document.querySelector('.bg-custom-dark').classList.add('bg-custom-light');
        document.querySelector('.bg-custom-dark').classList.remove('bg-custom-dark');
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
        document.querySelector('.bg-custom-light').classList.add('bg-custom-dark');
        document.querySelector('.bg-custom-light').classList.remove('bg-custom-light');
        mainElements.forEach(element=>{
            element.classList.add('bg-dark-main');
            element.classList.remove('bg-light-main');
            element.classList.remove('text-dark');
        });
    }
});