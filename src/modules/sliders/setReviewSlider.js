import slider from '../plugins/slider';

const setReviewSlider = () => {
    const   review = document.getElementById('reviews'),
            reviewSlider = review.querySelector('.reviews-slider'),
            reviewAllSlides = review.querySelectorAll('.reviews-slider__slide'),
            arrowRight = document.getElementById('reviews-arrow_right'),
            arrowLeft = document.getElementById('reviews-arrow_left');
    
    window.addEventListener('resize', () => {
        reviewAllSlides.forEach((slide) => {
            slide.style.width = `${reviewSlider.getBoundingClientRect().width}px`;
        });
    });

    reviewAllSlides.forEach((slide) => {
        slide.style.width = `${reviewSlider.getBoundingClientRect().width}px`;
    });

    slider({
        arrowLeft,
        arrowRight,
        slider: reviewSlider,
        slidesArr: [...reviewAllSlides],
    });
};

export default setReviewSlider;