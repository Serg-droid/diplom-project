const showPopupTransparency = () => {
    const   transparency = document.getElementById('transparency'),
            allDocumentItems = transparency.querySelectorAll('.transparency-item__img'),
            popupTransparency = document.querySelector('.popup-transparency');

    allDocumentItems.forEach((item) => {
        item.addEventListener('click', () => {
            popupTransparency.style.visibility = 'visible';
        });
    });
    
    popupTransparency.addEventListener('click', (e) => {
        const target = e.target;
        const   closeBtn = target.closest('.close'),
                popupDialog = target.closest('.popup-dialog-transparency');

        if(closeBtn || !popupDialog){
            popupTransparency.style.visibility = 'hidden';
        }
    });
};

export default showPopupTransparency;