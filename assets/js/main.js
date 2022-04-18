(function () {
    'use strict';

    const COMPANY_PATH = ["profile", "message", "management", "organization"];

    window.onload = function() {
        const currentPath = window.location.pathname;
        const found = COMPANY_PATH.find(el => currentPath.includes(el));
        if (found) {
            toggleSubMenu("sidebar__layer2")
        }

        addEventToggleMenu("sidebar__toggle-main");
        addEventToggleMenu("sidebar__toggle-sub");
        addEventToggleHamburger();

        addEventScrollToTop();
    };


    window.onscroll = function() {
        detectScrollFunction();
    };

    function addEventToggleMenu(key) {
        if (key !== "") {
            const toggleMenu = document.getElementsByClassName(key);
            let i;

            for (i = 0; i < toggleMenu.length; i++) {
                const layerLevel = toggleMenu[i].dataset.layer;
                if (layerLevel) {
                    toggleMenu[i].addEventListener("click", toggleSubMenu.bind(null, "sidebar__layer" + layerLevel));
                }
            }
        }
    }

    function toggleSubMenu(subLayer) {
        const mainMenu = document.getElementsByClassName("sidebar__layer1");
        if (mainMenu[0]) {
            mainMenu[0].classList.toggle("-slide-left");
        }

        const subMenu = document.getElementsByClassName(subLayer);
        if (subMenu[0]) {
            subMenu[0].classList.toggle("-sub-slide-left");
        }
    }

    function addEventToggleHamburger() {
        const toggleHamburger = document.getElementsByClassName("toggle-hamburger");
        let i;

        for (i = 0; i < toggleHamburger.length; i++) {
            toggleHamburger[i].addEventListener("click", function () {
                const headerHamburger = document.getElementsByClassName("header__hamburger");
                const containerLeft = document.getElementsByClassName("container__left");
                const containerRight = document.getElementsByClassName("container__right");

                if (headerHamburger && containerLeft && containerRight) {
                    headerHamburger[0].classList.toggle("-active")
                    containerLeft[0].classList.toggle("container__left--hide");
                    containerRight[0].classList.toggle("container__right--left-slide");
                    containerRight[0].children[0].classList.toggle("header--full-width")
                }
            });
        }
    }

    function detectScrollFunction() {
        let scrollTopButton = document.getElementsByClassName("scroll-top");

        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            scrollTopButton[0].style.display = "block";
        } else {
            scrollTopButton[0].style.display = "none";
        }
    }

    function addEventScrollToTop() {
        const scrollTopButton = document.getElementsByClassName("scroll-top")[0];

        scrollTopButton.addEventListener("click", function () {
            document.body.scrollTop = 0; // For Safari
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
})();
