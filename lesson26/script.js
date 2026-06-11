/* let string = "Мой номер телефона: +7 (999) 123-45-67. Номер телефона моего друга: +7 (987) 654-32-10.";
let ex = /\+\d\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}/g;
let phoneNumbers = string.match(ex);

console.log(phoneNumbers); */

// let regex = /\d{2}[-:]\d{2}/g;
// document.writeln("Заврак в 09:00. Ужин в 21-30".match(regex));


/* 
\D - все кроме цифр
\S - не пробел
\W - все кроме цифр, букв (латиница) и символов подчеркивания
*/
// let regexp = /\W/g;
// document.writeln(str.match(regexp) + "<br>");

// document.writeln("Hello, Java !".match(/\bJava\b/) + "<br>");
// document.writeln("Hello, Java!".match(/\bJava!/) + "<br>");
// document.writeln("Hello, JavaScript!".match(/\bJavaScript\b/) + "<br>");

// document.writeln("1 23 456 78".match(/\b\d{2}\b/g) + "<br>");
// document.writeln("12-,34,56".match(/\b\d{2}\b/g) + "<br>");
// document.writeln("1 23 456 78".match(/\d{2}/g) + "<br>");

// document.writeln("Завтрак в 09:00 в комнате 123:456.".match(/\b\d{2}:\d{2}\b/g));
// let regexp = /[\p{Alpha}\p{Nd}]/gu;
// let regexp = /[\p{L}\p{N}]/gu;
// document.writeln(str.match(regexp) + "<br>");

/* 
^ - начало строки (перед последовательностью ничего не должно быть)
$ - конец строки (после последовательностью ничего не должно быть)
*/

// let html = "909";
// let exp = /^\d{3}$/;
// document.writeln(html.match(exp) + "<br>");

// function capitalize(st){
//     return st.replace(/^[а-я]/, s => s.toUpperCase());
//     // return st.replace("н", "H");
// }

// console.log(capitalize("сколько слов"));

/* Количество повторений
+ => от 1 до бесконечности {1,}
? => от 0 до 1 {0,1}
* => от 0 до бесконечности {0,}
*/

// let st = "+7(903)-123-45-67";
// document.writeln(st.match(/\d+/g) + "<br>");
// document.writeln("100 10 1".match(/\d0*/g) + "<br>");
// document.writeln("10, +23, -8, 5".match(/[+-]?\d+/g) + "<br>");
// document.writeln("0 1 12.345 7890".match(/\d+\.\d+/g) + "<br>");

//  document.writeln("..Привет!... Как дела?.....".match(/\.{3,}/g));

// function extractLinks(text){
//     let regex = /https?:\/\/[\w.]+/g;
//     return text.match(regex) || [];
// }

// console.log(extractLinks("<a href='https://htmlbook.ru'> и <a href='https://webref.ru'>"));


// function validateEmail(email){
//     // let regexp = /^[a-z0-9_%+.-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
//     let regexp = /^[^\s]+@[^\s]+\.[^\s]{2,}$/i;
//     return regexp.test(email);
// }

// console.log(validateEmail("user@example.com"));

// let st = `JavaScript
// ssddff
// javascript
// JAVASCRIPT`;
// let mas = st.match(/^\w+/gm)
// console.log(mas);
// mas.map((el) => console.log(el));


// let re = /CS.3/;
// document.writeln("Стандарт CSS3".match(re) + "<br>");
// document.writeln("Сталь CS-3".match(re) + "<br>");
// document.writeln("CS 3".match(re) + "<br>");

// let st = "Hello\nworld";
// console.log(st);
// let exp = /Hello.world/s;
// console.log(exp.test(st));

// let regexp = /html|css|java(script)?/gi;
// let st = "Сначала появился язык Java, затем HTML, потом JavaScript";
// document.writeln(st.match(regexp));

// let html = `
//     <b>my text</b>
//     <img src="222.jpg">
//     <span>else</span>
//     <img src="dfsdf222.png">
//     <img src="img.png">
//     <img src="uio.gif">
// `;

// let ex = /\w+\.(jpg|jpeg|png|bmp|gif)/ig;
// document.writeln(html.match(ex));

// function validatePhoneNumber(phoneNumber){
//     let phoneRegex = /^(\+7|8)?\d{10}$/;
//     return phoneRegex.test(phoneNumber);
// }

// let phone = "+79123456789";
// // let phone = "89123456789";
// // let phone = "9123456789";
// if(validatePhoneNumber(phone)){
//     console.log("Номер телефона валиден!");
// } else{
//    console.log("Номер телефона не валиден!"); 
// }

// let regex = /java(script)?|php|c(\+{2})?/gi;
// // let regex = /\w+(\++)?/gi;
// let st = "Java, JavaScript, PHP, C, C++++";
// document.writeln(st.match(regex));  // Java,JavaScript,PHP,C, C++