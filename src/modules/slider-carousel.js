'use strict';

class SliderCarousel{
    constructor({
        main,
        wrap,
        next,
        prev,
        infinity = false,
        position = 0,
        slidesToShow = 4,
        responsive = [],
    }){
        if(!main || !wrap){
            console.warn('Чи шо не передал 2 свойства в слайдерок? Мм?');
        }
        if(typeof main === 'string' && typeof wrap === 'string'){
            this.main = document.querySelector(main);
            this.wrap = document.querySelector(wrap);
            this.slides = document.querySelector(wrap).children;
        }else{
            this.main = main;
            this.wrap = wrap;
            this.slides = wrap.children;
        }

        if(typeof next === 'string' || typeof prev === 'string'){
            this.next = document.querySelector(next);
            this.prev = document.querySelector(prev);
        }else{
            this.next = next;
            this.prev = prev;
        }

        this.slidesToShow = slidesToShow;
        this.options = {
            position,
            infinity, 
            widthSlide: Math.floor(100 / this.slidesToShow),
            maxPosition: this.slides.length - this.slidesToShow,
        };
        this.responsive = responsive;
    }
    init(){
        this.addClasses();
        this.addStyle();
        if(this.prev && this.next){
            this.controlSlider();
        }else{
            this.addArrow();
            this.controlSlider(); 
        }

        if(this.responsive){
            this.responseInit();
        }
    }
    addClasses(){
        this.main.classList.add('kek-slider');
        this.wrap.classList.add('kek-slider__wrap');
        for(const slide of this.slides){
            slide.classList.add('kek-slider__item');
        }
    }
    addStyle(){
        let style = document.getElementById('sliderCarousel-style');
        if(style) return;
        style = document.createElement('style');
        style.id = 'sliderCarousel-style';
        style.textContent = `
        .glo-slider__prev,
        .glo-slider__next{
            margin: 0 10px;
            border: 20px solid transparent;
            background: transparent,
            
        }
        .glo-slider__next{
            border-left-color: red;
        }
        .glo-slider__next{
            border-left-color: blue;
        }
        .glo-slider__prev:hover,
        .glo-slider__next:hover,
        .glo-slider__prev:focus,
        .glo-slider__next:focus{
            outline: transparent;
            background: transparent;
        }

        .kek-slider{
            overflow: hidden !important;
        }
        .kek-slider__wrap{
            display: flex !important;
            transition: transform .5s !important;
            will-change: transform !important;
        }
        .kek-slider__item{
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            flex: 0 0 ${this.options.widthSlide}% !important;
            margin: auto 0 !important;
        }
        `;
        document.head.appendChild(style);
    }
    controlSlider(){
        this.prev.addEventListener('click', this.prevSlider.bind(this));
        this.next.addEventListener('click', this.nextSlider.bind(this));
    }
    prevSlider(){
        if(this.options.infinity || this.options.position > 0){
            --this.options.position;
            if(this.options.position < 0){
                this.options.position > this.options.maxPosition;
            }
            this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
        }
    }
    nextSlider(){
        if(this.options.infinity || this.options.position < this.options.maxPosition){
            ++this.options.position;
            if(this.options.position > this.options.maxPosition){
                this.options.position = 0;
            }
            this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
        }
    }
    addArrow(){
        this.prev = document.createElement('button');
        this.next = document.createElement('button');

        this.prev.className = 'glo-slider__prev';
        this.next.className = 'glo-slider__next';

        this.main.appendChild(this.prev);
        this.main.appendChild(this.next);
    }
    responseInit(){
        const slidesToShowDefault = this.slidesToShow;
        const allResponse = this.responsive.map((item) => item.breakpoint);
        const maxResponse = Math.max(...allResponse);

        const checkResponse = () => {
            const widthWindow = document.documentElement.clientWidth;
            if(widthWindow < maxResponse){
                for(let i = 0; i < allResponse.length; i++){
                    if(widthWindow < allResponse[i]){
                        this.slidesToShow = this.responsive[i].slideToShow;
                        this.options.widthSlide = Math.floor(100 / this.slidesToShow);
                        this.addStyle();
                    }
                }
            }else{
                this.slidesToShow = slidesToShowDefault;
                this.options.widthSlide = Math.floor(100 / this.slidesToShow);
                this.addStyle();
            }
        };
        checkResponse();

        document.addEventListener('resize', checkResponse);
    }
}

export default SliderCarousel;