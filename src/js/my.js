// Yandex.Metrika counter
    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    ym(67714420, "init", {
    clickmap:true,
    trackLinks:true,
    accurateTrackBounce:true,
    webvisor:true
});

// Show hide menu in mobile version
function toggleMainMenu() {
    var bodyElem = document.querySelector('body');
    var navBtn = bodyElem.querySelector('.sidebar-nav-btn');
    if(navBtn) {
        navBtn.onclick = function () {
            bodyElem.classList.toggle('nav-open')
        }
    }
}

// Выполнить после загрузки страницы
document.addEventListener('DOMContentLoaded', function() {
    toggleMainMenu()
}, false);

//Поиск при нажатии enter в input
(function() {
    var allSearchInput = document.querySelectorAll('input[type=search]');
    var searchStr;
    if(allSearchInput.length) {
        for(var i=0; i<allSearchInput.length; i++) {
            allSearchInput[i].addEventListener('keydown', function (e) {
                if (e.keyCode === 13) {
                    searchStr = this.value.replace(/ /g, '%20');
                    if(searchStr.length) {
                        document.location.href = "https://yandex.ru/search/?text=" + searchStr;
                        searchStr.length = '';
                    }
                }
            })
        }
    }
})();