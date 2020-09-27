// Show hide menu in mobile version
function toggleMainMenu() {
    var bodyElem = document.querySelector('body');
    var navBtn = bodyElem.querySelector('.sidebar-nav-btn');
    navBtn.onclick = function () {
        bodyElem.classList.toggle('nav-open')
    }
}

// Выполнить после загрузки страницы
document.addEventListener('DOMContentLoaded', function() {
    toggleMainMenu()
}, false);