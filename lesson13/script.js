// function fn(a, b, ...args) {
//     console.log("a =", a, "b =", b, "args =", args);
// }

// fn(1, 2, 3, "A", "B", "C");


// function sum(...args) {
//     let total = 0;
//     for(let a of args){
//         total +=a;
//     }
//     return total;
// }

// console.log(sum(1, 2, 3));
// console.log(sum(5, 7, 9, 6, 8, 2, 3));



// function sum(...args) {
//     return args
//     .filter(function(e){
//     return typeof e === 'number'
//     })
//     .reduce(function(prev, curr){
//     return prev + curr
// });
// }

// function sum(...args) {
//     return args
//     .filter(e => typeof e === 'number').reduse((prev,curr) => prev + curr);
// }

// console.log(sum(10, "Hi", null, undefined, 20));

// let combine = (...arg) => arg.reduce((prev, curr) => prev + " " + curr);

// console.log(combine("Hello", "World", "!"));


// function hello(name){
//     name =name||"незнакомец"
//     document.writeln("Привет, "+ name + " !<br>");
// }
// hello("Сергей");
// hello();

// function hello(name = "незнакомец") {
//     document.writeln("Привет, " + name + "!<br>");
// }

// hello("Сергей");
// hello();

// function fn(a=0, b = 0) {
//     console.log(a + b);
// }

// fn(1, 2);
// fn(1);
// fn();


// function rectangle(w, h, fon){
//     document.writeIn("<div id='shape'></div>");
//     let id = document.getElementById("shape");

//     id.style.width = w + "px";
//     id.style.height = h + "px";
//     id.style.background = fon;
// }

// // rectangle(200, 100, "green");
// // rectangle(200, 100);
// // rectangle(300);
// rectangle();


// let j = 2;  //глобальная переменная

// function ch(){
//     let j = 3; //локальная переменная
// }
// ch();
// console.log(j); //2



// let j = 2;

// function ch(){
//     j = 3;
// }
// ch();
// console.log(j); //3

// function func(num1, num2) {
//     let a = 5;
//     function square(num) {
//         return num * num;
//     }
//     return square(num1) + square(num2);
// }

// console.log(func(2, 3)); // 2 * 2 + 3 * 3 => 13
// // console.log(square(4));
// // console.log(a);



// function test(num1, num2){
//     function func(){
//         console.log(num1 + num2);
//     }

//     func();
// }

// test(5, 2);




// function test(num){ // 5
//     function func(localNum){ // 7
//         console.log(localNum); // 7
//         func(num + 2); // 5+ 2 = 7 Это приведёт к бесконечной рекурсии!
//     }
//     func(1); // ← нужно вызвать func
// }

// test(5);


// function func(num1){
//     return function(num2){
//         return num1 + num2;
//     }
// }

// console.log(func(1)(2));


// function func(num2) {
//     return function (num3) {
//         return function (num4) {
//             return function (num5) {
//                 return function () {
//                     return [num2, num3, num4, num5];
//                 }
//             }
//         }
//     }
// }

// console.log(func(2)(3)(4)(5)());


// function hello(){
//     console.log("привет");
// }
// console.log(hello);


// let fn = hello;
// console.log(fn);

// Замыкание

// function test() {
//     let num = 5;

//     return function() {
//         console.log(num);
//     }
// }

// let func = test();
// // console.log(func);
// func();



// function outer(n){
//     return function(x){
//         return n + x;
//     }
// }

// let add5 = outer(5);
// console.log(add5(10));

// let add6 = outer(6);
// console.log(add6(10));



// function test(city){
//     let num = 0;

//     return function(){
//         num++;
//         console.log(city,num);
//     }
// }

// let func1 = test("Москва");
// func1();
// func1();
// func1();

// let func2 = test("Сочи");
// func2();
// func2();
// func1();


// 1. Функция, которая выбирает значения между 3 и 6 (включительно)
function isBetween(a, b) {
    return function (x) {
        return x >= a && x <= b;
    };
}

let arr = [2, 3, 4, 1, 7, 5, 6];
console.log(arr.filter(isBetween(3, 6))); // [3, 4, 5, 6]

// 2. Функция, которая выбирает элементы, совпадающие с одним из элементов массива [1, 2, 10]
function isArray(arr) {
    return function (x) {
        return arr.includes(x);
    };
}

let arr2 = [2, 3, 4, 1, 7, 5, 6, 10, 0];
console.log(arr2.filter(isArray([1, 2, 10]))); // [2, 1, 10]

