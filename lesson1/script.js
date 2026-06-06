/* let firstName = "Admin";  //var, let, const старое, новое, новое
console.log(firstName); */ /* блочный комментарий  shift+alt+a */

/* let age = 25;
console.log(age); */

/* let lastName = "Hello"; (тип данных string: строковая )
console.log(lastName); */

/* let middleName = "World";
console.log(middleName); */



/* let a = 5.4; // переменная 5.4 (тип данных number: числовая )
console.log(a, typeof (a)); // вывели переменную и функцию typeof, которая покажет тип данных этой переменной 
console.log(a, typeof a); */



/* let b = 5;  // создание переменной и присвоение первоначального значения (инициализация)
b = 10;
b = "Hello"; 
console.log(b, typeof b);*/



/* let a;
a = 10;
a = "Hello";
console.log(a); */




/* let str1 = "Двойные\
кавычки ";
let str2 = 'Одинарные \n кавычки'; //  \n сделал перенос на другую строку
console.log(str1 + str2); //конкатенация строк (объединение строк в одну) 
console.log(str1 + " " + str2); // + это оператор */



/* let str = "Данные для входа: \nВаш логин:\"Admin\""; //экранирование кавычек
console.log(str); */



// let str1 = "Новый\tтекст."; //отступ делает
// console.log(str1);



/* let a = 5; //переменная
let str = `Обратные ${a} ${a + 2}
кавычки`; // переменная а работает только в фигурных скобках с символом доллара
console.log (str); */


/* let firstName = "Bubu"
// alert("Hello, " + firstName);
alert(`Hello, ${firstName}`); */




/* let day = 365;
let earth = "Земля";
let people = "7 млрд.";
let sun = "Солнца";

alert(`Мы живем на планете ${earth}, она делает один оборот вокруг ${sun} за ${day} дней. Население нашей планеты составляет примерно ${people} человек.`)

alert("Мы живем на планете " + earth + ", она делает один оборот вокруг " + sun + "  за " + day + " дней. Население нашей планеты составляет примерно " + people + " человек.") */




/* const WEEK = 7; // не можем изменить переменную, которая обьявлена как константа(неизменяемая)
WEEK = 9; // ошибка
console.log(WEEK); */





/* let res = confirm("Знаете ли вы HTML?"); //confirm модальное окно
console.log(res);
if (res) {
    alert("Пора учить JavaScript");
} else{
    alert("Нужно выучить HTML");
} */



/* OK => true // тип данных boolean: true, false
Отмена => false */


// console.log(5 > 2);



/* let a = null; // тип данных: null (первоначальное значение)
console.log (a, typeof a); */




/* let res = prompt("Ваше имя", "Кристина");
alert(`Привет ${res}!`);
console.log(res);

OK => Кристина
Отмена => null */





/* let a = 12;
let b = 8;
console.log("+:", a + b);
console.log("-:", a - b);
console.log("*:", a * b);
console.log("/:", a / b);
console.log("**:", a ** b); // возведение в степень
console.log("%:", a % b); // остаток от деления на ... (четное делится на два =(0)) */



// Написать программу нахождения суммы, произведения и среднего арифметического трех чисел: 5, 7, 3  Сумма: 15  Произведение: 105  Среднее арифметическое: 5.0 //

/* let num1 = +prompt("Введите первое число", 5);
let num2 =  parseInt("Введите второе число", 7); 
let num3 =  Number("Введите третье число", 3);

let sum = num1 + num2 + num3;
console.log("Сумма: ", num1 + num2 + num3);
console.log("Произведение: ", num1 * num2 * num3);
console.log("Среднее арифметическое: ", sum / 3); */


/* let num1 = prompt("Введите первое число", 5);
console.log(num1, typeof num1); */




/* console.log(parseInt("21.84")); //21  parseInt преобразует в целое число
console.log(parseFloat("21.84")); //21.84 parseFloat сохраняет  или извлекает дробную часть
console.log(Number("21.84")); //21.84
console.log(Number("21.8457647564").toFixed(3)); //21.845 toFixed покажет после точки заданное количество символов и используется в конце, потому что преобразует назад числовое значение в строковое

console.log(+"21.84"); // + преобразует из строки с число
console.log(+1 * "21.84");

console.log("6" * "3"); // 18 */




/* let a = 23;
let b = +"6";

console.log("Результат: "+ (a + b)); */






//Описание: Пользователь вводит число. Необходимо вывести это число в квадрате, кубе, 4й степени. Пример: Введите число: 4;  Квадрат числа: 16;  Куб числа: 64; 4-я степень числа: 256.

/* let a = prompt("Введите число", 4);

console.log("Квадрат числа: " + a ** 2);
console.log("Куб числа: " + a ** 3);
console.log("4-ая степень числа: " + a ** 4); */





/* let num = 4321 //432
let one, two, three, four;

console.log(num);

one = num % 10; //1
console.log(one);
parseInt(num / 10);
num = parseInt(num / 10); //432
two = num % 10; //2
console.log(two);
num = parseInt(num / 10); //43
three = num % 10; //3
console.log(three);
four = parseInt(num / 10);
four = num % 10; //4
console.log(four);

console.log(one * 1000 + two * 100 + three * 10 + four); */






















