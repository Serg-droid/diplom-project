import slider from '../plugins/slider';

const setAllTabsSliders = () => {

    const callback = (options) => {
        transparencySlider.style.width = `${options.slideWidth}px`;
        transparencySlider.style.margin = `0 auto`;
        transparencySlider.style.justifyContent = 'flex-start';
        options.sliderWidth = options.slideWidth;
    };

    const setSliders = () => {
        const   allNavLists = document.querySelectorAll('.nav-list'),
                allNavArrowsLeft = document.querySelectorAll('.nav-arrow_left'),
                allNavArrowsRight = document.querySelectorAll('.nav-arrow_right');

        allNavLists.forEach((list, index) => {
            list.style.minWidth = '0';
            list.style.flexWrap = 'nowrap';

            const navSlides = [...list.children];
            navSlides.forEach((slide) => {
                slide.style.width = `${list.getBoundingClientRect().width / 4}px`;
                slide.style.minWidth = `${list.getBoundingClientRect().width / 4}px`;
            });
            slider ({
                slider: list,
                slidesArr: navSlides,
                arrowRight: allNavArrowsRight[index],
                arowLeft: allNavArrowsLeft[index],
                callback,
            });
        });
    };

    if(window.innerWidth <= 1025){
        setSliders();
    }

    window.addEventListener('resize', () => {
        if(window.innerWidth > 1025){ 
            return;
        }
        setSliders();
    });
};

export default setAllTabsSliders;

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