
//стек:5 4 3 2
// 0 > 0? 0 : 1 


// let factorial = n => (n > 0) ? n * factorial(n - 1) : 1;

// function factorial(n) {
//     if (n > 0) {
//         return n * factorial(n - 1);
//     } else {
//         return 1;
//     }
// }

// document.writeln(factorial(5));
// 1 * 1 = 1 
// 2 * 1 = 2
// 3 * 2 = 6
// 4 * 6 = 24
// 5 * 24 = 120

// function toStr(n, base){ // 25,4 => через parseInt убираем дробную часть=> 25
//     let convert = "0123456789ABCDEF";
//     if(n < base){ // 254 < 10 
//         return convert[n];
//     } else {
//         return toStr(parseInt(n / base), base) + convert[n % base]; // convert[254%10] это строка '4'
//     }
// }

// document.writeln(toStr(254, 10));


// function loadstr(){
//     alert("Страница была загружена");
// }

// let m = document.getElementById("mes");
// // function over() {
// //     document.getElementById("mes").style.color = "red";
// // }
// function over(){
    
//     m.style.color = "red";
// }
// function out() {
//     document.getElementById("mes").style.color = "green";
// }
// function change(){
//     let id = document.querySelector("h2");
//     id.style.color = "blue";
// }

// function randomBg(){
//     let r = Math.floor(Math.random() * 256);
//     let g = Math.floor(Math.random() * 256);
//     let b = Math.floor(Math.random() * 256);
//     document.body.style.background = `rgb(${r},${g},${b})`;
// }
// let newImg = document.getElementById("newImg");

// function on(){
//     newImg.src = "night.png";
// }
// function off(){
//     newImg.src = "day.png";
// }



// let but = document.getElementById("but");

// but.onclick = function(){
//     alert("Спасибо");
// }

// function hello(){
//     alert("Спасибо");
// }
// but.onclick = hello(); //когда передаем событие  оно автоматически выполнится, когда произойдет событие


// let hex = "0123456789ABCDEF".split("");
// console.log(hex); // ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']

// let button = document.getElementById("btn");
// let color = document.querySelector(".color");

// button.onclick = function(){
//     let hexColor = generateHex();
//     console.log(hexColor);
//     color.textContent = hexColor;
//     document.body.style.background = hexColor;
// }

// function generateHex(){
//     let hexColor = "#";
//     for(let i=0; i<6; i++){
//         hexColor += hex[getRandomNumber()];
//     }
//     return hexColor;
// }

// function getRandomNumber(){
//     return Math.floor(Math.random() * hex.length);
// }

// function change(id){
//     id.innerHTML = "Новый текст";
//     id.style.color = "red";
// }

// function change(id){
//     id.innerHTML = "Новый текст";
//     id.style.color = "red";
// }

// function setColor(color){
//     document.body.style.background = color.className; // в боди через стили расскрасить элемент и из этого элемента взять имя класса( а имя класса желтый допустим)
// }