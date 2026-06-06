// document.writeln("<p>Текст <br> выведен <b> в окно браузера<b></p>");
// document.writeln("img src='1.jpg' alt='Еще текст'");


//цикл do...while (цикл с постусловием)
// do{
//     тело цикла (действие);
// }while(условие);
// Итерация - один шаг цикла

// let i=0; //счетчик
// do{
//     document.writeln("Это номер: "+ i + "<br>");
//     i++;
// }while(i<5);


// let i=1;
// do{
//     document.writeln("Квадрат "+ i + "равен " + i ** 2 + "<br>");
//     i++;
// }while(i<8);


// let i=0;
// do{
//     document.writeln("Это номер: "+ i + "<br>");
//     i = i+5;
// }while(i<=25);



// let start = +prompt("Введите начало диапазона:");
// let end = +prompt("Введите конец диапазона:");
//     let i = start;
//     let sum = 0;
//     do {
//         if(i % 2 != 0){  // 1 % 2 // 1 % 2 == 1
//     // document.writeln(i + "<br>"); //1 3 5
//     sum = sum + i; //1 = 0+ 1
//     } 
//     i++;
// }while(i<=end); //1<=5
// document.writeln(" Сумма целых нечетных чисел: " + sum + "<br>");



// let a = 5; // глобальная переменная

// if( a>0 && a<10){
//     let b = 6; // локальная переменная
//     document.writeln(a);
// }
// document.writeln(b);


// while(условие) {
//     тело цикла (действие);
// }


// let i = 0;                                          // 1. Инициализация
// while (i < 5) {                                     // 2. Проверка условия
//     document.writeln("Это номер: " + i + "<br>");   // 3. Действие
//     i++;                                            // 4. Изменение счетчика (шаг)
// }


// document.writeln("<br><br>");        // 1. Просто добавляет пустые строки

// let j = 0;                           // 2. Инициализация счетчика
// do {
//     document.writeln("Это номер: " + j + "<br>"); // 3. Действие (выполнится ПЕРВЫМ)
//     j++;                               // 4. Увеличиваем счетчик
// } while (j < 5);                       // 5. Проверка условия (происходит ПОСЛЕ)

// let count = prompt("Укажите количество звездочек");  // 1. Запрашиваем число у пользователя
// let i = 0;                                            // 2. Счетчик начинается с 0
// while(i < count){                                     // 3. Проверка: пока i меньше count
//     document.writeln("*");                             // 4. Выводим звездочку
//     i++;                                               // 5. Увеличиваем счетчик
// }


// let i = 1;
// do {
//     if (i % 3 !== 0){              
//         document.writeln(i + "<br>");
//     }
//     i++;
// } while (i <= 30);



// let start = 5;
// let end = 10;
// let res = 1;

// while (start <= end) {
//     // document.writeln(start + "<br>");
//     res = res * start;
//     start++;
// }
// document.writeln(res + "<br>");


// let i = 3;
// while (i) { // e
//     document.writeln(i + "<br>");
//     i--;
// }


// let n;
// do {
//     n = prompt("Введите целое число:");
//     document.writeln(n + "<br>");
// } while (n != 0);


// домашка 1
// Произведение нечётных чисел от 10 до 30
let product = 1;

for (let i = 10; i <= 30; i++) {
    if (i % 2 !== 0) { // если число нечётное
        product *= i;
    }
}

document.writeln("Произведение нечётных чисел от 10 до 30: " + product + "<br>");


// домашка 2
let sum = 0;
let count = 0;
let num;

do {
    num = +prompt("Введите число (0 для выхода):");
    
    if (num !== 0) {
        sum = sum + num;
        count = count + 1;
        document.writeln(num + "<br>");
    }
    
} while (num !== 0);

let average = sum / count;
document.writeln("Среднее арифметическое: " + average);