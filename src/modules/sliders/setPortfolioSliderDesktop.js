import slider from '../plugins/slider';

const setPortfolioSliderDesktop = () => {
    const   portfolio = document.getElementById('portfolio'),
            arrowRight = document.getElementById('portfolio-arrow_right'),
            arrowLeft = document.getElementById('portfolio-arrow_left'),
            portfolioSlider = portfolio.querySelector('.portfolio-slider.mobile-hide'),
            portfolioAllSlides = [...portfolioSlider.children];

    const setSlider = () => {
        const callback = (options) => {
            arrowLeft.addEventListener('click', () => {
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

    if(window.innerWidth > 575){
        setSlider();
    }

    window.addEventListener('resize', () => {
        if(window.innerWidth <= 575){
            portfolioSlider.style.display = 'none';
        }else{
            setSlider();
        }
    });
};

export default setPortfolioSliderDesktop;