const showConsultPopup = () => {
    const   allButtons = document.querySelectorAll('button'),
            popupConsultation = document.querySelector('.popup-consultation');

    const consultButtons = [...allButtons].filter((button) => button.textContent === 'Проконсультироваться');
    consultButtons.forEach((btn) => {
        btn.disabled = false;
        btn.style.color = '#fff';
        btn.addEventListener('click', () => {
            popupConsultation.style.visibility = 'visible';
        });
    });

    popupConsultation.addEventListener('click', (e) => {
        const target = e.target;
        const   closeBtn = target.closest('.close'),
                popupDialog = target.closest('.feedback-wrap');
        
        if(closeBtn || !popupDialog || target.matches('.button.button-consultation')){
            popupConsultation.style.visibility = 'hidden';
        }
    });
};

export default showConsultPopup;