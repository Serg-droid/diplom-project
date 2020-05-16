import makeRequest from './makeRequest';

const setForms = () => {
    const   allForms = document.querySelectorAll('form'),
            submitButtons = document.querySelectorAll('.button');

    //блокируем все кнопки submit изначально
    submitButtons.forEach((btn) => {
        btn.disabled = true;
        btn.style.color = 'red';
    });

    //обработка ответа сервера на отправку данных
    const requestHandler = (msg) => {
        switch(msg){
            case 'get':
                console.log('Данные успешно отправлены');
                return;
            case 'error':
                console.log('Произошла ошибка при отправке данных');
                return;
            default:
                console.log(msg);
        }
    }

    //отправка данных с формы
    const sendForm = (form) => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const data = {};
            formData.forEach((val, key) => {
                data[key] = val;
            });

            makeRequest('../../server.php', 'POST', JSON.stringify(data))
                .then((response) => {
                    if(response.status !== 200){
                        throw new Error('response status not 200');
                    }
                    requestHandler('get');
                })
                .catch((error) => requestHandler('error'));
            const formInputs = form.querySelectorAll('input');
            formInputs.forEach(input => {
                input.value = '';
            });
        });
    };

    //проверка состояния формы
    const checkForm = (form) => {
        const   inputs = form.querySelectorAll('input'),
                button = form.querySelector('.button');

        const inputStates = [...inputs].reduce((acc, input) => {
            acc[input.classList] = false;
            return acc;
        }, {});
        
        inputs.forEach((input) => {
            input.addEventListener('input', () => {
                if(input.value === 'on'){
                    input.checked ? inputStates[input.classList] = true : inputStates[input.classList] = false;
                }else if(input.value){
                    inputStates[input.classList] = true;
                }else{
                    inputStates[input.classList] = false;
                }

                //проверяем, все ли инпуты в форме заполнены должным образом
                //если да -- разблокируем кнопку отправки формы 
                if(Object.values(inputStates).every((state) => state === true)){
                    button.disabled = false;
                    button.style.color = '#fff';
                }else{
                    button.disabled = true;
                    button.style.color = 'red';
                }
            });
        });

    };

    //вешаем обработчики на все формы
    allForms.forEach((form) => {
        checkForm(form);
        sendForm(form);
    });
};

export default setForms;