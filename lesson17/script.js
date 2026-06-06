
// let el = document.querySelector("#elem");

// //элемент.addEventListener("тип события", функция);
// el.addEventListener("click", function(){
//     el.innerHTML = "Новый текст";
// });
// el/addEventListener("")



// let searchInput = document.querySelector("#searchInput");
// let list = document.querySelectorAll("#list li");

// searchInput.addEventListener("input", function(){
//     let searcTerm = this.value.toLowerCase();
//     // console.log(searcTerm);
//     // console.log(list.length);

//     for(let i=0;i<list.length; i++){
//         let item = list[i];
//         if(item.textContent.toLowerCase().indexOf(searcTerm)!==-1){
//             item.style.display = "block";
//         }else{
//             item.style.display = "none";
//         }
//     }
// });



// let but = document.querySelector("button");

// but.addEventListener("click", function(event){
//     console.log(event);
// })



// let buttons = document.querySelectorAll("input");

// let handleClick = function(){
//     console.log("Кликнули по:", event.target.value);
// }

// for(let i = 0; i<buttons.length; i++){
//     buttons[i].addEventListener("click", handleClick);

// }


// document.addEventListener("mouseMove", function(event){
//     let c = document.querySelector("#ev");
//     let x = event.clientX;
//     let y = event.clientY;
//     console.log(event);

//     c.textContent = "x = " + x + ", y = " + y;

//     c.addEventListener("dblclick", function(event){//event принимаемый аргумент
//     event.target.background = "red";
//     });
// });



// let section = document.querySelector("section");
// let div = document.querySelector("div");
// let p = document.querySelector("p");

// section.addEventListener("click", function() {
//     section.style.background = "red";
// });

// div.addEventListener("click", function(event) {
//     div.style.background = "orange";
//     event.stopPropagation();
// });

// p.addEventListener("click", function() {
//     p.style.background = "yellow";
// });




// let link = document.querySelector("a");

// link.addEventListener("click", function(event){
//     event.preventDefault(); //preventDefault отмена действия какого-то тега
//     console.log("Переход по ссылке отменен");
// });




// let input = document.querySelector("#but");
// input.addEventListener("click", handle);

// function handle(){
//     alert("Спасибо");
//     input.removeEventListener("click", handle);
// }




// setTimeout(функция, задержка);

// setTimeout("alert('Текст')", 3000);
// setTimeout("hello('Привет', 'друг')", 3000);
// setTimeout(hello, 3000, 'Привет', 'друг');
// function hello(h, n){
//     alert(h + ", " + n + "!");
// }



// setTimeout(hello);

// function hello(){
//     alert("Пишет!");
// }


// document.writeln("<div id='dt'>Создание анимированного текста</div>");

// let tag = document.querySelector("#dt");
// let text = document.querySelector("#dt").innerHTML;
// let i = 0;

// window.addEventListener("load", animText);

// function animText(){
//     tag.innerHTML = text.substring(0, i);
//     i++;
// if(i>text.length){
//     i=0;
// }
//     setTimeout(animText, 200);
// }



// let d = new Date();
// document.writeIn(d + "<br>");
// document.writeIn(d.toString() + "<br>");
// document.writeIn(d.getFullYear() + "<br>"); // 2026
// document.writeIn(d.getMonth() + "<br>"); // 3, месяц от 0 по 11
// document.writeIn(d.getDate() + "<br>"); // 12
// document.writeIn(d.getDay() + "<br>"); //0 - воскресенье, 1 - понедельник, ..., 6-суббота


// let d = new Date(2026, 11, 18, 10, 0, 0).getTime();
// console.log(d);

// Сегодня: 12 апреля 2026, Воскресенье
