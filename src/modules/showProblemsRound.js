const showProblemsRound = () => {
    const   problemsDiv = document.getElementById('problems'),
            problemsDivDesktop = problemsDiv.querySelector('.wrapper_middle.mobile-hide.tablet-hide');

    const rotate = (div, rotateDeg) => {
        const divClass = div.classList.value.split(' ').join('.');
        const style = document.createElement('style');
        style.textContent = `
        .${divClass}::before {
            transform: rotate(${rotateDeg}deg);
        }
        `;
        document.head.appendChild(style);
    };

    problemsDivDesktop.addEventListener('mouseover', (e) => {
        const target = e.target.closest('.problems-item__icon');
        if(!target) return;
        const divTextHelp = target.querySelector('div');
        divTextHelp.style.visibility = 'visible';
        divTextHelp.style.opacity = '1';
        const topPosition = divTextHelp.getBoundingClientRect().y;
        const bottomPosition = divTextHelp.getBoundingClientRect().bottom;
        if(topPosition < 0){
            rotate(divTextHelp, '180')
    
            divTextHelp.style.bottom = '';
            divTextHelp.style.top = '90px';
        }else if(bottomPosition - 70 > window.innerHeight){
            rotate(divTextHelp, '0');

            divTextHelp.style.bottom = '';
            divTextHelp.style.top = `-${divTextHelp.getBoundingClientRect().height}px`;
        }

        const itemIconInner = target.querySelector('.problems-item__icon-inner');
        itemIconInner.style.opacity = '1';
    });

    problemsDivDesktop.addEventListener('mouseout', (e) => {
        const target = e.target.closest('.problems-item__icon');
        if(!target) return;
        const divTextHelp = target.querySelector('div');
        divTextHelp.style.visibility = 'hidden';
        divTextHelp.style.opacity = '.1';
        divTextHelp.style.bottom = '90px';
        divTextHelp.style.top = '';
        
        if(divTextHelp.matches('.problems-item-popup-1')){
            rotate(divTextHelp, '180');
        }else{
            rotate(divTextHelp, '0');
        }

        const itemIconInner = target.querySelector('.problems-item__icon-inner');
        itemIconInner.style.opacity = '0';
    });
};

export default showProblemsRound;