import SliderCarousel from './slider-carousel';

const setProblemsSlider = () => {
    const slider = new SliderCarousel({
        next: '#problems-arrow_right',
        prev: '#problems-arrow_left',
        wrap: '.problems-slider',
        main: '.problems-slider-wrap',
        slidesToShow: 2,
        position: 0,
    })

    slider.init();
};

export default setProblemsSlider;