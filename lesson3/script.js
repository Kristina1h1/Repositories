// if(5==5){
//     console.log("TRUE");
// }else{
//     console.log("FALSE");
// }
// if(5 == 3 && 5 > 2){     //TRUE && true => true
//     console.log("TRUE"); // false && true => false 
// }else{
//     console.log("FALSE");
// }


// if(5 > 2 || 5 == 5){     //TRUE || true => true
//     console.log("TRUE"); // false || true => true
// }else{                   // true || false => true
//     console.log("FALSE");// false || false => false
// }


// let age = prompt("Введите возраст");
// if(age >=18 && age < 70){
//     alert("Вы можете получить права");
// }else {
//     alert("Права не давать");
// }


// let age = prompt("Введите возраст");
// if(age < 18 || age > 69){
//     alert("Права не давать");
// }else {
//     alert("Вы можете получать права");
// }


// let a = prompt("Введите первую сторону", 30);
// let b = prompt("Введите вторую сторону", 20);
// let c = prompt("Введите третью сторону", 10);

// if(a==b && b==c){
//     alert("Треугольник равносторонний");
// }if (a==b || b==c || a==c){
//     alert("Треугольник равнобедренный");
// }if(a!=b || b!=c || a!=c){
//     alert("Треугольник разносторонний");
// } 


// console.log("HELLO");

// if("HELLO"){
//     console.log("true");
// }

// console.log(!!"HELLO");

// console.log(!(7==5))


// let ch = prompt("Введите количество ворон:", 5);
// if(ch>0 && ch < 10){
// if(ch==1){
//     alert(`На ветке ${ch} ворона`);
// }else if(ch == 2 || ch == 3 || ch == 4){
//     alert(`На ветке ${ch} вороны`);
// }else{
//     alert(`На ветке ${ch} ворон`);
// }
// }else{
//     alert("Недопустимое значение");
// }


// switch(условие){
//     case значение_1:
//         код;
//     break;
//     case значение_2:
//         код;
//     break;
//     case значение_3:
//         код;
//     break;
//     default:
//         код;
// }





// let a = +prompt("Введите число"); //1
// switch(a){     //"1" === 1
//     case 1:
//         alert("Код 1");
//         break;
//         case 2:
//             alert("Дополнительный текст");
//             alert("Код 2");
//             break;
//         case 3:
//             alert("Код 3");
//             break;
//             default: 
//             alert("Я таких значений не знаю");
// }



// let a = +prompt("Введите результат '2+2'"); //1
// switch(a){     //"1" === 1
//     case 4:
//         alert("Верно");
//     break;
//     case 3:
//         alert("Верно");
//     case 5:
//         alert("Не верно");
//     break;
//     default:
//         alert("Я таких значений не знаю");
// }


// let error = 404;

// switch(error){
//     case 404:
//         console.log("Страницы не существует");
//         break;
//         case 200:
//             console.log("Запрос успешно обработан");
//         break;
//         case 500:
//             console.log("Ошибка сервера");
//         break;

//         default:
//         console.log("Неизвестная ошибка");
// }


// let error = +prompt("Введите код состояния HTTP:");
// let category = Math.floor(error / 100);

// switch(category) {
//     case 2: // 200-299
//         alert("Успешно (2xx)");
//         if(error === 200) {
//             alert("OK");
//         } else if(error === 201) {
//             alert("Создано");
//         }
//         break;

//     case 3: // 300-399
//         alert("Перенаправление (3xx)");
//         break;

//     case 4: // 400-499
//         alert("Ошибка клиента (4xx)");
//         if(error === 404) {
//             alert("Не найдено");
//         }
//         break;

//     case 5: // 500-599
//         alert("Ошибка сервера (5xx)");
//         if(error === 500) {
//             alert("Внутренняя ошибка сервера");
//         }
//         break;

//     default:
//         alert("Неизвестный код состояния");
// }

// let hour = +prompt("Введите час (0-23):");
// let time = Math.floor(hour / 6);

// switch (time) {
//     case 0:
//         if (hour >= 0 && hour <= 5)
//             alert("Ночь");
//         break;
//     case 1:
//         if (hour >= 6 && hour <= 11)
//             alert("Утро");
//         break;
//     case 2:
//         if (hour >= 12 && hour <= 17)
//             alert("День");
//         break;
//     case 3:
//         if (hour >= 18 && hour <= 23)
//             alert("Вечер");
//         break;
//         default:
//             alert("Некорректное время");
// }

// let day = "понедельник";

// switch(day){
//     case "суббота":
//     case "воскресенье":
//         alert("Выходной день");
//         break;
//     case "понедельник":
//     case "вторник":
//     case "среда":
//     case "четверг":
//     case "пятница":
//         alert("Это рабочий день");
//         break;
//     default:
//         alert("Некорректный день");
// }



// let m = +prompt ("Введите номер месяца");
// let n;

// switch(m){
//     case 1: n="Январь"; break;
//     case 2: n="Февраль"; break;
//     case 3: n="Maрт"; break;
//     default: n= "Неправильный ноемр месяца";
// }alert("Вы ввели: " + n);


// let month = +prompt("Введите номер месяца (1–12)");
// let n;
// switch (month) {
//     case 12:
//     case 1:
//     case 2:
//         n = "Зима";
//         break;
//     case 3:
//     case 4:
//     case 5:
//         n = "Весна";
//         break;
//     case 6:
//     case 7:
//     case 8:
//         n = "Лето";
//         break;
//     case 9:
//     case 10:
//     case 11:
//         n = "Осень";
//         break;
//     default:
//         n = "Ошибка ввода данных";
// }
// alert("Время года: " + n);


// let operator = prompt("Действия: +, -, *, /, %:");
// let num1 = +prompt("Введите первое число:");
// let num2 = +prompt("Введите второе число:");

// switch (operator) {
//     case "+":
//         alert("Сумма: " + (num1 + num2));
//         break;
//     case "-":
//         alert("Разность: " + (num1 - num2));
//         break;
//     case "*":
//         alert("Произведение: " + (num1 * num2));
//         break;
//     case "/":
//         if (num2 == 0) {
//             alert("Делить на 0 нельзя");
//         } else {
//             alert("Частное: " + (num1 / num2));
//         }
//         break;
//     case "%":
//         if (num2 == 0) {
//             alert("Делить на 0 нельзя");
//         } else {
//             alert("Остаток от деления: " + (num1 % num2));
//         }
//         break;
//     default:
//         alert("Я такого оператора не знаю");
// }