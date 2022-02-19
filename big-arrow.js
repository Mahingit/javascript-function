const add = (num1, num2) => num1 + num2;
const sum = add(22, 90);
console.log(sum);

const multiply = (num1, num2, num3) => num1 * num2 * num3;
const result = multiply(4, 12, 3);
console.log(result);

const tenTimes = (num) => num * 10;
const tenTimesOf = tenTimes(5);
console.log(tenTimesOf);

const getName = () => 'Mahin Islam';
const output = getName();
console.log(output);

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    const output = result * 5;
    return output;
}
const mathOutput = doMath(4, 3);
console.log(mathOutput);