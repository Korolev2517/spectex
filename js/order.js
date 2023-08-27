//обращаемся к полям формы при нажатии на submit
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('callback');
    form.addEventListener('submit', formSend);

//создаем асинхронную функцию для отправки формы, в которой описывем поведение в 2 случаях:
//1.Случай удачной отпавки формы (formValidate) где нет ошибок и все поля заполены
//2.Случай неудачной отправки формы где есть ошибки и не все поля заполнены
    async function formSend(send) {
        send.preventDefault();

        let error = formValidate(form);

        if (error === 0) {
            console.log(input__field.value)
        } else {
            alert('Заполните обязательные поля');
        }
    }

    function formValidate() {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains('_email')) {
                if (emailTest(input)) {
                    formAddError(input);
                    error++;
                }
            } else {
                if (input.value === '') {
                    formAddError(input);
                    error++;
                }
            }
        }
        return error;
    }
    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }
    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
});


