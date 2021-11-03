

let n = 19.99; // numbers
let s = '19.99' // string/text
let b = true // boolean = true/false

let u = undefined;
let nul = null;

let color = 'Red';

if (color !== 'Blue') {
    printMessage('Color is blue');
} else if (color === 'Red') {
    printMessage('There is a red button');
}
else if (color === 'Pink') {
    printMessage('Pink button');
}

switch (color) {
    case 'Blue': 
        printMessage('Color is blue');
        break;
    case 'Red': 
        printMessage('There is a red button');
        break;
    case 'Pink': 
        printMessage('Pink button');
        break;
    default:
        break;
}

printMessage('End');

