const showPopupDesign = () => {
    const   popupLink = document.querySelector('.link-list-designs > a'),
            popupDesign = document.querySelector('.popup-design');

    popupLink.addEventListener('click', () => {
        popupDesign.style.visibility = 'visible';
    });
    
    popupDesign.addEventListener('click', (e) => {
        const target = e.target;
        const   closeBtn = target.closest('.close'),
                popupDialog = target.closest('.popup-dialog-design');

        if(closeBtn || !popupDialog){
            popupDesign.style.visibility = 'hidden';
        }
    });
};

export default showPopupDesign;