// let product = 1;

// for (let i = 10; i <= 30; i++) {
//     if (i % 2 !== 0) {
//         product *= i;
//     }
// }

// document.writeln("Произведение нечётных чисел от 10 до 30: " + product + "<br>");


let sum = 0;
let count = 0;
let num;

do {
    num = +prompt("Введите число (0 для выхода):");
    
    if (num !== 0) {
        sum += n;
        count++;
        document.writeln(num + "<br>");
    }
    
} while (num !== 0);

let average = sum / count;
document.writeln("Среднее арифметическое: " + average);