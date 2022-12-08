const FORM_INPUT_ERROR_CLASS = "form-input-error";
const VALUE_IS_REQUIRED_ERROR_MSG = "Це обов’язкове поле. Будь ласка, введіть значення";
const YEAR_OF_BIRTH_TOO_BIG_ERROR_MSG = "Рік народження НЕ може бути більшим за поточний рік";

// шукаємо елемент, де id=btnSubmit
let submitButton = document.getElementById('btnSubmit');

// підписуємо функцію на подію 'click'
// для елементу btnSubmit.
submitButton.addEventListener("click", validateAndProcessOnBtnSubmitClick);

// ф-ція яка виконуватиметься при натисканні кнопки 
function validateAndProcessOnBtnSubmitClick() {
    clearErrorLabels(this);

    let isValid = validateForEmptyInputs(this);
    isValid &&= validateYearOfBirth(this);

    if (isValid) {
        processUserDetails();
    }

    return isValid;
}

// перевірити чи всі поля введені 
// повернути true, якщо всі поля введені
// повернути false, якщо хоча б одне значення було пропущено
function validateForEmptyInputs(btnSubmitElement) {

    let txtLastNameElem = document.getElementById('txtLastName');
    let lastName = txtLastNameElem.value;

    let isValid = true;

    if (lastName == '') {
        showErrorForElement(txtLastNameElem, VALUE_IS_REQUIRED_ERROR_MSG);
        isValid == false;
    }

    return isValid;
}

// перевірити Рік народження на дотримання додаткових вимог 
// повернути true, якщо всі вимоги виконано
// повернути false, якщо хоча б одна вимога НЕ була виконана
function validateYearOfBirth(btnSubmitElement) {
    // Ваш код... 
    let currentYear = new Date().getFullYear();
    return true;
}

function processUserDetails() {
    // Ваш код...
}

function clearErrorLabels(btnSubmitElement) {
    btnSubmitElement.closest('form')
        .querySelectorAll('.form-group')
        .forEach(formGroupElement => clearFormGroupError(formGroupElement));
}

function clearFormGroupError(formGroupElement) {
    const errorLabel = formGroupElement.querySelector('.lbl-error-message');
    errorLabel.innerHTML = '';

    const formInput = formGroupElement.querySelector('.form-input');
    formInput.classList.remove(FORM_INPUT_ERROR_CLASS);
}

function showErrorForElement(element, message) {
    const formInputContainer = element.closest('.form-group');
    const errorLabel = formInputContainer.querySelector('.lbl-error-message');
    errorLabel.innerHTML = message;
    element.classList.add(FORM_INPUT_ERROR_CLASS);
}