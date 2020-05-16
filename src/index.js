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
import setForms from './modules/setForms';
import setInputNameMask from './modules/setInputNameMask';
import showPopupPrivacy from './modules/showPopupPrivacy';
import showRoundHelp from './modules/showRoundHelp';
import setFormulaSlider from './modules/setFormulaSlider';
import setRepairTypesSlider from './modules/setRepairTypesSlider';
import setPortfolioSlider from './modules/setPortfolioSlider';
import showPopupPortfolio from './modules/showPopupPortfolio';
import showTransparencySlider from './modules/showTransparencySlider';

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
    //подключение проверки инпута имен
    setInputNameMask();
    //обрабатывает формы и отправляет их
    setForms();
    //показывает модалку "Политика конфиденциальности"
    showPopupPrivacy();
    //показывает подсказки при наведении мышкой на кружки
    showRoundHelp();
    //обрабатывает слайдер блока formula
    setFormulaSlider();
     //обрабатывает слайдер видов ремонта
    setRepairTypesSlider();
    //обрабатывает слайдер портфолио
    setPortfolioSlider();
    //показывает модалку в портфолио
    showPopupPortfolio();
    //обрабатывает слайдер документов
    showTransparencySlider();
});