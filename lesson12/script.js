
// function isOdd(number){
//     return number % 2; //0 или 1
// }
// function isEven(number ){
//     return number % 2 ==0; //0 или 1
// }


// function filter(numbers, fn){ // функция принимает аргумент  
//     let results = [];
//     for(let number of numbers){
//         if(fn(number)){   //(number % 2 остаток от деления на 2 проверяет нечетность, если = 0 значит чентность)
//             results.push(number); // метод пуш добавляет в конец  массива ...)
//         }
//     }
//     return results;
// }

// let num = [1,2,4,7,3,5,6];
// console.log(filter(num, isOdd));
// console.log(filter(num, isEven));


// function filter(numbers, calback) {
//     let results = [];
//     for (let number of numbers) {
//         if (calback(number)) {
//             results.push(number);
//         }
//     }
//     return results;
// }
// let num = [1, 2, 4, 7, 3, 5, 6];
// let arr = [8,7,6,5,9,4,2];

// // let oddNumbers=filter(num, function(number){
// //     return number %2;
// // });
// let oddNumbers = filter(num, number => number % 2); // сначала функция вызывается, а потом только к ней обращаются(отрабатывает)
// let oddNumbers2 = filter(arr, number => number % 2);
// let evenNumbers = filter(num, number => number % 2==0);

// console.log(oddNumbers);
// console.log(evenNumbers);



//forEach() -цикл 

// let numbers = [1, 2, 3, 4, 5, 6];

// // numbers.forEach(function(n){//переменная которая является массивом
// // // принимает первым параметром функцию
// // document.writeln("Квадрат числа " + n + " равен: " + n * n + "<br>");
// // })

// numbers.forEach(n => document.writeln("Квадрат числа " + n + " равен: " + n * n + "<br>"));

// ["Hello", "World"].forEach(alert);//console.log сработает, document.writeln ошибку выдаст

// let textArray = ["Hello", "World"];
// for(let i = 0; i < textArray.length; i++) {
//     alert(textArray[i]);
// }

// ["Hello", "World"].forEach((item,index,array)=>{ // айтем при каждой итерации берет по очереди элементы массива у которого вызываем фор ич, эрэй(третий принимаемый аргумент), тут весь массив,  индекс - индекс в массиве элемента
//     alert(`${item}индекс ${index} в ${array}`)
// })


// let numbers = [1, 2, 3, 4, 5, 6];

// let squares = numbers.map(n=> n**3);
// console.log(squares);


// let lengths = ["Hello", "World", "!"].map(item => item.length); //принимает айтем, а возвращает длину айтема
// console.log(lengths);


// let number = [1, -12, 8, -4, 25, 42];

// let passed = number.filter(n=> n > 0); //при каждой итерации по очереди берется элемент массива(1, -12 и тд)
// console.log(passed);

// let mas = [];
// for(let i = 0; i < number.length; i++) {
//     if(number[i]>0){
//         mas.push(number[i]);
//     }
// }
// console.log(mas);

// let colors = ["red", "orange", "",  "green", "yellow"];
// let newColors = colors.filter(color => color.length > 5);
// console.log(newColors);

// let colors = ["red", "orange", "",  "green", "yellow"];
// let newColors = colors.filter(function(color){
//     return color.length > 5;
// });
// console.log(newColors);

//////////////////////////////////////////
//в реакте используется часто map и filter
/////////////////////////////////////////


// let number = [1, -12, 8, -4, 25, 42];
// let passed = number.every(n=> n > 0); //проверяет все ли элементы соответствуют определенному условию
// console.log(passed); //false


// let number = [1, -12, 8, -4, 25, 42];
// let passed = number.some(n=> n > 0); //проверяет на соответствие хотя бы один из элементов
// console.log(passed); //true

////////////////////////////////////////////////////////
//массив.reduce и массив.reduceRight
//используются для вычисления единого значения на основе массива
///////////////////////////////////////////////////////

// let arr = [1,2,3,4,5];

// let result = arr.reduce((sum,current) => sum + current, 0);

// document.writeln(result);

// let arr = [1,2,3,4,5];

// let result = arr.reduce((sum,current) => sum + current);

// document.writeln(result);


// document.writeln(Math.floor(7.9)+"<br>"); //округляет в нижнюю сторону
// document.writeln(Math.ceil(7.2)+"<br>"); //округляет в верхнюю сторону
// document.writeln(Math.round(7.5)+"<br>"); //округление по законам математики

// (function(){
//     document.writeln(Math.random()+ "<br>"); //генерирует случайное число от 0 до 1 (не включая)
// })()

// (function (min, max) {
//     document.writeln(Math.floor(Math.random() * (max - min) + min) + "<br>"); //генерирует случайное число от 0 до 1 (не включая)
// })(2, 9); //случайное число из диапозона от 2 до 9 (не включая)

// document.writeln(Math.floor(Math.random() * 9) + "<br>"); //от 0 до 9 (не включая)

// document.writeln(Math.floor(Math.random() * 7 + 2) + "<br>"); //от 2 до 9 (не включая)

// //от 6 до 14 (не включая)
// document.writeln(parseInt(Math.random() * 8 + 6) + "<br>"); //parseint отбрасывает дробную часть, также как math.floor 

// let randomWorld = ["Цикл", "Массив", "Условие", "Функция", "Переменная"];
// let word = pickRandom(randomWorld);
// document.writeln(word);


// let pickRandom = function (arr) { //["Цикл", "Массив", "Условие", "Функция", "Переменная"]; в arr массив этот
//     return arr[Math.floor(Math.random() * arr.length)];
// }

// document.writeln("<div id='block'></div>");
// let id = document.getElementById("block");
// id.style.height = "100px";
// id.style.width = "100px";
// // id.style.background = "rgb(255,0,0)";
// createColor();

// function createColor() {
//     let r = Math.floor(Math.random() * 256);
//     let g = Math.floor(Math.random() * 256);
//     let b = Math.floor(Math.random() * 256);
//     // id.style.background = "rgb("+ r + ", " + g +", " + b + ")";
//     id.style.background = 'rgb(${r}, ${g}, ${b})';
// }



