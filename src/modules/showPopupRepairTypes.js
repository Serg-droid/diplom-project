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
        if(target.matches('.close') || !target.matches('.popup-dialog-repair-types')){
            popupRepairTypes.style.visibility = 'hidden';
        }
    });
};

export default showPopupRepairTypes;