const setFaqAccordeon = () => {
    const   faq = document.getElementById('faq'),
            accordion = faq.querySelector('.accordion'),
            allElems = accordion.querySelectorAll('li > h2'),
            allMessages = accordion.querySelectorAll('li > .msg');

    allElems.forEach((elem, index) => {
        elem.addEventListener('click', () => {
            if(elem.matches('.msg-active')){
                allMessages[index].style.cssText = `   max-height: 0;
                                                        opacity: 0;
                                                        -webkit-transform: translate(0,50%);
                                                        transform: translate(0,50%);`;
                elem.classList.remove('msg-active');
                return;
            }

            allMessages.forEach((msg) => {
                msg.style.cssText = `   max-height: 0;
                                        opacity: 0;
                                        -webkit-transform: translate(0,50%);
                                        transform: translate(0,50%);`;
            });

            elem.classList.add('msg-active');

            const msgToShow = allMessages[index];
            msgToShow.style.cssText = ` overflow: hidden;
                                        max-height: 100%;
                                        opacity: 1;
                                        transform: translate(0,0);`;
        });
    });
};

export default setFaqAccordeon;