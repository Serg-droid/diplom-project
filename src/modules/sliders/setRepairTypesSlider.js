const setRepairTypesSlider = () => {
    const   divRepairTypes = document.getElementById('repair-types'),
            allSliders = divRepairTypes.querySelectorAll('.repair-types-slider > div'),
            navButtons = divRepairTypes.querySelectorAll('.nav-list > button'),
            currentSlide = divRepairTypes.querySelector('.slider-counter-content__current'),
            totalSlides = divRepairTypes.querySelector('.slider-counter-content__total'),
            arrowRight = document.getElementById('repair-types-arrow_right'),
            arrowLeft = document.getElementById('repair-types-arrow_left');

    let activeSlider = 0,
        allSlides = allSliders[activeSlider].querySelectorAll('.repair-types-slider__slide'),
        activeSlide = 0;

    totalSlides.textContent = allSlides.length;

    allSliders.forEach((slider, index) => {
        if(index === activeSlider) return;
        slider.style.display = 'none';
    });
            
    navButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            navButtons[activeSlider].classList.remove('active');
            button.classList.add('active');
    
            allSliders[activeSlider].style.display = 'none';
            allSliders[index].style.display = 'block';

            activeSlider = index;
            allSlides = allSliders[activeSlider].querySelectorAll('.repair-types-slider__slide');
            activeSlide = 0;
            currentSlide.textContent = 1;
            totalSlides.textContent = allSlides.length;
        });
    });

    const changeSlide = (nextSlide) => {
        allSlides[activeSlide].style.width = '0';
        allSlides[activeSlide].style.height = '0';
        allSlides[nextSlide].style.width = '100%';
        allSlides[nextSlide].style.height = 'auto';

        activeSlide = nextSlide;
        currentSlide.textContent = activeSlide + 1;
    };

    arrowLeft.addEventListener('click', () => {
        const nextSlide = activeSlide === 0 ? allSlides.length - 1 : activeSlide - 1;
        changeSlide(nextSlide);
    });

    arrowRight.addEventListener('click', () => {
        const nextSlide = activeSlide === allSlides.length - 1 ? 0 : activeSlide + 1;
        changeSlide(nextSlide);
    });
};

export default setRepairTypesSlider;