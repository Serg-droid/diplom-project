//полифилы
import 'nodelist-foreach-polyfill';
import "@babel/polyfill";
import elementClosest from 'element-closest';
elementClosest(window);
import 'fetch-polyfill';
import 'es6-promise/auto';
import 'formdata-polyfill';
import './modules/plugins/append-polyfill';
import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

//структурные модули проекта
import initPopups from './modules/popups/initPopups';
import initSliders from './modules/sliders/initSliders';

import loadRepairTypesData from './modules/others/loadRepairTypesData';
import scrollPage from './modules/others/scrollPage';
import setFaqAccordeon from './modules/others/setFaqAccordeon';
import setForms from './modules/others/setForms';
import setHeaderListeners from './modules/others/setHeaderListeners';
import showRoundHelp from './modules/others/showRoundHelp';
import showProblemsRound from './modules/others/showProblemsRound';
import setSchemeTabs from './modules/others/setSchemeTabs';
import setInputNameMask from './modules/others/setInputNameMask';

import setPhoneMask from './modules/plugins/setPhoneMask';

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    setForms();
    scrollPage();
    setFaqAccordeon();
    setPhoneMask();
    setHeaderListeners();
    setSchemeTabs();
    setInputNameMask();

    showRoundHelp();
    showProblemsRound();

    initPopups();
    initSliders();
});