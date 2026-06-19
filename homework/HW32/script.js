//задача 1
/* function Person(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;

this.who = function(){
    return `Я ${this.name} мне ${this.age} лет. Я работаю ${this.job}.`;
};
}

const person1 = new Person("Дмитрий", 26, "Дизайнером");
const person2 = new Person("Станислав", 29, "Программистом");
const person3 = new Person("Сергей", 35, "Менеджером");

console.log(person1.who());
console.log(person2.who());
console.log(person3.who()); */


//задача 2

function Automobile(color, model, year, manufact) {
    this.color = color;
    this.model = model;
    this.year = year;
    this.manufact = manufact;

    this.whatColor = function () {
        return `Цвет машины: ${this.color}`;
    };

    this.autoInfo = function () {
        return `Модель машины: ${this.model}\nГод выпуска: ${this.year}\nПроизводитель автомобиля: ${this.manufact}`;
    };
};

const car1 = new Automobile("Красный", "Nisan Skyline", 2007, "Nissan");
const car2 = new Automobile("Черный", "Toyota Corolla", 2009, "Toyota");
const car3 = new Automobile("Синий", "Volkswagen Golf", 2009, "Volkswagen");

console.log(car1.whatColor() + "\n" + car1.autoInfo() + "\n");
console.log(car2.whatColor() + "\n" + car2.autoInfo() + "\n");
console.log(car3.whatColor() + "\n" + car3.autoInfo());

