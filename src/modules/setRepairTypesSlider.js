const setRepairTypesSlider = () => {
    const   divRepairTypes = document.getElementById('repair-types'),
            allSlides = divRepairTypes.querySelectorAll('.types-repair1 .repair-types-slider__slide'),
            navButtons = divRepairTypes.querySelectorAll('.nav-list > button'),
            currentSlide = divRepairTypes.querySelector('.slider-counter-content__current'),
            totalSlides = divRepairTypes.querySelector('.slider-counter-content__total'),
            arrowRight = document.getElementById('repair-types-arrow_right'),
            arrowLeft = document.getElementById('repair-types-arrow_left');

    let activeSlide = 0;
    totalSlides.textContent = allSlides.length;
    currentSlide.textContent = activeSlide + 1;

    const changeSlide = (nextSlide) => {
        navButtons[activeSlide].classList.remove('active');
        allSlides[activeSlide].style.width = '0';

        navButtons[nextSlide].classList.add('active');
        allSlides[nextSlide].style.width = '100%';

        activeSlide = nextSlide;
        currentSlide.textContent = activeSlide + 1;
    };

    navButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            changeSlide(index);
        });
    });

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