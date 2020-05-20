import slider from '../plugins/slider';

const showTransparencySlider = () => {
    const   transparencyWrap = document.querySelector('.transparency-slider-wrap'),
            transparencySlider = document.querySelector('.transparency-slider.row'),
            transparencyAllItems = transparencySlider.querySelectorAll('.transparency-item'),
            arrowLeft = document.getElementById('transparency-arrow_left'),
            arrowRight = document.getElementById('transparency-arrow_right');

    const callback = (options) => {
        transparencyAllItems.forEach((item) => {
            item.style.visibility = 'hidden';
        });
        const index = options.currentSlide - 1;
        transparencyAllItems[index].style.visibility = 'visible';

        transparencySlider.style.width = `${options.slideWidth}px`;
        transparencySlider.style.margin = `0 auto`;
        transparencySlider.style.justifyContent = 'flex-start';
        options.sliderWidth = options.slideWidth;

        transparencyWrap.addEventListener('click', (e) => {
            const target = e.target;
            if(target.closest('.slider-arrow')){
                transparencyAllItems.forEach((item) => {
                    item.style.visibility = 'hidden';
                });
                const index = options.currentSlide - 1;
                transparencyAllItems[index].style.visibility = 'visible';
            }
        });
        
    }

    const setSliderSettings = () => {
        if(window.innerWidth <= 1090){
            slider({
                slider: transparencySlider,
                slidesArr: transparencyAllItems,
                arrowLeft,
                arrowRight,
                callback,
            });
        }else{
            transparencyAllItems.forEach((item) => {
                item.style.visibility = 'visible';
            });
            transparencySlider.style.width = `auto`;
            transparencySlider.style.justifyContent = 'center';
        }
    };

    setSliderSettings();
    
    window.addEventListener('resize', () => {
        setSliderSettings();
    });

};

export default showTransparencySlider;