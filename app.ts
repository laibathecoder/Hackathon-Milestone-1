const toggle = document.getElementById('toggle-skills-btn')as HTMLButtonElement;
const hiddenSec = document.getElementById('skills-id')as HTMLElement;

toggle.addEventListener("click", () => {
    if(hiddenSec.style.display === 'none'){
        hiddenSec.style.display = 'block';
        toggle.textContent = 'Hide Skills';
    }
    else{
        hiddenSec.style.display = 'none';
        toggle.textContent = 'Show Skills';
    }
});