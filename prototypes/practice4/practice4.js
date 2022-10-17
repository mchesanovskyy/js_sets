// шукаємо елемент, де id=btnSubmit
let submitButton = document.getElementById('btnSubmit');

// підписуємо функцію btnSubmitOnClick на подію 'click'
// для елементу btnSubmit.
submitButton.addEventListener("click", btnSubmitOnClick);

// Функція - ізольована частина коду, яка виконуватиметься
// тільки при зверненні до неї за назвою. 
// Синтаксис виклику ф-ції: btnSubmitOnClick();
// В цьому випадку код з ф-ції викликатиметься кожного разу 
// при настисканні на кнопку.  
function btnSubmitOnClick() {
     // todo: поле для виконання практичної роботи 
}