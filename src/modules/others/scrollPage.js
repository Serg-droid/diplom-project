const scrollPage = () => {
    const   menuLinks = document.querySelectorAll('.menu-link'),
            buttonFooter = document.querySelector('.button-footer');

    menuLinks.forEach((link) => {
        if(link.matches('.link-popup-repair, .no-overflow')) return;
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const   elemId = link.href.split('#')[1],
                    elem = document.getElementById(elemId);
            
            elem.scrollIntoView({ block: 'start', behavior: 'smooth' });
        });
    });

    buttonFooter.addEventListener('click', (e) => {
        const link = buttonFooter.querySelector('a');
        e.preventDefault();
        const   elemId = link.href.split('#')[1],
                elem = document.getElementById(elemId);
        
        elem.scrollIntoView({ block: 'start', behavior: 'smooth' });
    });

};

export default scrollPage;