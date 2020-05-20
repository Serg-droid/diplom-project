import setPopupPortfolioSlider from './setPopupPortfolioSlider';
import setReviewSlider from './setReviewSlider';
import setPartnersSlider from './setPartnersSlider';
import setDesignsSlider from './setDesignsSlider';
import setPopupDesignSlider from './setPopupDesignSlider';
import setProblemsSlider from './setProblemsSlider';
import setFormulaSlider from './setFormulaSlider';
import setRepairTypesSlider from './setRepairTypesSlider';
import setPortfolioSliderDesktop from './setPortfolioSliderDesktop';
import setPortfolioSliderMobile from './setPortfolioSliderMobile';
import showTransparencySlider from './showTransparencySlider';
import setPopupTransparencySlider from './setPopupTransparencySlider';
import setAllTabsSliders from './setAllTabsSliders';

const initSliders = () => {
    setPopupPortfolioSlider();

    setReviewSlider();
    setPartnersSlider();

    setDesignsSlider();
    setPopupDesignSlider();

    setProblemsSlider();
    setFormulaSlider();

    setRepairTypesSlider();

    setPortfolioSliderMobile();
    setPortfolioSliderDesktop();

    showTransparencySlider();
    setPopupTransparencySlider();

    setAllTabsSliders();
};

export default initSliders;