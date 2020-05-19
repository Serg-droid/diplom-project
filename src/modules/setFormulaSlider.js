import SliderCarousel from './slider-carousel';

const setFormulaSlider = () => {
    const slider = new SliderCarousel({
        next: '#formula-arrow_right',
        prev: '#formula-arrow_left',
        wrap: '.formula-slider',
        main: '.formula-slider-wrap',
        slidesToShow: 3,
        position: 1,
    })

    slider.init();
};

export default setFormulaSlider;