import slider from '../plugins/slider';

const setPortfolioSliderMobile = () => {
    const   portfolio = document.getElementById('portfolio'),
            arrowRight = document.getElementById('portfolio-arrow-mobile_right'),
            arrowLeft = document.getElementById('portfolio-arrow-mobile_left'),
            portfolioSlider = portfolio.querySelector('.portfolio-slider-mobile'),
            counterCurrent = portfolio.querySelector('.slider-counter-content__current'),
            counterTotal = portfolio.querySelector('.slider-counter-content__total'),
            portfolioAllSlides = [...portfolioSlider.children];

    const setSlider = () => {
        const callback = (options) => {
            counterTotal.textContent = options.totalSlides;
            arrowLeft.addEventListener('click', () => {
                if(options.onStart){
                    arrowLeft.style.display = 'none';
                }
                if(!options.onEnd){
                    arrowRight.style.display = 'block';
                }
                counterCurrent.textContent = options.currentSlide;
            });
            arrowRight.addEventListener('click', () => {
                if(options.onEnd){
                    arrowRight.style.display = 'none';
                }
                if(!options.onStart){
                    arrowLeft.style.display = 'block';
                }
                counterCurrent.textContent = options.currentSlide;
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

    if(window.innerWidth < 575){
        setSlider();
    }

    window.addEventListener('resize', () => {
        if(window.innerWidth > 575){
            portfolioSlider.style.display = 'none';
        }else{
            setSlider();
        }
    });
};

export default setPortfolioSliderMobile;