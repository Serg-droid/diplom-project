const scrollPage = () => {
    const   menuLinks = document.querySelectorAll('.menu-link'),
            buttonFooter = document.querySelector('.button-footer');

    menuLinks.forEach((link) => {
        link.addEventListener('click', () => {
            const   elemId = link.href.split('#')[1],
                    elem = document.getElementById(elemId);
            
            elem.scrollIntoView({ block: 'start', behavior: 'smooth' });
        });
    });

};

export default scrollPage;