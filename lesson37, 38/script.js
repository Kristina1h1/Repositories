/* class Shape {
    constructor(name) {
        this.name = name;
    }

    calculateArea() {
        throw new Error("Метод calculateArea должен быть реализован");
    }

    describe() {
        console.log(`Это ${this.name} с площадью ${this.area}`);
    }
}



class Square extends Shape {
    constructor(name, side) {
        super(name);
        this.side = side;
    }
    calculateArea() {
        return this.side ** 2
    }
}

class Triangle extends Shape {
    constructor(name, base, height) {
        super(name);
        this.base = base;
        this.height = height;
    }
    calculateArea() {
        return this.base * this.height / 2;
    }
}

// const circle = new Circle("Круг", 5);
// circle.describe();

// const square = new Circle("Квадрат", 4);
// square.describe();

// const triangle = new Triangle("Треугольник, 6,3");
// triangle.describe();

const shapes = [
    new Circle("Круг", 5),
    new Square("Квадрат", 4),
    new Triangle("Треугольник", 6, 3)
];

shapes.forEach(shape => shape.describe()); */




/* class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
        Animal.count++;
    }


    static counter() {
        this.speed = 0;
        this.name = this.name;
        Animal.count++;
    }
    run(speed) {
        this.speed = speed;
        document.writeln(`${this.name} бежить со скоростью ${this.speed} км/ч.<br>`);
    }

    stop() {
        this.speed = 0;
        document.writeln(`${this.name} стоит.<br>`); ``
    }
}


let animal1 = new Animal("Мой питомец 1");
let animal2 = new Animal("Мой питомец 2");
// console.log(animal1.name);
// console.log(animal2.name);
console.log(Animal.count);
console.log(Animal2.count); */



/* class User {
    static takenNames = [];

    static isNameTaken(name) {
        return User.takenNames.includes(name);
    }
    constructor(name) {
        this.name = name;
        User.takenNames.push(name);
    }
}
const user1 = new User("Сергей");
const user2 = new User("Марина");
console.log(User.takenNames);
console.log(User.IsNametaken("Сергей"));
console.log(User.IsNametaken("Алексей")); */


/* class MathUtils {
    static PI = 3.141592653589793;

    static sum(...number) {
        return number.reduce((total, num) => total + num, 0);
    }
    static average(...number){
        return MathUtils.sum(...number) / number.length;
    }
}
console.log(MathUtils.PI);
console.log(MathUtils.sum(1, 2, 3, 4));
console.log(MathUtils.average(1, 2, 3, 4)); */


/*
let total = 0;
let num = 2;
0 + 1
1 + 2
3 + 3
6 + 4
10
*/


/* class Task {
    constructor(title) {
        this.title = title;
        this.doneNew = false;
        Task.count++;
        // console.log("Происходит создание задачи");
    }
    static getDefaultTitle() {
        return "Задача";
    }
    get doneNew() {
        return this._done === true ? "Задача выполнена" : "Задача не выполнена";
    }

    set done(value) {
        if (value !== undefined && typeof value == 'boolean') {
            this._done = value;
        } else {
            console.error("Ошибка! Укажите значение true или false");
        }
    }
    complete() {
        this.done = true;
        console.log(`Задача "${this.title}"выполнена`);
    }
}
Task.count = 0;

let task1 = new Task("Выучить JavaScript");
let task2 = new Task("Выучить frameworks");
let tast3 = new Task();

console.log(task1.title);
console.log(task2.title);
console.log(task3.title);

console.log("Созданных задач: " + Task.count);

task2.complete();
console.log(task1.done);
console.log(task2.done);
console.log(task3.done);
 */





/* class Header{
    constructor(image,h1,h2){
        this.src = image;
        this.h1 = h1;
        this.h2 = h2;
        this.out = "";
    }
    render(id){
        this.out = `
        <img src = "${this.src}" alt = "Изображение">
        <h1>${this.h1}</h1>
        <h2>${this.h2}</h2>
        `;
        document.querySelector(`#${id}`).innerHTML= this.out;
    }
}


class HeaderExt extends Header{
    constructor(image, h1,h2,tel){
        super(image,h1,h2);
        this.tel = tel;
    }
    get tel(){
        return this._tel;
    }
    set tel(value){
        let reg = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
        if(reg.test(value)){
            this._tel =value;
        } else {
            alert("Некорректный номер телефона")
        }
    }
    render(id){
        super.render(id);

        this.out += `<h3>${this.tel}</h3>`
        document.querySelector(`#${id}`).innerHTML= this.out;
    }
}

let img = "https://images.icon-icons.com/5777/PNG/96/319604_javascript-file-icon.png";
let header1 = new Header(img, "Заголовок", "Описание");
header1.render("header");

let img2 = "https://images.icon-icons.com/2389/PNG/96/vue_js_logo_icon_144749.png"
let header2 = new Header(img2, "Второй заголовок", "Другое описание");
header2.render("header2");

let img3 = "https://images.icon-icons.com/2107/PNG/96/file_type_ng_component_js_icon_130350.png";
let header3 = new HeaderExt(img3, "Название", "Описание", "7 999 123-45-67");

// header3.tel = "Hello";
header3.render("header-ext"); */






const canvas = document.getElementById("test");
const c = canvas.getContext("2d");

