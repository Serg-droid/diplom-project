//полифилы
import 'nodelist-foreach-polyfill';
import "@babel/polyfill";
import elementClosest from 'element-closest';
elementClosest(window);

//структурные модули проекта
import setHeaderListeners from './modules/setHeaderListeners';
import scrollPage from './modules/scrollPage';

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    //устанавливаем события на открытие/закрытие меню и показ телефона
    setHeaderListeners();
    //устанавливаем плавную прокрутку на сайте
    scrollPage();

});