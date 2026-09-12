
// console.log(window.location);
// console.log(location);
// // console.log(document.location);
// console.log(location.href);
// alert(location);

// location.href = "https://htmlbook.ru";

// let open = document.querySelector("#show");
// open.addEventListener("click", function(){
//     // window.location.assign("https://htmlbook.ru");
//     window.location.assign("str.html");
// })

// let btn = document.getElementById("btn");
// btn.addEventListener("click", () => {
//     let url = document.getElementById("url").value;
//     location.assign(url);
//     // location.replace(url);
//     // location.reload(url);
// })

// console.log("В истории " + history.length + " страниц");
// // history.back();
// // history.forward();
// history.go(-1);

// console.log(window.navigator.userAgent);
// console.log(window.screen);


/* try{
    // код, гда может произойти ошибка
} catch (error){
    // выполнится, если ошибка произошла
} finally {
    // выполнится в любом случае
}
 */







// let a = 5;

// try{
//    console.log(b);
// } catch (error){
//    console.error("Ошибка:", error.message);
// }

// console.log(a);

/* try{
    let num = 16;
    console.log(num());
}catch (e){
    console.log(e.name);
    console.log(e.message);
    console.log(e.stack);
}
 */


/* try{
    let arr = new Array(-5);
}catch(err){
    let text = err.name + "<br>" + err.message + "<br>" + err.stack;
    document.getElementById("demo").innerHTML = text;
} */



/* setTimeout(function () {
    try {
        alert(x);
        alert(2 + 2);

    } catch (e) {
        alert(e.name + ": " + e.message);
    }
}, 10); */





/* try {
    alert(x);
    alert(2 + 2);

} catch (e) {
    alert(e.name + ": " + e.message);
}
finally {
    alert("Код в блоке finally");
} */




/* let flag = false;
let but = document.querySelector("button");

but.addEventListener("click", function () {
    try {
        if (!flag) {
            document.body.style.background = "12px";
        } else {
            document.body.style.background = "greenyellow";
        }
    } catch (e) {
        alert(e);
    } finally {
        flag = !flag;
    }
}) */



/* function divide(a, b) {
    if (b == 0) {
        throw new Error("Делить на 0 нельзя");
    }
    return a / b;
}

let res;
try {
    res = divide(5, 0);
    console.log(res);
} catch (error) {
    console.log(error.name + ": " + error.message + ", stack: " + error.stack);
} */




/* let but = document.querySelector("button");
but.addEventListener("click", myFunction);

function myFunction() {
    let message = document.getElementById("txt");
    let x = document.getElementById("demo").value;
    message.innerHTML = "";
    try {
        if (x == "") {
            throw "пусто";
        }
        if (isNaN(x)) {
            throw "не число";
        }
        if (x < 5) {
            throw "слишком мало";
        }
        if (x > 10) {
            throw "слишком много";
        }
    } catch (err) {
        message.innerHTML = "Вы ввели " + err;
    }
} */




/* function calculate(a, b) {
    if (typeof a != "number") {
        throw "a - не число";
    }
    return a + (b ** 2) / 3;
}

console.log(calculate("2", 3));
console.log(calculate(5, 3)); */


// Классы

/* // function Person(name, age){
//     this.name = name,
//     this.age = age
// }

// const person1 = new Person("Кристина", 23);
// console.log(person1);

class Person2 {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    sayHi(){
        document.writeln("Привет, " + this.name + "!");
    }
}

const person2 = new Person2("Кристина", 23);
console.log(person2);
person2.sayHi();
alert(typeof Person2); */


/* let User = class myClass{ // редко используется 
    sayHi() {
    alert("Привет");
    }
} */

// let user = new User();
// user.sayHi();


/* function makeClass(text) { //еще реже используется
    return class {
    sayHi() {
    alert(text);
    }
    }
}

let User = makeClass("Пишет");
new User().sayHi(); */


class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    area() {
        return this.height * this.width;
    }
}
const rectangle = new Rectangle(10, 20);
rectangle.color = "red";
console.log(rectangle);

console.log(rectangle.area());

const rectangle1 = new Rectangle(40, 30);
console.log(rectangle1);

