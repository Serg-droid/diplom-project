import showConsultPopup from './showConsultPopup';
import showPopupDesign from './showPopupDesign';
import showPopupPortfolio from './showPopupPortfolio';
import showPopupPrivacy from './showPopupPrivacy';
import showPopupRepairTypes from './showPopupRepairTypes';
import showPopupTransparency from './showPopupTransparency';

const initPopups = () => {
    showConsultPopup();
    showPopupDesign();
    showPopupPortfolio();
    showPopupPrivacy();
    showPopupRepairTypes();
    showPopupTransparency();
};

export default initPopups;