//объекты из меню выбора материалов
let sand_1 = {
    id: 1,
    price: 321,
    value: 1.46,
};
let sand_2 = {
    id: 2,
    price: 352,
    value: 1.42,
};
let sand_3 = {
    id: 3,
    price: 449,
    value: 1.61,
};
let rubble_1 = {
    id: 4,
    price: 830,
    value: 1.43,
};
let rubble_2 = {
    id: 5,
    price: 830,
    value: 1.43,
};
let rubble_3 = {
    id: 6,
    price: 1315,
    value: 1.41,
};
let rubble_4 = {
    id: 7,
    price: 1315,
    value: 1.41,
};
let rubble_5 = {
    id: 8,
    price: 1315,
    value: 1.41,
};
let rubble_6 = {
    id: 9,
    price: 1300,
    value: 1.365,
};
let gravel_1 = {
    id: 10,
    price: 412,
    value: 1.745,
};
let gravel_2 = {
    id: 11,
    price: 500,
    value: 1.62,
};
let expanded_clay_1 = {
    id: 12,
    price: 2450,
    value: 0.52,
};
let expanded_clay_2 = {
    id: 13,
    price: 2400,
    value: 0.52,
};
let expanded_clay_3 = {
    id: 14,
    price: 2300,
    value: 0.52,
};
let screening_gravel_1 = {
    id: 15,
    price: 850,
    value: 1.32,
};
let screening_gravel_2 = {
    id: 16,
    price: 950,
    value: 1.55,
};
let black_soil_1 = {
    id: 17,
    price: 500,
    value: 0.95,
};
let black_soil_2 = {
    id: 18,
    price: 1200,
    value: 0.90,
};
let black_soil_3 = {
    id: 19,
    price: 1100,
    value: 0.90,
};
let clay = {
    id: 20,
    price: 280,
    value: 1.60,
}

const materials = {
    "sand_1": sand_1,
    "sand_2": sand_2,
    "sand_3": sand_3,
    "rubble_1": rubble_1,
    "rubble_2": rubble_2,
    "rubble_3": rubble_3,
    "rubble_4": rubble_4,
    "rubble_5": rubble_5,
    "rubble_6": rubble_6,
    "gravel_1": gravel_1,
    "gravel_2": gravel_2,
    "expanded_clay_1": expanded_clay_1,
    "expanded_clay_2": expanded_clay_2,
    "expanded_clay_3": expanded_clay_3,
    "screening_gravel_1": screening_gravel_1,
    "screening_gravel_2": screening_gravel_2,
    "black_soil_1": black_soil_1,
    "black_soil_2": black_soil_2,
    "black_soil_3": black_soil_3,
    "clay": clay,

}
//автоматическая подставновка цены из выбранного объекта
material_id.addEventListener("change", ({target}) => {
    if(materials.hasOwnProperty(target.value) === false) {
        return;
    }
    const obj = materials[target.value];
    prises.value = obj.price;
    density.value = obj.value;

//преобразование тонн в кубометры
    function volumeChange() {
        let changeTons = document.getElementById('tons').value;
        document.getElementById('value').value = (changeTons / density.value).toFixed(2);
    }
    volumeChange();
    tons.addEventListener("input", function volumeChange() {
        let changeTons = document.getElementById('tons').value;
        document.getElementById('value').value = (changeTons / density.value).toFixed(2);
    });
//преобразование кубометров в тонны
    function tonsChange() {
        let changeValue = document.getElementById('value').value;
        document.getElementById('tons').value = (density.value * changeValue).toFixed(2);
    }
    tonsChange();
    value.addEventListener("input", function tonsChange() {
        let changeValue = document.getElementById('value').value;
        document.getElementById('tons').value = (density.value * changeValue).toFixed(2);
    });
});

function handleFormSubmit(event) {
    event.preventDefault();
    console.log('Отправка');

}
//создаем переменную в которой будет храниться значение идентификатора (id) из HTML с помощью метода .getElementById
let applicantForm = document.getElementById('calculator');
//указываем, что бы отслеживалось событие submit (отправка формы), и в случае его срабатывания применялась функция блокирующая дефолтное поведения браузера
applicantForm.addEventListener('submit', handleFormSubmit);

//создаем функцию для умножения количества материала на его цену
function mult(a, b) {
    return a * b;
}
//создаем константы в которые будут помещены:
//1. введенное пользователем количество материала в поле инпута
//2. цена материала в поле инпута
//3. записываем в константу кнопку "посчитать" для последующей возможности повешать на событие "клик" функцию
//4. записываем в константу абзац для вывода результата
const inputANode = document.querySelector('.quantity-value');
const inputBNode = document.querySelector('.prise');
const btnResultNode = document.querySelector('.js-btn-result');
const outputNode = document.querySelector('.js-output');
/*вешаем на кнопку "посчитать" отслеживение события "клик", и функцию, которая будет записывать в константы
введенные в поля количества и цены значения,
а затем применять функцию для их умнодения заняся результат в константу*/
btnResultNode.addEventListener('click', function () {
    const a = Number(inputANode.value);
    const b = Number(inputBNode.value);
    const result = mult (a, b);
//в абзаце для вывода результата выводим итоговую цифру
    outputNode.value = result;
})