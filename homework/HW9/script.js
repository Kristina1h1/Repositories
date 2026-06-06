"use strict";
let arr = [];
for (let i = 0; i < 10; i++) {
    let num = prompt(`Введите число ${i + 1}:`);
    arr.push(Number(num));
}
document.writeln("Исходный массив: " + arr + "<br>");

let max = arr[0];
let maxIndex = 0;

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
        maxIndex = i;
    }
}

document.writeln("MAX: " + max + "<br>");

for (let i = maxIndex; i > 0; i--) {
    arr[i] = arr[i - 1];
}
arr[0] = max;

document.writeln("Результат: " + arr);


// с учителем дз
// <script>
//     let mas = [];
//     let n;

//     for (let i = 0; i < 10; i++) {
//         n = +prompt("Введите элемент массива!");
//         mas.push(n);
//         document.writeln(mas[i] + " ");
//     }

//     let max = mas[0];
//     for (let i = 0; i < 10; i++) {
//         if (max < mas[i]) {
//             max = mas[i];
//         }
//     }

//     document.writeln("<br>");
//     document.writeln("Максимальное значение ", max);

//     let ind = mas.indexOf(max);
//     console.log("ind", ind);

//     // Удаляем элемент с индексом ind (1 элемент)
//     mas.splice(ind, 1);
//     // Добавляем максимальный элемент в начало
//     mas.unshift(max);
    
//     document.writeln("<br>Массив: " + mas);
// </script>