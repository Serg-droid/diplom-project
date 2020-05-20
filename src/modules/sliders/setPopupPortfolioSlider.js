import slider from '../plugins/slider';

const setPopupPortfolioSlider = () => {
    const   popupPortfolio = document.querySelector('.popup-portfolio'),
            popupPortfolioSlider = popupPortfolio.querySelector('.popup-portfolio-slider'),
            popupAllSlides = popupPortfolio.querySelectorAll('.popup-portfolio-slider__slide'),
            arrowLeft = document.getElementById('popup_portfolio_left'),
            arrowRight = document.getElementById('popup_portfolio_right'),
            sliderCurrentCount = popupPortfolio.querySelector('.slider-counter-content__current'),
            sliderTotalCount = popupPortfolio.querySelector('.slider-counter-content__total'),
            popupSliderAllTexts = popupPortfolio.querySelectorAll('.popup-portfolio-text');

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

export default setPopupPortfolioSlider;