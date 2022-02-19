function add(num1, num2 = 0) {
    // option 1 without num 2
    // num2 = num2 || 0;

    //option 2 without num 2
    // if (num2 == undefined) {
    //     num2 = 0;
    // }
    const total = num1 + num2;
    return total;
}
const result = add(15);
console.log(result);

function fullName(first, last = 'Chowdhury') {
    const name = first + ' ' + last;
    return name;
}

const myName = fullName('Mahin');
console.log(myName);
const herName = fullName('Rubaiyat', 'Khan');
console.log(herName);
