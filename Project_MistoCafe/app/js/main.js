document.addEventListener('DOMContentLoaded', () => {

    function pageHome() {





    }

    function pageAll() {

        const itemNavbarWindow = document.querySelectorAll('.menu__list-item');
        const bodyOverlay = document.querySelector('.body-overlay');
        const bodyContent = document.querySelector('.body');
        const menuBtn = document.querySelector('.menu-mobile-btn');
        const menuWindow = document.querySelector('.menu');
        const contactsWindow = document.querySelector('.menu-mobile-contacts');
        const contactsWindowBtn = document.querySelector('.menu__list-item--contacts');
        const contactsWindowCloseBtn = document.querySelector('.close-btn');
        // const menuItemAnimation = document.querySelector('.menu__list-item--animation');


        document.querySelectorAll('.menu__list-item').forEach((item) =>
            item.addEventListener('click', () => { 
                item.classList.toggle('active');
                bodyOverlay.classList.toggle('active');
                item.classList.toggle('menu__list-item--animation');

                itemNavbarWindow.forEach((other, idx) => {
                    if (other !== item) {
                        other.classList.remove("active");
                        return
                    }
                    return;
                });
            })
        )

        bodyOverlay.addEventListener('click', () => {
            document.querySelectorAll('.menu__list-item').forEach((item) => {
                    item.classList.remove('active');
                    item.classList.add('menu__list-item--animation');
                        if (item.classList.contains('active')) {
                            bodyOverlay.classList.add('active');
                        } 
                        else {
                            bodyOverlay.classList.remove('active');
                        }
            })
        });

        menuBtn.addEventListener('click', () => {
            bodyContent.classList.toggle('overflow-hidden');
            menuWindow.classList.toggle('active');
            menuBtn.classList.toggle('active');
            if (!menuBtn.classList.contains('active')) {
                menuBtn.classList.add('holder');
            } else {
                menuBtn.classList.remove('holder');
            }
        });

        contactsWindowBtn.addEventListener('click', () => {
            contactsWindow.classList.add('active');
        });

        contactsWindowCloseBtn.addEventListener('click', () => {
            contactsWindow.classList.remove('active');
        });

        const orderBtn = document.querySelectorAll('.products__content-item-btn');
        const modalWindow = document.querySelector('.modal-order');
        const modalBodyOverlay = document.querySelector('.modal-order__body-overlay');
        const modalCloseBtn = document.querySelector('.modal-order__close-btn');
        // const bodyContent = document.querySelector('.body');

        document.querySelectorAll('.products__content-item-btn').forEach((item) =>
            item.addEventListener('click', () => { 
                modalWindow.classList.add('active');
                bodyContent.classList.add('overflow-hidden');
            })
        )

        modalBodyOverlay.addEventListener('click', () => {
          modalWindow.classList.remove('active');
          bodyContent.classList.remove('overflow-hidden');
        });

        modalCloseBtn.addEventListener('click', () => {
          modalWindow.classList.remove('active');
          bodyContent.classList.remove('overflow-hidden');
        });

        const anchorsLink = document.querySelectorAll('.scroll-btn__link');

        anchorsLink.forEach((item) => {
            item.addEventListener('click', function (e) {
                e.preventDefault()
                const blockID = item.getAttribute('href')
                document.querySelector(blockID).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
            })
        });

        
        if(matchMedia){
            const screen = window.matchMedia("(max-width:440px)");
            screen.addListener(changes);
            changes(screen);
        }
        function changes(screen){
                if (screen.matches){

                    document.querySelectorAll('.products__content-item').forEach((item) => {
                        item.classList.remove('hoverable');
                    })

                    document.querySelectorAll('.products__content-item-container').forEach((item) =>
                        item.addEventListener('click', () => { 
                            item.parentNode.classList.toggle('active');
                        })
                    )

                    const productItems = document.querySelectorAll('.products__content-item');

                    document.querySelectorAll('.products__content-item').forEach((item) =>
                        item.addEventListener('click', () => { 
                        
                            productItems.forEach((other, idx) => {
                                if (other !== item) {
                                    other.classList.remove("active");
                                    return
                                }
                                return;
                            });
                        
                        })
                    )

                }
                else{
                    document.querySelectorAll('.products__content-item').forEach((item) => {
                        item.classList.add('hoverable');
                    })
                }
        }

    }

    if (document.querySelectorAll('.body')) pageAll();
    else if (document.querySelector('#home')) pageHome();

    allSite();

});