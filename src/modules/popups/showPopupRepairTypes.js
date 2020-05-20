const showPopupRepairTypes = () => {
    const   linksPopupRepair = document.querySelectorAll('.link-list-repair'),
            oneMoreLink = document.querySelector('.menu-link.link-popup-repair'),
            andOneMore = document.querySelectorAll('.menu-link.no-overflow')[1],
            popupRepairTypes = document.querySelector('.popup-repair-types');

    const showPopup = (e) => {
        console.log(e.target)
        e.preventDefault();
        popupRepairTypes.style.visibility = 'visible';
    };

    linksPopupRepair.forEach((link) => {
        link.addEventListener('click', showPopup);
    });
    oneMoreLink.addEventListener('click', showPopup);
    andOneMore.addEventListener('click', showPopup);

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