// c.fillStyle = "#369";
// c.fillRect(10, 10, 60, 50);

// c.fillStyle = "#f60";
// c.fillRect(40, 50, 100, 90);

// c.setLineDash([15, 5]);
// c.lineWidth = 4.5;
// c.strokeStyle = "#369";
// c.strokeRect(5, 5, 140, 140);

// c.clearRect(30, 30, 50, 50);


// c.fillRect(20, 20, 160, 160); 
// c.clearRect(50, 50, 100, 100); 
// c.lineWidth = 4.5;
// c.strokeRect(60, 60, 80, 80);

// c.beginPath();
// c.rect(30, 180, 100, 90);
// c.closePath();

// c.fillStyle = "yellow";
// c.strokeStyle = "brown";
// c.fill();
// c.stroke();

// c.clip();

// c.beginPath();
// c.rect(10, 200, 140, 90);
// c.closePath();
// c.stroke();

// c.beginPath();

// c.moveTo(80, 50);
// c.lineTo(100, 80);
// c.lineTo(100, 30);

// c.closePath();
// c.strokeStyle = "brown";
// c.stroke();
// c.fillStyle = "yellow";
// c.fill();

// c.beginPath();
// c.arc(200, 80, 40, 0, Math.PI * 2);
// c.stroke();
// c.closePath();

// c.beginPath();
// c.moveTo(300, 80);
// c.arc(300, 80, 40, 0, Math.PI / 2, true);
// c.closePath();
// c.stroke();

// c.beginPath();
// c.moveTo(310, 90);
// c.arc(310, 90, 40, 0, Math.PI / 2, false);
// c.closePath();
// c.stroke();

// c.beginPath();
// c.moveTo(410, 90);
// c.arc(410, 90, 40, 0, Math.PI);
// c.closePath();
// c.stroke();

// c.beginPath();
// c.moveTo(180, 220);
// c.quadraticCurveTo(230, 160, 290, 220);
// c.closePath();
// c.strokeStyle = "red";
// c.stroke();


// c.beginPath();
// c.moveTo(180, 260);
// c.bezierCurveTo(240, 200, 220, 320, 290, 260);
// c.closePath();
// c.strokeStyle = "red";
// c.stroke();

// c.fillStyle = "blue";
// c.font = "30px Arial";
// c.fillText("Hello World", 160, 30);
// c.strokeText("Hello World", 320, 30);

// c.font = "30px Verdana";
// c.fillStyle = "orange";
// c.textAlign = "center";

// c.shadowOffsetX = 3;
// c.shadowOffsetY = 3;
// c.shadowBlur = 3;
// c.shadowColor = "#AAA";

// c.fillText("Hello World", canvas.width / 2, canvas.height / 2);

// let pic = new Image();
// pic.src = "golden_star.png";
// pic.addEventListener("load", function(){
//     c.drawImage(pic, 150, 100);

//     c.drawImage(pic, 160, 0, 300, 130);
// })

// let gr = c.createLinearGradient(320, 0, 470, 0);

// gr.addColorStop(0, "red");
// gr.addColorStop(0.4, "magenta");
// gr.addColorStop(1, "yellow");

// c.fillStyle = gr;
// c.fillRect(320, 170, 150, 60);

// let st = c.createLinearGradient(320, 0, 470, 0);
// st.addColorStop(0, "yellow");
// st.addColorStop(1, "orange");
// c.strokeStyle = st;
// c.lineWidth = 10;
// c.strokeRect(320, 170, 150, 60);

// let grd = c.createRadialGradient(400, 270, 5, 400, 270, 60);
// grd.addColorStop(0, "red");
// grd.addColorStop(1, "yellow");
// c.fillStyle = grd;
// c.fillRect(320, 240, 150, 60);


// c.shadowOffsetX = 10;
// c.shadowOffsetY = 15;
// c.shadowBlur = 10;
// c.shadowColor = "#0F0";

// let gr = c.createRadialGradient(60, 60, 15, 75, 75, 75);
// gr.addColorStop(0, "#0F0");
// gr.addColorStop(1, "#0DA805");

// c.fillStyle = gr;

// c.beginPath();
// c.arc(75, 75, 75, 0, Math.PI * 2);
// c.closePath();
// c.fill();


// c.fillStyle = "brown";
// c.fillRect(50, 50, 100, 100);

// c.fillStyle = "orange";
// c.globalAlpha = 0.5;
// // c.translate(50, 25);
// // c.rotate(.52);
// c.scale(1.5, 1.5);
// c.fillRect(50, 50, 100, 100);

const w = canvas.width;
const h = canvas.height;

const mouse = { x: 0, y: 0 };
let draw = false;

// нажатие мыши
canvas.addEventListener("mousedown", function (e) {
    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetTop;
    draw = true;
    c.beginPath();
    c.moveTo(mouse.x, mouse.y);
});

// перемещение мыши
canvas.addEventListener("mousemove", function (e) {
    if (draw) {  // draw == true
        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
        c.lineTo(mouse.x, mouse.y);
        c.stroke();
    }
});

// отпускаем мыши
canvas.addEventListener("mouseup", function (e) {
    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetTop;
    c.lineTo(mouse.x, mouse.y);
    c.stroke();
    c.closePath();
    draw = false;
});