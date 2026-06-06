// document.image.border = "1";
// document.writeln("<br>Ширина изображения: " + document.image.width);
// document.writeln("<br>Высота изображения: " + document.image.height);

// document.image.width = 200;

// document.image.width = 200 + 5;
// document.image.height = 50;

// document.writeln("************************************");
// document.writeln("<br>Ширина изображения: " + document.image.width);
// document.writeln("<br>Высота изображения: " + document.image.height);

// document.image.src = "blue_star.png";





// document.image.addEventListener("click", changeImage);

// let flag = 0;
// function changeImage(){
//     if(flag == 0){
//         document.image.src = "blue_star.png";
//         flag = 1;
//     }else{
//         document.image.src = "golden_star.png";
//         flag = 0;
//     }
// }







// let mas = [" Hello "];
// console.log(">" + mas[0].trim() + "<");





// let array = new Array("2.jpg", "3.jpg", "4.jpg");

// document.writeln("<input type='button' value='<' name='left'>");
// document.writeln("<img id='s1' src='" + array[0] + "'>");
// document.writeln("<input type='button' value='>' name='right'>");

// document.getElementsByName("right")[0].addEventListener("click", setRight);
// document.getElementsByName("left")[0].addEventListener("click", setLeft);

// let i = 0;
// let image = document.getElementById("s1");

// function setRight() {
//     i++;
//     if (i == array.length) {
//         i = 0;
//     }
//     image.src = array[i];
// }

// function setLeft() {
//     i--;
//     if (i < 0) {
//         i = array.length - 1;
//     }
//     image.src = array[i];
// }


// let imgTime = ["c0.gif", "c1.gif","c2.gif","c3.gif","c4.gif","c5.gif","c6.gif","c7.gif","c8.gif","c9.gif"];
// let masImg = document.querySelectorAll("#block img");
// clock();

// function clock(){
//     let time = new Date();
//     let hours = time.getHours();
//     let min = time.getMinutes();
//     let second = time.getSeconds();
//     getImg(hours,min,second);
//     setTimeout(clock, 1000);

// }

// function getImg(h, m, s) { //h = 15
//     masImg[0].src = imgTime[parseInt(h / 10)];
//     masImg[1].src = imgTime[h % 10];

//     masImg[3].src = imgTime[Math.floor(m / 10)];
//     masImg[4].src = imgTime[m % 10];

//     if(s<10){
//     masImg[6].src = imgTime[0];
//     masImg[7].src = imgTime[string(s)[0]];
//     }else{
//     masImg[6].src = imgTime[string(s)[0]];
//     masImg[7].src = imgTime[string(s)[1]];
//     }
// }

// дз
// document.querySelector("button").addEventListener("click", function(){
//     console.log(document.querySelector("input").value);
// }) 
//как значение двух переменных поменять 
// let a = 5;
// let b = 7;
// console.log("a:", a);
// console.log("b:", b);

// let temp = a;
// a = b;
// b = temp;

// console.log("a:", a);
// console.log("b:", b);


// alert(document.documentElement.innerHTML);
// alert(document.head.innerHTML);
// alert(document.body.innerHTML);





// let myTitle = document.querySelector("h1").innerHTML;
// console.log(myTitle);
// let title3 = document.querySelector("h3").firstChild.nodeValue;
// let title3 = document.querySelector("h3").lastChild.nodeValue;
// let title3 = document.querySelector("h3").childNodes[0].nodeValue;
// console.log(title3);

// document.querySelector("h1").innerHTML = document.querySelector("h3").innerHTML;

// let myTitle = document.querySelector("h1").firstChild;
// alert(myTitle.nodeName); // H1
// alert(myTitle.nodeType); // 




// let elem = document.querySelector("#root");

// let tag = document.createElement("p"); // <p></p>
// let node = document.createTextNode("Новый текст!!!"); // "Новый текст!!!"
// tag.append(node); //<p>"Новый текст!!!"</p>

// elem.append(tag); //добавляет новый элемент последним дочерним элементом внутри родительского 

// elem.prepend(tag);//добавляет новый элемент первым дочерним элементом внутри родительского

// elem.before(tag); //добавляет новый элемент до выбранного id 

// elem.after(tag); //добавляет новый элемент после выбранного id

// elem.replaceWith(tag); //заменяет новым элементом выбранный id

let tree= document.querySelector(".tree")
for(let li of tree.querySelectorAll("li")){
    let span = document.createElement("span"); // <span></span>
    li.prepend(span); //<li><span></span></li>
    span.append(span.nextSibling);

}

tree.addEventListener("click", function(event){
    if(event.target.tagName != "SPAN"){
        return;
    }
    let childrenContainer = event.target.parentNode.querySelector("ul");
    if (!childrenContainer){
        return;
    }
    childrenContainer.hidden = !childrenContainer.hidden;
})