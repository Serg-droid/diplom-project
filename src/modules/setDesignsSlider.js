const setDesignsSlider = () => {
    const   designs = document.getElementById('designs'),
            navButtons = designs.querySelectorAll('.button_o.designs-nav__item.designs-nav__item_base'),
            allSlides = designs.querySelectorAll('.designs-slider > div');
    
    let activeSlide = 0;

    const changeSlide = (nextSlide) => {
        navButtons[activeSlide].classList.remove('active');
        allSlides[activeSlide].style.width = '0';

        navButtons[nextSlide].classList.add('active');
        allSlides[nextSlide].style.width = '100%';

        activeSlide = nextSlide;
    };

    navButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            changeSlide(index);
        });
    });

};

export default setDesignsSlider;