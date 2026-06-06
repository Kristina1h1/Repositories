/* let str = "I\'m a JavaScript \"programmer\"";
let str1 = "Я учу JavaScript. Мне нравится JavaScript";

str = str.concat(". ", str1);
document.writeln(str + "<br>");

let message = "*";
document.writeln(message.repeat(30) + "<br>");
document.writeln(str.indexOf("JavaScript") + "<br>");

// console.log(str.split(" ", 3));
// console.log(str.split("."));
// console.log("05-04-2026".split("-"));

// let arr = str.split("JavaScript");
// console.log(arr);
// let st = arr.join("C++");
// document.writeln(st + "<br>");
// document.writeln(message.repeat(30) + "<br>");
// // let text = st.replace("C++", "JavaScript");
// let text = st.replaceAll("C++", "JavaScript");
// document.writeln(text + "<br>");



document.writeln(str.slice(0, 3) + "<br>");
document.writeln(str.slice(6) + "<br>");
document.writeln(str.slice(-23, -10) + "<br>");
document.writeln(str.slice(3, 0) + "<br>");
document.writeln(message.repeat(30) + "<br>");

document.writeln(str.substring(0, 3) + "<br>");
document.writeln(str.substring(6) + "<br>");
document.writeln(str.substring(3, 0) + "<br>"); */



/*  задача 1 // background-color => backgroundColor
// list-style-type => listStyleType

let style = prompt("Введите свойство CSS", "background-color");
alert(def(style));

function def(st){
    let arr = st.split("-");
    console.log(arr);
    for(let i=1; i < arr.length; i++){
    // arr[i] = arr[i].at(0).toUpperCase() + arr[i].slice(1);
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
    return arr.join("");
} */



/*     let hello ="   Hello  ";
console.log(">" + hello + "<");
let beforeLength = hello.length;
console.log("Длина строки до:", beforeLength);

hello = hello.trim();
console.log(">" + hello + "<");
let afterLength = hello.length;
console.log("Длина строки после:", afterLength);

let add = hello.padStart(15, "_");
console.log(">" + add + "<");
add = hello.padEnd(15, "_");
console.log(">" + add + "<");  */



/* document.writeln("hello" > "Hello"); // 104 > 72
document.writeln("hello".codePointAt(0));
document.writeln("Hello".codePointAt(0));
document.writeln("Ё".codePointAt(0)); // 1025
document.writeln("А".codePointAt(0)); // 1040
document.writeln("Я".codePointAt(0)); // 1071
document.writeln("а".codePointAt(0)); // 1072
document.writeln("я".codePointAt(0)); // 1103
document.writeln("ё".codePointAt(0)); // 1105 */



/* // Ё..А-Яа-я..ё

// document.writeln(String.fromCodePoint(104));
// document.writeln(String.fromCodePoint(1025));

let a = 122;
let b = 97;

if (a > b) {
    for (let i = b; i <= a; i++) {
    document.writeln(String.fromCodePoint(i));
    }
} else {
    for (let i = a; i <= b; i++) {
    document.writeln(String.fromCodePoint(i));
    }
} */


/* let shortest = 12;
let longest = 18;
let minASCII = 33;
let maxASCII = 126;

function randomPassword() {
    let randomLength = rand(shortest, longest);
    let res = "";
    for (let i = 0; i < 6; i++) {
        let randomChar = String.fromCodePoint(rand(minASCII, maxASCII));
        res = res + randomChar;
    }
    let randomChar = String.fromCodePoint(rand(minASCII, maxASCII));

    return res;
}

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

document.writeln("Ваш случайный пароль: " + randomPassword()); */



// Рекурсивная функция

/* function elevator(n){ // 0
    if(n == 0){
    document.writeln("Вы в подвале<br>");
    return;
    }
    console.log(n);

   elevator(n-1); // 5 4 3 2 1
    document.writeln(n + " ");
}

let n1 = prompt("На каком вы этаже: ", 5);
elevator(n1); */



/* // Вычислить сумму чисел от 1 до n

function sum(n){ // 1
    if(n <= 1){
    return n; // 1
    }
    return n + sum(n - 1); // 15
}

document.write(sum(5)); // 1 + 2 + 3 + 4 + 5 = 15 */



let chislo = +prompt("число:", 2);
let stepen = +prompt("Степень:", 4);
document.writeln(chislo, " в степени ", stepen, " = ", degree(chislo, stepen));

function degree(ch, st) { //3
    if (st) {
        return ch * degree(ch, st - 1); //  2 * 2 * 2 * 2 *1
    }
    return 1;
}


// 5! = 1*2*3*4*5

let factorial = n => {
    let fact = 1;
    for(let i = 1; i <= n; i++) {
    fact *= i;
    }
    return fact;
}

document.writeln(factorial(5));