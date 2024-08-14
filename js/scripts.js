/* js/scripts.js */

document.addEventListener('DOMContentLoaded', () => {
    const interactiveItems = document.querySelectorAll('.interactive-list li');

    interactiveItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
});
