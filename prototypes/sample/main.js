// let phoneNumbers = ['0954443322', '0984443355'];
// phoneNumbers.push('0954447777');

let phoneStr = '0954441111,0954443333,0954447777;g@gmail.com,g2@gmail.com';
let parts = phoneStr.split(';');
let arrayOfArrays = [];
for (const line of parts) {
    let array = line.split(',');
    arrayOfArrays.push(array);
}

let first = arrayOfArrays[0][1];
printMessage(first);

function forEachArray(array){
    let str = array.join(' AND ');
    printMessage(str);

}

arrayOfArrays.forEach(forEachArray);

arrayOfArrays.forEach((array, index) => {
    let str = array.join(` ${index} `);
    printMessage(str);
});

// for (let index = 0; index < arrayOfArrays.length; index++) 
// {
//     const array = arrayOfArrays[index];
//     let str = array.join(' AND ');
//     printMessage(str);    
// }