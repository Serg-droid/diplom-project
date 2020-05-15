//полифилы
import 'nodelist-foreach-polyfill';
import "@babel/polyfill";
import elementClosest from 'element-closest';
elementClosest(window);

//структурные модули проекта
import setHeaderListeners from './modules/setHeaderListeners';
import scrollPage from './modules/scrollPage';
import showPopupRepairTypes from './modules/showPopupRepairTypes';
import setPhoneMask from './modules/setPhoneMask';
import sendForm from './modules/sendForm';

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    //устанавливаем события на открытие/закрытие меню и показ телефона
    setHeaderListeners();
    //устанавливаем плавную прокрутку на сайте
    scrollPage();
    //активация модального окна "Repair Types"
    showPopupRepairTypes();
    //подключение маски телефона 
    setPhoneMask();
    //обрабатывает формы и отправляет их
    sendForm();
});