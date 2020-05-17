const showPopupRepairTypes = () => {
    const   linksPopupRepair = document.querySelectorAll('.link-popup-repair'),
            popupRepairTypes = document.querySelector('.popup-repair-types');

    const showPopup = (e) => {
        e.preventDefault();
        popupRepairTypes.style.visibility = 'visible';
    };

    linksPopupRepair.forEach((link) => {
        link.addEventListener('click', showPopup);
    });

    popupRepairTypes.addEventListener('click', (e) => {
        const target = e.target;
        const   closeBtn = target.closest('.close'),
                popupDialog = target.closest('.popup-dialog-repair-types');
        if(closeBtn || !popupDialog){
            popupRepairTypes.style.visibility = 'hidden';
        }
    });
};

export default showPopupRepairTypes;