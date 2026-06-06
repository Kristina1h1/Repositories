// function showArrayContent(arrayToShow) { // в функцию под названием arraytoshow при каждом вызове приходит свой массив
//     if (arrayToShow.length == 1) {
//         return arrayToShow;
//     } else {
//         let last = arrayToShow.pop(); //удаляет последний эллемент из массива
//         let str = arrayToShow.join(", ");
//         let res = str + " и " + last // "и" это конкатенация
//         return res;
//     }
//     // Тут идёт код функции.
// }
// // Определяем массивы.
// let a = new Array('Текст');
// let b = new Array('день', 'ночь');
// let c = new Array('зима', 'весна', 'лето', 'осень');
// alert(showArrayContent(a)); // Выводим содержимое массивов,
// alert(showArrayContent(b)); // используя созданную выше функцию.
// alert(showArrayContent(c));



// Function decloration
// Fanction  expression (функциональное выражение)

// let func = function(аргументы) {
// тело функции
// }

// func(параметры);


// alert(sum1(20, 30)); // 50 //вот этот лучше
// function sum1(a, b) {
//     return a + b;
// }




// let sum2 = function (a, b) {// используется реже
//     return a + b;
// }
// alert(sum2(2, 3)); // 5


//дан массив целых чисел. определить среднее арифметическое этих чисел используя функцию

// let average = function (arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return (sum / arr.length).toFixed(2);
// }

// document.writeln(average([3, 8, 9, 4, 1, 2, 5]) + "<br>");
// document.writeln(average([8, 2, 4]) + "<br>");



//написать функцию нахождения максимального числа из массива

// let max = function (arr) {
//     let maxi = 0;
// for(let i = 0; i < arr.length; i++){
//     if (maxi < arr[i]){
//         maxi = arr[i];
//     }
// }
// return maxi;
// }

// document.writeln(max([3, 8, 9, 4, 1, 2, 5]) + "<br>");
// document.writeln(max([1, 2, 5]) + "<br>");


// Immediately Invoked Function Expression(IIFE) - самовызывающаяся
//     (анонимная функция)

//     (function () {
//         alert("Привет мир!");
//     })();

// (function (n) {
//     alert(n * n);
// })(4);


// Arrow Function (стрелочная функция)

// function test (a,b,c){
//     let res = a+b+c;
//     return res;
// }
// alert(test(10,20,30)); //60


// let test2 = (a,b,c)=>a+b+c; //стрелочная функция
// alert(test2(1,2,3)); 

// let hello = () => alert("Hello");// если принимаемых аргументов нет, все равно ставить круглые скобки

// hello();


// let double = (n) => n ** 2;

// let arr = [5, 3, 8, 2];
// let res = [];

// for(let i = 0; i < arr.length; i++) {
//     res[i] = double(arr[i]);
// }

// console.log(res);



//задача
//Функция вывода на экран линии из чередующихся символов заданной длины   (функция, которая принимает три параметра, но не возвращает никакого значения)  +---+  XOXOXOX


let symbol = (count, a, b) => {
    for (let i = 0; i < count; i++) {
        document.writeln(i % 2 ? b : a);
    }
    document.writeln("<br>");
}

symbol(9, "+", "-");
symbol(7, "x", "0");


//Напишите функцию change(lst), которая принимает список и меняет местами его первый и последний элемент. В исходном списке минимум 2 элемента. Исходные данные:
// [1, 2, 3]
// [9, 12, 33, 54, 105]
// ['c', 'l', 'o', 'h']

// Результат:
// [3, 2, 1]
// [105, 12, 33, 54, 9]
// ['h', 'l', 'o', 'c']


// let change = lst => {
//     let a = lst[lst.length - 1]; // a = 3
//     lst[lst.length - 1] = lst[0]; // lst[2] = 1
//     lst[0] = a; // lst[0] = 3
//     return lst;
// }



// let change = lst =>{
//     let last = lst.pop();
//     let first = lst.shift();
//     lst.push(first);
//     lst.unshift(last);
//     return lst;
// }

// document.writeln(change([1, 2, 3]) + "<br>");
// document.writeln(change([9, 12, 33, 54, 105]) + "<br>");
// document.writeln(change(["c", "l", "o", "h"]) + "<br>");


// let a = 5;
// let b = 7;
// console.log("a=",a,"b=",b);

// let temp = a;
// a=b;

// console.log("a=",a,"b=",b);


// let isGreated = (x,y)=> x >y ? true : false;
// document.writeln(isGreated(10,5)+"<br>");


// let checkPassword = password => {
//     let hasUpper = false;
//     let hasLower = false;
//     let hasNum = false;

//     for(let ch of password){
//     // console.log(ch);
//     if("A" <= ch && ch <= "Z"){
//         hasUpper = true;
//     }if("a" <=ch && ch<= "z"){
//         hasLOwer = true;
//     }if("0" <= ch && ch<="9"){
//         hasNum = true;
//     }
// }

// if(password.length >= 8 && hasUpper && hasLower && hasNum) {
//     return true;
// }
//     return false;
// }

// let psw = prompt("Введите пароль:");
// if(checkPassword(psw)){
//     document.writeln("Это надежный пароль");
// }else{
//     document.writeln("Это ненадежный пароль");
// }


//5! = 1*2*3*4*5 => 120  // факториал числа 

// let factorial = n => {
//     let fact = 1;
//     for(let i = 1; i <= n; i++){
//         fact *= i;
//     }
//     return fact;
// }

// document.writeln(factorial(5)); 

function getNames(){
    let firstName = "Irina", lastName = "Vetrova";
    return [firstName, lastName]; //если надо вернуть больше одного, мы можем положить его в массив
}
let names = getNames();
console.log(names); 
// let surname =names[1];


    let[name1,surname]=getNames();//деструктуризация
    console.log(name1);
    console.log(surname);
    console.log(year);