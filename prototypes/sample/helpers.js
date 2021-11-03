// ф-ція для отримання значення по id елементу
function getValueById(id) {
    return document.getElementById(id).value;
}

// ф-ція для встановлення значення по id елементу
// append = true вказує, що потрібно доповнити поточне значення 
// замість його перезапису
function setValueById(id, value, append = false) {
    let element = document.getElementById(id);
    element.value = append
        ? element.value + value
        : value;
}

function printMessage(value, append = true, newLine = true) {
    setValueById('txtResult', newLine ? `${value}\n` : value, append);
}