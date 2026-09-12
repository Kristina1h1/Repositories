
/* class User {
    constructor(name = 'Гость', role = 'viewer', isActive = false) {
        this.name = name;
        this.role = role;
        this.isActive = isActive;
        this.createdAt = new Date();
    }

    activate() {
        this.isActive = true;
        return `Пользователь ${this.name} активирован`;
    }
}

const admin = new User('Админ', 'admin', true);
const guest = new User();
console.log(guest.activate());

console.log(admin);
console.log(guest); */



/* class Person{
    #name;
    #age;
    constructor(name, age){
        this.#name = name;
        this.#age = age;
    }
    set age(year){
        if(year >0 && year <110){
        this.#age = year;
    }
    }
    get age(){
        return this.#age;
    }
    print(){
        console.log(`Name: ${this.#name}Age: ${this.#age}`);
    }
}

const tom = new Person("Tom", 37);
tom.print();
tom.age = 22;
// tom.#name = "Sam";
tom.age = -45;
tom.print();
console.log(tom.age); */


/* const sam = new Person("Sam");
sam.print();
sam.age = -78;
sam.print();
console.log(sam.age); */




/* class User{
    constructor(login){
    this.login = login;
    }
    get login(){
        return this.login;
    }

    set login(value){
    if(value.length < 6){
    console.log("Логин слишком короткий");
    return
    }
    this._login = value;
    }
}

let user = new User("administrator");
// console.log(user.login);
console.log(user.getLogin());

// user.login = "admin_admin";
user.setLogin('admin_admin');
// console.log(user.login);
console.log(user.getLogin()); */


/* class Person {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    get fullName() {
        return this._firstName + " " + this._lastName;
    }

    set fullName(value) {
        [this._firstName, this._lastName] = value.split(/\s+/)
    }
}

let people = new Person("Сергей", "Михайлов");
document.writeln(people.fullName + "<br>");
people.fullName = "Анна Петрова";
document.writeln(people.fullName + "<br>"); */



/* class Mail {
    constructor(sender) {
        this._sender = sender;
    }

    get sender() {
        return "Почта: " + this._sender;
    }

    set sender(val) {
        this._sender = val.toLowerCase();
    }
}

const m = new Mail("test@Mail.ru");
m.sender = "MyTest@MAIL.ru";
document.writeln(m._sender); */

class Worker {
    constructor(name, surname, rate, days) {
        this._name = name;
        this._surname = surname;
        this._rate = rate;
        this._days = days;
    }
    get name() {
        return this._name;
    }

    get surname() {
        return this._surname;
    }

    get getFullName() {
        return this._surname + " " + this._name;
    }
    get rate() {
        return this._rate;
    }

    get days() {
        return this._days;
    }

    getSalary() {
        return this.rate * this.days;
    }
}

const worker = new Worker("Иван", "Иванов", 10, 31);
console.log(worker.name);
console.log(worker.surname);
console.log(worker.getFullName);
console.log(worker.rate);
console.log(worker.days);
console.log(worker.getSalary());




/* class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }

    run(speed) {
        this.speed = speed;
        document.writeln(`${this.name} бежит со скоростью ${this.speed} км/ч. <br>`);
    }
    stop() {
        this.speed = 0;
        document.writeln(`${this.name} стоит. <br>`);
    }
} */




/* class Rabbit extends Animal {
    constructor(name) {
        super(name);
        this.earLength = this.earLength;


    }
    hide() {
        document.writeln(`${this.name} прячется!<br>`);
    }
    stop() {
        this.hide();
        this.hide();
        // console.log("Переопределенный метод");
    }
} */




/* let animal = new Animal("Мой питомец");
animal.run(80);
animal.stop();

let rabbit = new Rabbit("Белый кролик", 10);
rabbit.run(5);
rabbit.hide();
rabbit.stop();
document.writeln(rabbit.name + "<br>");
document.writeln(rabbit.earLength + "<br>"); */




/* class Shape {
    constructor(name) {
        this.name = name;
    }
    calculateArea() {
        throw new Error("Метод calculate должен быть реализован");
    }

    describe() {
        console.log(`Это ${this.name} с помощью ${this.calculateArea()}`)
    }
}

class Circle extends Shape {
    constructor(name, radius) {
        super(name);
        this.radius = radius;
    }

    calculateArea() {
        return (Math.PI * this.radius ** 2).toFixed(2);
    }
}

const circle = new Circle("Круг", 5);
circle.describe(); */
