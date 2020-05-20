import slider from '../plugins/slider';

const setPopupTransparencySlider = () => {
    const   popupTransparency = document.querySelector('.popup-transparency'),
            transparencyPopupSlider = popupTransparency.querySelector('.popup-transparency-slider'),
            transparencyPopupAllSlides = popupTransparency.querySelectorAll('.popup-transparency-slider__slide'),
            arrowRight = document.getElementById('transparency_right'),
            arrowLeft = document.getElementById('transparency_left'),
            sliderCurrent = popupTransparency.querySelector('.slider-counter-content__current'),
            sliderTotal = popupTransparency.querySelector('.slider-counter-content__total');

    transparencyPopupAllSlides.forEach((slide) => {
        const img = slide.querySelector('img');
        slide.style.width = `${img.width}px`;
    });
    
    const callback = (options) => {
        options.slideWidth = options.sliderWidth;
        sliderTotal.textContent = options.totalSlides;
        sliderCurrent.textContent = options.currentSlide;
        arrowLeft.addEventListener('click', () => {
            sliderCurrent.textContent = options.currentSlide;
        });
        arrowRight.addEventListener('click', () => {
            sliderCurrent.textContent = options.currentSlide;
        });
    };

    slider({
        arrowLeft,
        arrowRight,
        slider: transparencyPopupSlider,
        slidesArr: transparencyPopupAllSlides,
        callback,
    });
};

export default setPopupTransparencySlider;