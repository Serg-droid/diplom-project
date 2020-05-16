const setInputNameMask = () => {
    const allInputsNames = document.querySelectorAll('input[name=name]');

    allInputsNames.forEach((input) => {
        input.addEventListener('input', () => {
            input.value = input.value.replace(/[^a-zа-яё\s]/gi, '');
        });
    });
};

export default setInputNameMask;