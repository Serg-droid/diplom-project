const showRoundHelp = () => {
    const   formulaDiv = document.getElementById('formula'),
            formulaDivDesktop = formulaDiv.querySelector('.wrapper_small.mobile-hide.tablet-hide');

    formulaDivDesktop.addEventListener('mouseover', (e) => {
        const target = e.target.closest('.formula-item__icon');
        if(!target) return;
        const divTextHelp = target.querySelector('div');
        divTextHelp.style.visibility = 'visible';
        divTextHelp.style.opacity = '1';
        const heightPosition = divTextHelp.getBoundingClientRect().y;
        if(heightPosition < 0){
            // const boardStyles = window.getComputedStyle(divTextHelp, '::before');
            // boardStyles.setProperty('transform', 'rotate(180deg)');
            divTextHelp.style.bottom = '';
            divTextHelp.style.top = '90px';
        }
    });

    formulaDivDesktop.addEventListener('mouseout', (e) => {
        const target = e.target.closest('.formula-item__icon');
        if(!target) return;
        const divTextHelp = target.querySelector('div');
        divTextHelp.style.visibility = 'hidden';
        divTextHelp.style.opacity = '.1';
        divTextHelp.style.bottom = '90px';
        divTextHelp.style.top = '';
    });
};

export default showRoundHelp;