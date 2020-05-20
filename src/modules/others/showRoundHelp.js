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
            const divClass = divTextHelp.classList.value.split(' ').join('.');
            const style = document.createElement('style');
            style.textContent = `
            .${divClass}::before {
                transform: rotate(180deg);
            }
            `;
            document.head.appendChild(style);
            divTextHelp.style.bottom = '';
            divTextHelp.style.top = '90px';
        }

        const itemIconInner = target.querySelector('.formula-item__icon-inner');
        itemIconInner.style.opacity = '1';
    });

    formulaDivDesktop.addEventListener('mouseout', (e) => {
        const target = e.target.closest('.formula-item__icon');
        if(!target) return;
        const divTextHelp = target.querySelector('div');
        divTextHelp.style.visibility = 'hidden';
        divTextHelp.style.opacity = '.1';
        divTextHelp.style.bottom = '90px';
        divTextHelp.style.top = '';
        const divClass = divTextHelp.classList.value.split(' ').join('.');
        const style = document.createElement('style');
        style.textContent = `
        .${divClass}::before {
            transform: rotate(0deg);
        }
        `;
        document.head.appendChild(style);

        const itemIconInner = target.querySelector('.formula-item__icon-inner');
        itemIconInner.style.opacity = '0';
    });
};

export default showRoundHelp;