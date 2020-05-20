const slider = ({ arrowRight, arrowLeft, slider, slidesArr, callback }) => {
    //устанавливаем обертку для слайдера
    const slidesContainer = document.createElement('div');
    //добавляем обертке стили
    slidesContainer.style.display = 'flex';
    slidesContainer.style.transition = 'all .3s';
    slidesContainer.style.transform = 'translateX(0)';

    slider.style.overflow = 'hidden';
    slider.style.display = 'flex';

    slidesContainer.classList.add('slides-container');
    //переносим все элементы в новую обертку
    slidesArr.forEach((slide) => {
        slidesContainer.append(slide);
    });
    //очищаем слайдер от элементов
    slider.innerHTML = '';
    slider.append(slidesContainer);

    //получаем ширину 1 слайда и слайдера
    const   slideWidth = slidesArr[0].getBoundingClientRect().width,
            sliderWidth = slider.getBoundingClientRect().width;
            
    //опции для слайдера
    const options = {
        min: 0,
        max: (slidesArr.length) * slideWidth - sliderWidth,
        onStart: true,
        onEnd: false,
        currentSlide: 1,
        totalSlides: slidesArr.length,
        slideWidth,
        sliderWidth,
    };

    if(arrowRight){
        arrowRight.addEventListener('click', () => {
            options.currentSlide = Math.min(options.totalSlides, options.currentSlide + 1);
            options.onStart = false;
            const oldPos = +slidesContainer.style.transform.match(/\-?[0-9]+/)[0];
            const newPos = oldPos - options.slideWidth;
            if(Math.abs(newPos) > options.max){
                options.onEnd = true;
                //делаем так, чтобы самый последний элемент показался полностью
                const restPos = ((slidesArr.length) * options.slideWidth) - options.sliderWidth - Math.abs(newPos);
                slidesContainer.style.transform = `translateX(${newPos - restPos}px)`;
                return;
            }
            slidesContainer.style.transform = `translateX(${newPos}px)`;
        });
    }
    
    if(arrowLeft){
        arrowLeft.addEventListener('click', () => {
            options.currentSlide = Math.max(1, options.currentSlide - 1);
            options.onEnd = false;
            const oldPos = +slidesContainer.style.transform.match(/\-?[0-9]+/)[0];
            const newPos = oldPos + options.slideWidth;
            if(newPos > options.min){
                options.onStart = true;
                //делаем так, чтоьы самый последний элемент показался полностью
                slidesContainer.style.transform = 'translateX(0)';
                return;
            }
            slidesContainer.style.transform = `translateX(${newPos}px)`;
        });
    }

    if(callback){
        callback(options);
    }
};

export default slider;