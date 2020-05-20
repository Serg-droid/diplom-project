const setHeaderListeners = () => {
    const   header = document.querySelector('.header'),
            arrowImg = header.querySelector('.header-contacts__arrow > img'),
            hiddenNumber = header.querySelector('.header-contacts__phone-number-accord > a'),
            menuIcon = header.querySelector('.menu__icon'),
            popupDialogMenu = document.querySelector('.popup-dialog-menu'),
            body = document.querySelector('body'),
            closeMenu = document.querySelector('.close-menu');

    if(window.innerWidth < 576){
        popupDialogMenu.style.transform = 'translate3d(0, -100vh, 0)';
    }

    window.addEventListener('resize', () => {
        if(window.innerWidth < 576){
            popupDialogMenu.style.transform = 'translate3d(0, -100vh, 0)';
        }else{
            popupDialogMenu.style.transform = 'translate3d(645px, 0, 0)';
        }
    });

    const hideMenu = (e) => {
        const target = e.target;
        if(target === menuIcon) return;
        
        if(target === closeMenu 
            || target.matches('.menu-link')
            || !target.closest('.popup-dialog-menu')){
            
            window.innerWidth < 576 ? popupDialogMenu.style.transform = 'translate3d(0, -100vh, 0)' : popupDialogMenu.style.transform = 'translate3d(645px, 0, 0)';
            body.removeEventListener('click', hideMenu);
        }
    }

    header.addEventListener('click', (e) => {
        const target = e.target;

        if(target === arrowImg){
            if(!+hiddenNumber.style.opacity){
                hiddenNumber.style.cssText = 'opacity: 1; margin-top: 25px; transform: translateX(-4px);';
            }else{
                hiddenNumber.style.cssText = 'opacity: 0; margin-top: 0; transform: translateX(0px);';
            }
        }else if(target === menuIcon){
            popupDialogMenu.style.transform = 'translate3d(0, 0, 0)';
            body.addEventListener('click', hideMenu);
        }
    });
};

export default setHeaderListeners;