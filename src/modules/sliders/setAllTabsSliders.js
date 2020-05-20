import slider from '../plugins/slider';

const setAllTabsSliders = () => {
    console.log('we are setted')
    const   allNavLists = document.querySelectorAll('.nav-list'),
            allNavArrowsLeft = document.querySelectorAll('.nav-arrow_left'),
            allNavArrowsRight = document.querySelectorAll('.nav-arrow_right');

    allNavLists.forEach((list, index) => {
        const navSlides = [...list.children];

        const callback = (options) => {
            navSlides.forEach((slide) => {
                slide.style.width = `${list.getBoundingClientRect().width / 4}px`;
            });
            options.slideWidth = options.sliderWidth / 4;
            options.max = navSlides.length * options.slideWidth;
        }
        
        const setSliderSettings = () => {
            if(window.innerWidth <= 1025){
                slider({
                    slider: list,
                    slidesArr: navSlides,
                    arrowLeft: allNavArrowsLeft[index],
                    arrowRight: allNavArrowsRight[index],
                    callback,
                });
            }else{
                list.style.flexWrap = 'wrap';
                const container = list.querySelector('.slides-container');
                if(container){
                    const buttons = [...container.children];
                    list.removeChild(container);
                    buttons.forEach((button) => {
                        list.appendChild(button);
                    });
                }
                navSlides.forEach((slide) => {
                    slide.style.width = '220px';
                });
            }
        };
        
        setSliderSettings();
        
        window.addEventListener('resize', () => {
            setSliderSettings();
        });
    });
};

export default setAllTabsSliders;

