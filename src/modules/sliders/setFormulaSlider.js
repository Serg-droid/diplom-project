import slider from '../plugins/slider';

const setFormulaSlider = () => {
    const   formula = document.getElementById('formula'),
            formulaSlider = formula.querySelector('.formula-slider'),
            slidesArr = [...formulaSlider.children],
            arrowLeft = document.getElementById('formula-arrow_left'),
            arrowRight = document.getElementById('formula-arrow_right');

    slidesArr[0].style.opacity = '1';
    slidesArr[0].classList.add('active-item');

    const setSlider = () => {
        slidesArr.forEach((slide) => {
            slide.style.width = `${formulaSlider.getBoundingClientRect().width}px`;
            slide.style.maxWidth = `${formulaSlider.getBoundingClientRect().width}px`;
            slide.style.marginTop = '-175px';
        });

        const callback = (options) => {
            options.slideWidth = options.sliderWidth;
            arrowLeft.addEventListener('click', () => {
                const index = options.currentSlide - 1;
                slidesArr[index].style.opacity = '1';
                slidesArr[index].classList.add('active-item');
                slidesArr[index + 1].classList.remove('active-item');
                slidesArr[index + 1].style.opacity = '0';
            });
            arrowRight.addEventListener('click', () => {
                const index = options.currentSlide - 1;
                slidesArr[index].style.opacity = '1';
                slidesArr[index].classList.add('active-item');
                slidesArr[index - 1].classList.remove('active-item');
                slidesArr[index - 1].style.opacity = '0';
            });
        };
        
        slider({
            arrowLeft,
            arrowRight,
            slider: formulaSlider,
            slidesArr,
            callback,
        });
    };

    window.addEventListener('resize', () => {
        if(window.innerWidth > 1200) return;
       setSlider(); 
    });

    setSlider();
};

export default setFormulaSlider;