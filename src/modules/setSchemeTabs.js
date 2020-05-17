const setSchemeTabs = () => {
    const   scheme = document.getElementById('scheme'),
            schemeList = document.getElementById('scheme-list'),
            allButtons = schemeList.querySelectorAll('button'),
            allSlides = scheme.querySelectorAll('.scheme-slider__slide.fade-tab'),
            allDescriptions = scheme.querySelectorAll('.scheme-description-block');

    allButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            allButtons.forEach((button) => {
                button.classList.remove('active');
            });
            button.classList.add('active');

            allSlides.forEach((slide) => {
                slide.style.display = 'none';
            });
            allSlides[index].style.display = 'block';

            allDescriptions.forEach((desc) => {
                desc.classList.remove('visible-content-block');
            });
            allDescriptions[index].classList.add('visible-content-block');
        });
    });


};

export default setSchemeTabs;