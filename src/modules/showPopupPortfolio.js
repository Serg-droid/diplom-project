import slider from './slider';

const showPopupPortfolio = () => {
    const   portfolio = document.getElementById('portfolio'),
            popupPortfolio = document.querySelector('.popup-portfolio'),
            popupPortfolioSlider = popupPortfolio.querySelector('.popup-portfolio-slider'),
            popupAllSlides = popupPortfolioSlider.querySelectorAll('.popup-portfolio-slider__slide'),
            arrowLeft = document.getElementById('popup_portfolio_left'),
            arrowRight = document.getElementById('popup_portfolio_right'),
            sliderCurrentCount = popupPortfolio.querySelector('.slider-counter-content__current'),
            sliderTotalCount = popupPortfolio.querySelector('.slider-counter-content__total'),
            popupSliderAllTexts = popupPortfolio.querySelectorAll('.popup-portfolio-text');

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
        const   closeBtn = target.closest('.close.mobile-hide'),
                popupDialog = target.closest('.popup-dialog.popup-dialog-portfolio');

        if(closeBtn || !popupDialog){
            popupPortfolio.style.visibility = 'hidden';
        }
    });

    const callback = (options) => {
        sliderTotalCount.textContent = options.totalSlides;
        const index = options.currentSlide - 1;
        popupSliderAllTexts[index].style.display = 'block';

        popupPortfolio.addEventListener('click', (e) => {
            const target = e.target.closest('.popup-arrow');
            if(target === arrowLeft || target === arrowRight){
                sliderCurrentCount.textContent = options.currentSlide;
                popupSliderAllTexts.forEach((text) => {
                    text.style.display = 'none';
                });
                const index = options.currentSlide - 1;
                popupSliderAllTexts[index].style.display = 'block';
            }
        });

    };

    slider({ 
        arrowLeft, 
        arrowRight,
        slider: popupPortfolioSlider,
        slidesArr: [...popupAllSlides],
        callback,
    });
};

export default showPopupPortfolio;