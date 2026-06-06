"use strict"
// let sum = 0;
// let count = -1;
// do{
//     n = +prompt("Введите число"); // 4 9 3
//     sum += n;
//     count++;
//     if(max < n){
//         max = n;
//     }
// }while(n !=0);
// // document.writeln(sum);
// document.writeln("Среднее арифметическое"+ sum / count + "<br>");
// console.log("sum:", sum);
// console.log("count:" , count);
//document.writeln("MAX: " + max);


// let n = +prompt("Введите число"); // 4
// let max = n; // 4
// let min = n; // 4
// let sum = n;
// let count = 0;
// while (n != 0) {
//     n = +prompt("Введите число"); // 5 1 0
//     sum += n; // sum = sum + n
//     count++;
//     if (max < n && n != 0) {
//     max = n;
//     }
//     if(n < min && n != 0){
//     min = n;
//     }
// }
// document.writeln("MAX: " + max + "<br>");
// document.writeln("MIN: " + min + "<br>");
// console.log("sum:", sum);
// console.log("count:", count);
// document.writeIn("Среднее арифметическое: " + (sum / count).toFixed(2) + "<br>");



// let res = 1;
// do{
//     let n = +prompt("Введите число"); // 5 2 0 -7

//     if(n < 0){
//     break;
//     }

//     if(n == 0){
//     continue;
//     }
// } while(true);

// console.log("Произведение:", res);



// let i = 0;
// do{
//     if(i == 6){  //6 == 6
//     break;
//     }
//     if(i = 3){  // 5 == 3
//         i++; // 4
//         continue;
//     }
//     document.writeIn(i + " ");
//     i++; // 6
// } while(i < 10);


// let res = 1;
// do{
//     let num = prompt("Введите число");
//     if(num == 0){
//     break;
//     }else{
//     res *= num;
//     }
// }while(true);
// console.log("Произведение:", res);



// let res = 1;
// let num;
// do{
//     num = prompt("Введите число");
//     if(num != 0){
//         continue;
//     }
//     res *= num;
// }while(num != 0);
// console.log("Произведение:", res);


// for(цикл со счетчиком)

// for(инициализация_переменной; проверка_условия;
// изменение_переменной){
//      тело_цикла;
// }

// for(let i = 1; i < 6; i++){
//     document.writeln(i + "<br>");
// }

// let i = 1;
// while(i < 6){
//     document.writeIn(i + "<br>");
//     i++;
// }



// for(let i = 1; i < 12; i++){
//     if(i == 3){
//         continue;
//     }
//     if(i==6){
//         break;
//     }
//     document.writeln(i + "<br>");
// }


// let n = prompt("n = ");
// let sum = 0;
// let count = 0;

// for(let i = 0; i < n; i++){
//     let num = +prompt("- > ");
//     document.writeln(num + "<br>");
//     sum+= num;
//     if(num != 0){
//         count++;
//     }
// }
// console.log(sum);
// console.log(count);
// document.writeIn("Среднее арифметическое: " + (sum / count).toFixed(2) + "<br>");


// let i = 1;
// for(; ;) {
//     if(i == 7){
//         break;
//     }
//     document.writeIn(i + "<br>");
//     i++;
// }


// for ( var i = 1; i < 6; i++) {
//     document.writeIn( i + "<br>");
// }
// console.log(1);


// Вычислить сумму четных чисел и произведение нечетных чисел в заданном диапазоне.

// let start = +prompt("Введите начало диапазона");
// let end = +prompt("Введите конец диапазона");
// let sum = 0;
// let res = 1;
// for (let i = start; i < end; i++) {
//     if (i % 2 == 0) {
//     sum += i;
//     } else {
//     res *= i;
//     }
// }

// document.writeln("Сумма чётных: " + sum + "<br>");
// document.writeln("Произведение нечётных: " + res);

// let ch = 987654321;
// document.writeln("Исходное число: " + ch + "<br>");
// for (let i = 1; ; i*=10 ) {
//     let res = parseInt(ch / i);
//     if (res == 0) {
//     break;
//     }
//     document.writeln(res % 10);
// }


// let start = 5;
// let end = 30;
// let sum = 0;
// for (let i = start; i <= end; i++) {
//     console.log(i);
//     if (i % 3 == 0) {
    
//     sum += i
//     }
// }

// document.writeln("сумма:" + sum);


// let a;
// let start = 5;
// let end = 30;
// let sum = 0;
// for (let i = start; i <= end; i++) {    // 31 <= 30
//     if (i % 3 == 0) {
//     console.log(i);
//     // sum += i
//     }
// }

// document.writeln("cyмма:" + sum);