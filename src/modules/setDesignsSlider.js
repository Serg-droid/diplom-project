const setDesignsSlider = () => {
    const   designs = document.getElementById('designs'),
            allSliders = designs.querySelectorAll('.designs-slider > div'),
            allPreviewBlocks = designs.querySelectorAll('.preview-block'),
            navButtons = designs.querySelectorAll('.nav-list > button');

    //устанавиваем состояния слайдера -- меняются динамически
    let activeSlider = 0,
        allSlides = allSliders[activeSlider].querySelectorAll('.designs-slider__style-slide'),
        activeSlide = 0;

    const allPreviewsArr = [];

    const changePreview = (index, prevSlide, nextSlide) => {
        allPreviewsArr[index][prevSlide].classList.remove('preview_active');
        allPreviewsArr[index][nextSlide].classList.add('preview_active');
        changeSlide(nextSlide);
    };

    //заполняем двумерный массив, каждый подмассив - массив превью с одного блока слайдов
    //заодно вешаем обработчики событий на превьюшки
    allPreviewBlocks.forEach((previewBlock, blockIndex) => {
        const previews = previewBlock.querySelectorAll('.preview-block__item-inner');
        const prevBlockArr = [];
        previews.forEach((preview, itemIndex) => {
            preview.addEventListener('click', () => {
                changePreview(blockIndex, activeSlide, itemIndex);
            });
            prevBlockArr.push(preview);
        });
        allPreviewsArr.push(prevBlockArr);
    });

    //изначально скрываем все слайдеры кроме активного
    allSliders.forEach((slider, index) => {
        if(index === activeSlider) return;
        slider.style.display = 'none';
    });
    
    //кнопки переключают слайдеры -- меняют стейты
    navButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            navButtons[activeSlider].classList.remove('active');
            button.classList.add('active');
    
            allSliders[activeSlider].style.display = 'none';
            allSliders[index].style.display = 'block';

            allPreviewBlocks[activeSlider].style.display = 'none';
            allPreviewBlocks[activeSlider].classList.remove('visible');
            allPreviewBlocks[index].style.display = 'flex';
            allPreviewBlocks[index].classList.add('visible');

            allPreviewsArr[activeSlider][activeSlide].classList.remove('preview_active');
            allPreviewsArr[index][0].classList.add('preview_active');

            allSlides = allSliders[index].querySelectorAll('.designs-slider__style-slide');

            //здесь меняем стейты
            activeSlider = index;
            activeSlide = 0;
        });
    });

    const changeSlide = (nextSlide) => {
        allSlides[activeSlide].style.width = '0';
        allSlides[activeSlide].style.height = '0';
        allSlides[nextSlide].style.width = '100%';
        allSlides[nextSlide].style.height = 'auto';

        //меняем стейт
        activeSlide = nextSlide;
    };
};

export default setDesignsSlider;