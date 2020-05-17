const showPopupThank = () => {
    const   popupThank = document.querySelector('.popup-thank');

    popupThank.style.visibility = 'visible';

    popupThank.addEventListener('click', (e) => {
        const target = e.target;
        const   closeBtn = target.closest('.close'),
                popupDialog = target.closest('.feedback-wrap.popup-thank-bg');

        if(closeBtn || !popupDialog){
            popupThank.style.visibility = 'hidden';
        }
    });

    setTimeout(() => {
        popupThank.style.visibility = 'hidden';
    }, 3000)
};

export default showPopupThank;