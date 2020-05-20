import slider from '../plugins/slider';

const setProblemsSlider = () => {
    const   problems = document.getElementById('problems'),
            problemsSlider = problems.querySelector('.problems-slider'),
            slidesArr = [...problemsSlider.children],
            arrowLeft = document.getElementById('problems-arrow_left'),
            arrowRight = document.getElementById('problems-arrow_right');
    
    const setSlider = () => {
        slidesArr.forEach((slide) => {
            slide.style.width = `${problemsSlider.getBoundingClientRect().width}px`;
            slide.style.maxWidth = `${problemsSlider.getBoundingClientRect().width}px`;
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
            slider: problemsSlider,
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

export default setProblemsSlider;