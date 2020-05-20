const showPopupPrivacy = () => {
    const   privacyLinks = document.querySelectorAll('.link-privacy'),
            popupPrivacy = document.querySelector('.popup-privacy');

    const hidePopupPrivacy = (e) => {
        const target = e.target;
        if(target.matches('.close') || !target.closest('.popup-dialog-privacy')){
            popupPrivacy.style.visibility = 'hidden';
            popupPrivacy.removeEventListener('click', hidePopupPrivacy);
        }
    };

    privacyLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            popupPrivacy.style.visibility = 'visible';
            popupPrivacy.addEventListener('click', hidePopupPrivacy);
        });
    });
};

export default showPopupPrivacy;