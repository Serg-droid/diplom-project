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
import showPopupTransparency from './modules/showPopupTransparency';
import setPopupTransparencySlider from './modules/setPopupTransparencySlider';
import showProblemsRound from './modules/showProblemsRound';
import setDesignsSlider from './modules/setDesignsSlider';
import showConsultPopup from './modules/showConsultPopup';
import setReviewSlider from './modules/setReviewSlider';
import setSchemeTabs from './modules/setSchemeTabs';
import setFaqAccordeon from './modules/setFaqAccordeon';
import setPartnersSlider from './modules/setPartnersSlider';

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
    //показывает модалку документа
    showPopupTransparency();
    //обрабатывает слайдер модалки с документом
    setPopupTransparencySlider();
    //показывает сообщения при наведении на круги в разделе проблемы
    showProblemsRound();
    //обрабатывает слайдер раздела дизайна
    setDesignsSlider();
    //обработка кнопок "Проконсультироваться"
    showConsultPopup();
    //установка слайдера на отзывы
    setReviewSlider();
    //установка табов на схему работы
    setSchemeTabs();
    //установка аакордеона ЧаВо
    setFaqAccordeon();
    //слайдер на партнеров
    setPartnersSlider();
});