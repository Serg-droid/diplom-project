const setFormulaSlider = () => {
    const   formulaDiv = document.getElementById('formula'),
            formulaSlider = formulaDiv.querySelector('.formula-slider'),
            formulaAllSlides = formulaSlider.querySelectorAll('.formula-slider__slide');

    //устанвливаем дефолтное состояние слайдера
    formulaSlider.style.display = 'flex';

    formulaAllSlides.forEach((slide, index) => {
        // if(index === 0){
        //     slide.style.opacity = '1';
        //     const description = slide.querySelector('.formula-item-popup');
        //     description.style.visibility = 'visible';
        //     description.style.opacity = '1';
        //     return;
        // }else if(index === 5 || index === 1) {
        //     const description = slide.querySelector('.formula-item-popup');
        //     description.style.visibility = 'visible';
        //     return;
        // }
        if(index === 5 || index === 1){
            const description = slide.querySelector('.formula-item-popup');
                description.style.visibility = 'visible';
                return;
        }else if(index === 0){
            slide.style.opacity = '1';
                const description = slide.querySelector('.formula-item-popup');
                description.style.visibility = 'visible';
                description.style.opacity = '1';
                return;
        }
        // slide.style.display = 'none';
    });
};

export default setFormulaSlider;