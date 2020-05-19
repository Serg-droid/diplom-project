import SliderCarousel from './slider-carousel';

const setAllTabsSliders = () => {

    // let allTabsCopy = [];
    // let isSetted = false;
    
    const setSliders = () => {
        const   allNavLists = document.querySelectorAll('.nav-list'),
                allNavWraps = document.querySelectorAll('.nav-wrap'),
                allNavArrowsLeft = document.querySelectorAll('.nav-arrow_left'),
                allNavArrowsRight = document.querySelectorAll('.nav-arrow_right');

        // isSetted = true;

        allNavLists.forEach((list, index) => {
            const slider = new SliderCarousel({
                main: allNavWraps[index],
                wrap: list,
                next: allNavArrowsRight[index],
                prev: allNavArrowsLeft[index],
                slidesToShow: 3,
            });

            slider.init();
        });
    };

    // const removeSliders = () => {
    //     console.log(allTabsCopy);
    //     isSetted = false;
    // };

    if(window.innerWidth <= 1025){
        setSliders();
    }

    window.addEventListener('resize', () => {
        if(window.innerWidth > 1025){
            // if(isSetted){
            //     removeSliders();
            //     return;
            // }else{
            //     return;
            // }   
            return;
        }
        setSliders();
    });
};

export default setAllTabsSliders;