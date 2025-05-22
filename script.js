// Add JavaScript here if needed 

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('header nav ul');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('show');
            // Optional: Toggle an icon change if needed
            // menuToggle.querySelector('i').classList.toggle('fa-bars');
            // menuToggle.querySelector('i').classList.toggle('fa-times');
        });
    }
}); 
