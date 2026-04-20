/** ============================== Change Header Bg======================================**/
window.onscroll = function () {
    const header = document.getElementById('header');

    if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
};


/**======================================== Preloader=============================================**/
(function () {
    const loader = document.getElementById("preloader");
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = "0";
            setTimeout(() => { loader.style.display = "none"; }, 500);
        }, 1000);

        window.onload = () => {
            loader.style.opacity = "0";
            setTimeout(() => { loader.style.display = "none"; }, 500);
        };
    }
})();


/** ==================== ========================== Ai Assistatnt ========================================*/
const assistantToggle = document.getElementById('ai-assistant-toggle');
const assistantClose = document.getElementById('ai-assistant-close');
const assistantWindow = document.getElementById('ai-assistant-window');

if (assistantToggle) {
    assistantToggle.addEventListener('click', function (e) {
        e.stopPropagation();
        const currentDisp = assistantWindow.style.display;
        if (currentDisp === 'none' || currentDisp === '') {
            assistantWindow.style.display = 'block';
            this.style.transform = 'scale(0.9)';
        } else {
            assistantWindow.style.display = 'none';
            this.style.transform = 'scale(1)';
        }
    });
}

if (assistantClose) {
    assistantClose.addEventListener('click', function () {
        assistantWindow.style.display = 'none';
        assistantToggle.style.transform = 'scale(1)';
    });
}




