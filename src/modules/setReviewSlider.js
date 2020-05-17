import slider from './slider';

const setReviewSlider = () => {
    const   review = document.getElementById('reviews'),
            reviewSlider = review.querySelector('.reviews-slider'),
            reviewAllSlides = review.querySelectorAll('.reviews-slider__slide'),
            arrowRight = document.getElementById('reviews-arrow_right'),
            arrowLeft = document.getElementById('reviews-arrow_left');

    slider({
        arrowLeft,
        arrowRight,
        slider: reviewSlider,
        slidesArr: [...reviewAllSlides],
    });
};

export default setReviewSlider;