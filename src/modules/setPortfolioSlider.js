import slider from './slider';

const setPortfolioSlider = () => {
    const   portfolio = document.getElementById('portfolio'),
            arrowRight = document.getElementById('portfolio-arrow_right'),
            arrowLeft = document.getElementById('portfolio-arrow_left'),
            portfolioSlider = portfolio.querySelector('.portfolio-slider.mobile-hide'),
            portfolioAllSlides = portfolioSlider.querySelectorAll('.portfolio-slider__slide.fade-tab');

    const callback = (options) => {
        arrowLeft.addEventListener('click', () => {
            console.log('hello')
            if(options.onStart){
                arrowLeft.style.display = 'none';
            }
            if(!options.onEnd){
                arrowRight.style.display = 'block';
            }
        });
        arrowRight.addEventListener('click', () => {
            if(options.onEnd){
                arrowRight.style.display = 'none';
            }
            if(!options.onStart){
                arrowLeft.style.display = 'block';
            }
        });
    };

    slider({    
            arrowRight, 
            arrowLeft, 
            callback,
            slider: portfolioSlider, 
            slidesArr: portfolioAllSlides,
    });

};

export default setPortfolioSlider;