const showProblemsRound = () => {
    const   problemsDiv = document.getElementById('problems'),
            problemsDivDesktop = problemsDiv.querySelector('.wrapper_middle.mobile-hide.tablet-hide');

    problemsDivDesktop.addEventListener('mouseover', (e) => {
        const target = e.target.closest('.problems-item__icon');
        if(!target) return;
        const divTextHelp = target.querySelector('div');
        divTextHelp.style.visibility = 'visible';
        divTextHelp.style.opacity = '1';
        const topPosition = divTextHelp.getBoundingClientRect().y;
        const bottomPosition = divTextHelp.getBoundingClientRect().bottom;
        if(topPosition < 0){
            // const boardStyles = window.getComputedStyle(divTextHelp, '::before');
            // boardStyles.setProperty('transform', 'rotate(180deg)');
            divTextHelp.style.bottom = '';
            divTextHelp.style.top = '90px';
        }else if(bottomPosition - 70 > window.innerHeight){
            divTextHelp.style.bottom = '';
            divTextHelp.style.top = `-${divTextHelp.getBoundingClientRect().height}px`;
        }
    });

    problemsDivDesktop.addEventListener('mouseout', (e) => {
        const target = e.target.closest('.problems-item__icon');
        if(!target) return;
        const divTextHelp = target.querySelector('div');
        divTextHelp.style.visibility = 'hidden';
        divTextHelp.style.opacity = '.1';
        divTextHelp.style.bottom = '90px';
        divTextHelp.style.top = '';
    });
};

export default showProblemsRound;