$(document).ready(function () {

            //네비
            // console.clear();

            const app = (() => {
                let body;
                let menu;
                let menuItems;

                const init = () => {
                    body = document.querySelector('body');
                    menu = document.querySelector('.gnbIcon');
                    menuItems = document.querySelectorAll('.menuList');

                    applyListeners();
                };

                const applyListeners = () => {
                    menu.addEventListener('click', () => toggleClass(body, 'nav-active'));

                };

                const toggleClass = (element, stringClass) => {
                    if (element.classList.contains(stringClass))
                        element.classList.remove(stringClass);
                    else

                        element.classList.add(stringClass);
                };

                init();
            })();

    $('.menuList a').click(function(){
        $('body').removeClass('nav-active');
    });
    
    });



