const loadRepairTypesData = () => {
    fetch('../../db/db.json')
        .then(response => {
            if(response.status !== 200) {
                throw new Error(`Что-то пошло не так: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => dataHandler(data))
        .catch((err) => console.log(err));

    const dataHandler = (data) => {
        const   navList = document.querySelector('.nav-list-popup-repair'),
                contentTable = document.querySelector('.popup-repair-types-content-table'),
                headDate = document.querySelector('.popup-repair-types-content__head-date'),
                switchInner = document.getElementById('switch-inner');

        headDate.textContent = data[0].date;
        data = data.slice(1);
        navList.innerHTML = '';
        contentTable.innerHTML = '';

        const fillContent = (priceList) => {
            const contentList = document.createElement('table');
            contentList.classList.add('popup-repair-types-content-table__list');
            const tBody = document.createElement('tbody');
            for(const priceItem of priceList){
                const tr = document.createElement('tr');
                tr.classList.add('mobile-row');

                const repairTypesName = document.createElement('td');
                repairTypesName.classList.add('repair-types-name');
                repairTypesName.textContent = priceItem.typeService;

                const repairTypesValue1 = document.createElement('td');
                repairTypesValue1.classList.add('repair-types-value');
                repairTypesValue1.textContent = priceItem.units;

                const repairTypesValue2 = document.createElement('td');
                repairTypesValue2.classList.add('repair-types-value');
                repairTypesValue2.textContent = priceItem.cost;

                tr.append(repairTypesName);
                tr.append(repairTypesValue1);
                tr.append(repairTypesValue2);
                tBody.append(tr);
            }

            contentList.append(tBody);
            contentTable.append(contentList);
        };

        for(const service of data){
            //обработка табов
            const button = document.createElement('button');
            button.classList.add('button_o');
            button.classList.add('popup-repair-types-nav__item');
            button.textContent = service.title;

            navList.append(button);

            //наполнение контента
            const priceList = service.priceList;
            fillContent(priceList);
        };

        navList.children[0].classList.add('active');
        switchInner.textContent = data[0].title;

        navList.addEventListener('click', (e) => {
            const target = e.target;
            if(!target.matches('.popup-repair-types-nav__item')){
                return;
            }
            const index = [...navList.children].indexOf(target);
            const activeButton = navList.querySelector('.active');
            activeButton.classList.remove('active');
            target.classList.add('active');

            switchInner.textContent = data[index].title;
            const tappedList = contentTable.children[index];
            tappedList.scrollIntoView({ block: 'start', behavior: 'smooth' });
        });
    };
};

export default loadRepairTypesData;