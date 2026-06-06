// let el = document.querySelector("h2");
// el.style.color = "red";

// let el2 = document.querySelectorAll("h2")[1];
// el2.style.color = "purple";


// let lists = document.querySelectorAll("li");
// for (let i = 0; i < lists.length; i++) {
//     lists[i].innerHTML += "!!!";
// }

// let purple = document.querySelectorAll(".purple li");
// for (let i = 0; i < purple.length; i++) {
//     purple[i].style.color = "purple";
//     purple[i].innerHTML += "??";
// }
// // let m = document.querySelectorAll(".red li")[1];
// let m = document.getElementsByClassName("red")[0]
// m.style.color = "orange";


let el = document.querySelector(".elem");

console.log(el.closest(".content"));
el.style.color = "green";

let blue = el.closest(".content");
blue.style.color = "blue";

// console.log(el.closest(".container"));
// console.log(el.closest("h1"));


// let all = document.querySelectorAll("*");
// let all = document.querySelectorAll("[class='two']");
// let all = document.querySelectorAll("[class~='two']");
// let all = document.querySelectorAll("[class^='cont']");
// let all = document.querySelectorAll("[class&='ner']");
// let all = document.querySelectorAll("[class*='ne']");
// let all = document.querySelectorAll(":empty"); //которые не имеют вложенных элементов
// console.log(all);

// let title = document.querySelector("h1");
// title.style.color = "red";



//методы массива

// let js = ["нужно", "учить", "JavaScript"];
// document.writeln(js + "<br>");
// console.log(js);

// let last = js.pop()
// console.log(last); // удаляет последний элемент из массива и возвращает удаленный элемент, при этом урезает массив
// console.log(js);

// js.push("JavaScript", "!"); // добавляет элемент в конец массива
// console.log(js);

// console.log(js.shift()); // удаляет первый элемент массива и возвращает удаленный элемент
// console.log(js);

// js.unshift("почему", "нужно"); // добавляет элемент в начало массива
// console.log(js);
метод
// let fruits = ["апельсин", "банан", "груша"];
// document.writeln(fruits + "<br>");
// document.writeln(fruits.length + "<br>");

// fruits.unshift("грейпфрут");
// document.writeln(fruits + "<br>");
// document.writeln(fruits.length + "<br>");

// fruits.pop();
// fruits.shift();
// document.writeln(fruits + "<br>");
// document.writeln(fruits.length + "<br>");

// let fruits = ["апельсин", "банан", "груша"];
// document.writeln(fruits + "<br>");
// document.writeln(fruits.length + "<br>");
// fruits.push("яблоко", "ананас");
// document.writeln(fruits + "<br>");
// fruits.unshift("грейфрут");
// document.writeln(fruits + "<br>");
// document.writeln(fruits.length + "<br>");
// fruits.pop("");
// document.writeln(fruits + "<br>");
// fruits.shift("");
// document.writeln(fruits + "<br>");
// document.writeln(fruits.length + "<br>");
метод
// let mas = [];
// let n = prompt("Количество элементов массива:");
// for(let i = 0; i < n; i++){
//     let x = prompt("Введите число:");
//     // mas.push(x);
//     mas.unshift(x); // [3,2,1]
// }

// for(let i = 0; i < n; i++){
//     document.writeln(mas[i] + " ");
// }
метод
// let masFirst = [1, 2, 3];
// let masSecond = [11, 22, 33];
// let masEnd = []; // [1, 11, ]

// for(let i=0; i<masFirst.length; i++){
//     masEnd.push(masFirst[i]);
//     masEnd.push(masSecond[i]);
// } 

// document.writeln(masEnd);


// let arr = js.slice(1, 3); // slice(bigin, end) - копирует участок массива от begin до end, не включая end
// console.log(arr);

// console.log(js.slice(1));//если end не указан, продолжается копирование до конца массива
// console.log(js);

// let range = js.toSpliced(1, 2); // получение элементов вне диапазона
// console.log(range);
// console.log(js);

// delete js[1]; // удалил значение по заданному индексу
// console.log(js);

// js.split(1, 1); // splice(start, length) - удаляет из массива указанное число элементов, начиная с позиции start, второй параметр указывает количество элементов для удаления
// console.log(js);

// js.split(0, 2, "Мы", "изучаем"); // также можем добавлять элементы
// console.log(js);

// js.splice(2, 0, "сложный", "язык"); // если мы не хотим удалять элементы, а хотим их добавить, то вторым параметром указываем значение "0" и после него с третьего параметра указываем добавляемые элементы
// console.log(js);

// js.split(-3, 0, "но", "очень", "интересный"); // работает с отрицательными индексами, отсчет ведется с конца
// console.log(js);



// let mas = [];
// let n;
// do{
//     n = prompt("Введите элемент массива:")
//     if(n>0){
//         mas.push(n);
//     }else{
//         break;
//     }
// }while(true);
// document.writeln(mas + "<br>");

// let k = prompt("Введите индекс для удаления");
// // delete mas[k];
// if(k >= 0 && k < mas.length){
//     mas.splice(k, 1);
// } else{
//     alert("Недопустимый индекс");
// }
// for(let el of mas){
//     document.writeIn(el + " ");
// }


// let index = jsx.indexOf("сложный");// возвращает первый индекс, по которому данный элемент может быть найден в массивах, или "-1", если элемент не найден
// console.log(index);

// js.push("сложный");
// console.log(js);

// let index1 = js.indexOf("сложный", index + 1); // второй параметр указывает начальный индекс для поиска
// console.log(index1);

// let index2 = js.lastIndexOf("сложный");
// console.log(index2);

дз 
// Нужно заполнить массив на 10 элементов с клавиатуры. Необходимо найти максимальный элемент массива и переместить его в начало массива.

// 8 82 90 46 14 39 66 86 75 57
// MAX: 90
// 90 8 82 46 14 39 66 86 75 57
