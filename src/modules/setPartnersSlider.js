import slider from './slider';

const setPartnersSlider = () => {
    const   partners = document.getElementById('partners'),
            partnersSlider = partners.querySelector('.partners-slider'),
            partnersAllSlides = partners.querySelectorAll('.partners-slider__slide'),
            arrowLeft = document.getElementById('partners-arrow_left'),
            arrowRight = document.getElementById('partners-arrow_right');

    partnersAllSlides.forEach((slide) => {
        const sliderWidth = partnersSlider.getBoundingClientRect().width;
        slide.style.maxWidth = `${sliderWidth / 3}px`;
        slide.style.width = `${sliderWidth / 3}px`;
    });
    
    const callback = (options) => {
        window.addEventListener('resize', () => {
            partnersAllSlides.forEach((slide) => {
                const sliderWidth = partnersSlider.getBoundingClientRect().width;
                slide.style.maxWidth = `${sliderWidth / 3}px`;
                slide.style.width = `${sliderWidth / 3}px`;
            });
            options.sliderWidth = partnersSlider.getBoundingClientRect().width;
            options.slideWidth = options.sliderWidth / 3;
            options.max = (options.totalSlides) * options.slideWidth - options.sliderWidth;
        });
    } ;

    slider({
        arrowLeft,
        arrowRight,
        slider: partnersSlider,
        slidesArr: [...partnersAllSlides],
        callback,
    });
};

export default setPartnersSlider;