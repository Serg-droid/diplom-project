import slider from './slider';

const setFormulaSlider = () => {
    const   formulaDiv = document.getElementById('formula'),
            formulaSlider = formulaDiv.querySelector('.formula-slider'),
            formulaAllSlides = formulaSlider.querySelectorAll('.formula-slider__slide'),
            arrowRight = document.getElementById('formula-arrow_right'),
            arrowLeft = document.getElementById('formula-arrow_left');

    formulaAllSlides.forEach((slide) => {
        const sliderWidth = formulaSlider.getBoundingClientRect().width;
        slide.style.width = `${sliderWidth / 3}px`;
    });

    const callback = (options) => {
        options.slideWidth = options.sliderWidth / 3;
        arrowLeft.addEventListener('click', () => {
            
        });
        arrowRight.addEventListener('click', () => {

        });
    };

    slider({
        arrowLeft,
        arrowRight,
        slider: formulaSlider,
        slidesArr: [...formulaAllSlides],
        callback,
    });
};

export default setFormulaSlider;