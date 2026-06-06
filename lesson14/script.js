// let mas = ["копеек", "копейка", "копейки", "- число за пределами диапазона"];
// let first = 1;
// let last = 199;
// let ch = prompt("Введите количество копеек", 5);
// console.log(ch, countKop(first, last, ch)(mas));

// function countKop(start, end, num) {
//     let n = num % 10;
//     let m = num % 100;

//     // let chislo;
//     // if (start < num && num <= end) {
//     //   chislo = n == 1 && m != 11 ? 1 : 2 < n && n <= 4 && !(12 <= m && m <= 14) ? 2 : 0;
//     // } else {
//     //   chislo = 3;
//     // }

//     // 1 <= 100 && 100 <= 99
//     let chislo = !(start <= num && num <= end) ? 3 
//     : n == 1 && m != 11 ? 1 
//     : 2 < n && n <= 4 && !(12 <= m && m <= 14) ? 2 
//     : 0;

//     return arr => arr[chislo];
//     }


// с отрицательными числами
//     let mas = ["копеек", "копейка", "копейки", "- число за пределами диапазона"];
// let first = -5;
// let last = 99;
// let ch = prompt("Введите количество копеек", 5);
// console.log(ch, countKop(first, last, ch)(mas));

// function countKop(start, end, num) {
//     if(num < 0)
//     num = (-1) * num
//     let n = num % 10;
//     let m = num % 100;

//      // let chislo;
//     // if (start < num && num <= end) {
//     //   chislo = n == 1 && m != 11 ? 1 : 2 < n && n <= 4 && !(12 <= m && m <= 14) ? 2 : 0;
//     // } else {
//     //   chislo = 3;
//     // }

//     // 1 <= 100 && 100 <= 99
//     let chislo = !(start <= num && num <= end) ? 3 : 
//     n == 1 && m != 11 ? 1 : 
//     2 <= n && n <= 4 && !(12 <= m && m <= 14) ? 2 : 0;

//     return arr => arr[chislo];
// }




let str = "I\'m a JavaScript \"programmer\"";
document.writeln(str + "<br>");
// document.writeln(str[2] + "<br>");


// str = str[2] + "y";
// document.writeln(str + "<br>");

// document.writeln(str.length + "<br>"); // 29


// document.writeln(str[6] + "<br>");
// document.writeln(str.at(6) + "<br>");
// document.writeln(str.at(-2) + "<br>");

// for(let ch of str){
//     console.log(ch);
// }


// let s = "Написать скрипт подсчитывающий количество каждой буквы русского алфавита в тексте";
// countLetters(s);

// function countLetters(st){
//     let letters = ["а", "б", "в"];
//     for(let i=0; i < letters.length; i++){ // ["a", "6", "B"]
//     let count = 0; // 0
//     for(let j=0; j < st.length; j++){ // let s = "Написать скрипт подсчитывающий количество каждой буквы русского алфавита в тексте";
//     if(st[j] == letters[i]){ // B == B
//     count++; // 6
//     }
//     }
//     document.writeln("Символ ' " + letters[i] + " ' встретился " + count + " раз<br>");
// }
// }





// let newStr = str.toLowerCase();
// document.writeln(newStr + "<br>"); // преобразование в верхний регистр

// document.writeln(str.toLowerCase() + "<br>"); // преобразование в нижний регистр

// document.writeln(str + "<br>");



//От пользователя требуется ввести имя, а скрипт должен первую букву имени перевести в верхний регистр.



// let n = prompt("Введите имя", "Bubu");
// alert(first(n));

// function first(st){
//     // let newStr = st.at(0).toUpperCase();
//     let newStr = st[0].toUpperCase();

//     for(let i=1; i < st.length; i++){
//     // newStr += st.at(i).toLowerCase();
//     newStr += st[i].toLowerCase();
//     }

//     return newStr;
// }



let str1 = "Я учу JavaScript. Мне нравится JavaScript";

str = str.concat(". ", str1);
document.writeln(str + "<br>");

let message = "*";
document.writeln(message.repeat(30) + "<br>");

// document.writeln(str.indexOf("JavaScript") + "<br>"); // возвращает индекс, на котором находится подстрока или "-1" если ничего не найдено

// document.writeln(str.indexOf("JavaScript", 7) + "<br>");
// document.writeln(str.lastIndexOf("JavaScript") + "<br>"); // последнее совпадение




//От пользователя требуется ввести адрес электронной почты, а скрипт должен проверять корректность ввода (наличие @).


// let email;

// do{
//     email = prompt("Введите email:", "test");
//     if(email.indexOf("@") == -1){
//     alert("Некорректно. Повторите операцию");
//     } else {
//     break;
//     }
// } while(true);

// alert("Спасибо за сотрудничество");




// do{
//     email = prompt("Введите email:", "test");
//     if(email.indexOf("@") == -1){
//     alert("Некорректно. Повторите операцию");
//     continue;
//     }
//     break;

    
// } while(true);

// alert("Спасибо за сотрудничество");




document.writeln(str.includes("JavaScript") + "<br>");
document.writeln(str.startsWith("JavaScript", 6) + "<br>");
document.writeln(str.endsWith("JavaScript", 47) + "<br>");
document.writeln(str.length + "<br>");


ДЗ
//С помощью цикла посчитать сколько раз встречается последняя цифра в заданном числе. Например: let str = 53862635645635;