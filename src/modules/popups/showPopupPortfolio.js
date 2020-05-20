const showPopupPortfolio = () => {
    const   portfolio = document.getElementById('portfolio'),
            popupPortfolio = document.querySelector('.popup-portfolio');

    //активация модалки
    portfolio.addEventListener('click', (e) => {
        const target = e.target;
        if(target.matches('.portfolio-slider__slide-frame')){
            popupPortfolio.style.visibility = 'visible';
        }
    });

    //деактивация модалки
    popupPortfolio.addEventListener('click', (e) => {
        const target = e.target;
        const   closeBtn = target.closest('.close'),
                popupDialog = target.closest('.popup-dialog-portfolio');

        if(closeBtn || !popupDialog){
            popupPortfolio.style.visibility = 'hidden';
        }
    });
};

export default showPopupPortfolio;