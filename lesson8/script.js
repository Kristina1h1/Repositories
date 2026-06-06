// let questions = ["На ноль делить можно?", "Волга впадает в Каспийское море?", "Атмосферное давление увеличивается с высотой?", "2x2 будет 8?", "Дельфины - это рыбы?", "Мадонна - это настоящее имя певицы?", "Первая мировая война началась 1 сентября 1939 года?"];
// let answers = [false, true, false, false, false, false, false];
// let sum = 0;
// let res = new Array();

// for(let i = 0; i < questions.length; i++){
//     let answer = confirm(questions[i]);
//     if(answer == answers[i]){
//         res[i] = 10;
//         sum += res[i];
//     } else {
//         res[i] = 0;
//     }
// }

// console.log(res);
// console.log(sum);


// document.writeln("<table border='1' width='500'>");
// document.writeln("<tr>");
// document.writeln("<th>Bonpoc</th>");
// document.writeln("<th>Баллы</th>");
// document.writeln("</tr>");

// for(let i=0; i<questions.length; i++){
//     document.writeln("<tr>");
//     document.writeln("<td>" + questions[i] + "</td>");
//     document.writeln("<td>" + res[i] + "</td>");
//     document.writeln("</tr>");
// }

// document.writeln("<tr>");
// document.writeln("<th>Итог</th>");
// document.writeln("<th>" + sum + "</th>");
// document.writeln("</tr>");
// document.writeln("</table>");



// let arr = [1, 2, 3, 4, 5];
// for (let elem of arr) {
//     console.log(elem);
// }

// for (let i = 3; i < arr.length; i++) {
//     document.writeln(arr[i] + "<br>")
// }

// let colors = ["red", "blue", "green", "yellow"];
// for (let color of colors) {
//     document.writeln(color + "br");
// }


// let arr = [1, 2, 3, 4, 5];
// let flag = false;

// for (let elem of arr) {
//     if (elem == 3) {
//     flag = true;
//     break;
//     }
// }

// // console.log(flag);

// if(flag == true){
//     console.log("+++");
// } else{
//     console.log("---");
// }


// let arr = [7, 55, 9, 33, 2];
// let max = arr[0];

// let max = arr[0];
// for(let i=0; i<arr.length; i++){
//     if(arr[i]>max){
//         max = arr[i];
//     }
// }

// for (let num of arr) {
//     if (num > max) {
//         max = num;
//     }
// }
// console.log(max);

// let arr = [7, 55, 9, 33, 2];
// let sum = 0;
// for (let num of arr) {
//     sum += num;
// }
// console.log(sum); //показать лог в консоли


// let text1 = document.getElementById("text_1"); //получить элемент по айди
// console.log(text1);
// console.log(text1.textContent); //получаем его свойство
// text1.textContent = "Новое содержимое";
// console.log(text1.textContent);

// let text1 = document.getElementById("text_1");
// console.log(text1);
// console.log(text1.textContent);
// text1.textContent = "Новое содержимое <b>html разметкой</b>";

// let text2 = document.getElementById("text_2");
// text2.innerHTML = "Новое содержимое <b>html разметкой</b>";

// let res = +prompt("Выберите изображение", "1-собака, 2-кот, 3-птица, 4-рыба");
// document.writeln("<div id='image'></div>");
// let img = document.getElementById("image");
// switch (res){
//     case 1:
//         img.innerHTML = "<img src='img/dog.jpg'>"
//         break;
//     case 2:
//         img.innerHTML = "<img src='img/cat.jpg'>";
//     break;
//     case 3:
//         img.innerHTML = "<img src='img/bird.jpeg'>";
//     break;
//     case 4:
//         img.innerHTML = "<img src='img/fish.jpeg'>";
//     break;
//     default:
//         alert("Такого изображения нет");
// }


// let tag = document.getElementsByTagName("p")[2];
// console.log(tag);
// tag.innerHTML = "Hello <u>tag</u>";
// tag.style.color = "blue";
// tag.style.fontWeight = "bold";
// tag.style.background = "silver";
// tag.style.padding = "10px 20px";

// tag.id = "test";
// tag.className = "x";

// let tag = document.getElementsByTagName("p");
// tag[2].innerHTML = "Hello <u>tag</u>";
// tag[2].style.color = "blue";
// tag[1].style.color = "orange";


// let q = document.getElementsByClassName("Two");
// console.log(q);
// q[1].style.color="red";

// document.querySelector("CSS"); //находит первый элемент
// document.querySelectorAll("CSS"); //возвращает массив


// let id = document.querySelector(".two")[1];
// console.log(id);
// id.style.color = "red";

let el = document.querySelector("h2");
el.style.color = "red";

let el2 = document.querySelectorAll("h2")[1];
el2.style.color = "purple";


let lists = document.querySelectorAll("li");
for (let i = 0; i < lists.length; i++) {
    lists[i].innerHTML += "!!!";
}

let purple = document.querySelectorAll(".purple li");
for (let i = 0; i < purple.length; i++) {
    purple[i].style.color = "purple";
    purple[i].innerHTML += "??";
}