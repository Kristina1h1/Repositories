/* let a = 0, b = 0;
let c = ++a; //a = a + 1; префиксный элемент
console.log(a); //1
console.log(c); //1
 let d = b++; //b = b+1; постфиксный элемент
console.log(b); //1
console.log(d); //0 */


/* let a = 0, b = 0;
let c = a++ +2; //c = 0+2 a = 1
let d = ++b +2; //d = 1+2 b =1
console.log(a); //1
console.log(b); //1
console.log(c); //2
console.log(d); //3 */


/* let a = 1;
let b = a++;
let c = b+5+a;// c = 1 +5 +2
console.log(c); //8 */


/* let a = 1;
let b = ++a;
let c = b+5+a;  // c = 2 +5 +2
console.log(c); //9 */



/* 
let a = 3;
a +=5; // a = a+5;
console.log(a);  // 8 

a -=3; //a=a-3
console.log(a); //5 

a**=2; 
console.log(a); //25 */




/* let a = +prompt("Введите 1 число", 5);
let b = +prompt("Введите 2 число", 4);
let c = +prompt("Введите 3 число", 6);
let sum = a+b+c;
console.log("Сумма чисел: "+sum); */



/* let sum = +prompt("Введите 1 число", 5);
sum += +prompt("Введите 2 число", 4);
sum+= +prompt("Введите 3 число", 6);
console.log("Сумма чисел: "+sum); */


/* console.log(5 == "5"); //true
console.log(5 === "5"); //false


console.log(5 != "5"); //false
console.log (5 !=="5"); //true */




/* console.log(5>3);
console.log(5<3);
console.log(5>=5);
console.log(5<=5);
==============================================================================================================//
console.log(+true); //1
console.log(+false); //0
==============================================================================================================//
let a = 5+ true; //5+1
console.log(a);

let b = 5 + false; //5+0
console.log(b); */




/* 7>3 ? alert("Кто здесь?") : alert("3");
let age = prompt("Введите возраст");
age >= 18 ? alert("Совершеннолетний") : alert("Несовершеннолетний"); // тернарный оператор*/




/* let ch = prompt("Угадайте число от 1 до 10");
let num = 3;
// ch==num ? alert("Угадали") : alert("Не угадали");
ch == num ? alert("Угадали") : ch < num ? alert("Загаданное число больше") : alert("Загаданное число меньше"); */




/* let temp = prompt("Введите температуру");

let res = temp > 30 ? "Очень жарко"
:temp > 20 ? "Тепло"
: temp > 10? "Прохладно"
: temp > 0 ? "Холодно"
: "Очень холодно";

alert(res); */



/* if (условие){ // оператор логического ветвления
    истина (TRUE)
} else{
    ложь (FALSE)
} */



/* let a = 12;
let b = 6;

if(b !=0){
    let res = a/b;
    alert("Результат: " + res);
}else {
    alert("Делить на \"0\" нельзя"); // экранирование нуля \"0\"
} */




/* let value = prompt("Введите число");

if(value % 2 == 0){ // этот вариант лучше, можно сделать множество условий
    alert("Число четное");
}else{
    alert("Число не четное");
}

if(value % 2 == 0) // такой вариант только к одному
    alert("Число четное");
else
    alert("Число не четное"); */




/* let a = 12;
let b = 6;
if (a>b){
    alert(a+">" +b);
}
if(a==b){
    alert(a+"==" +b);
}
if{
    alert(a+"<"+b);
} */


/* let a = 12;
let b = 6;
if (a > b) {
    alert(a + ">" + b);
}
else if (a == b) {
    alert(a + "==" + b);
}
else {
    alert(a + "<" + b);
} */





/* let day = prompt("Введите день недели (цифрами)");

if(day==1){
    alert("День недели - понедельник");
}
else if(day==2){
    alert("День недели - вторник");
}
else if(day==3){
    alert("День недели - среда");
}
else if(day==4){
    alert("День недели - четверг");
}
else if(day==5){
    alert("День недели - пятница");
}
else if(day==6){
    alert("День недели - суббота");
}
else if(day==7){
    alert("День недели - воскресенье");
}
else{
    alert("Такого дня недели не существует");
} */



//===========================================================================
//false=> "", 0, null, underuned, NaN, false
//==========================================================================


/* let a = null
// let a = "Привет"; //true

if(a){
    console.log("TRUE");
}else{
    console.log("FALSE");
}
console.log (a); */





/* let login = prompt("Введите логин:");

if (login) {
    if (login == "admin") { // тут одна табуляция
        let pas = prompt("Введите пароль:"); // тут две 
        if (pas) {
            if ("pas==password") { // тут три
                alert("Добро пожаловать"); // тут четыре
            } else {
                alert("Пароль неверен");
            }
        } else {
            alert("Вход отменен");
        }
    } else {
        alert("Я вас не знаю")
    }
} else {
    alert("Вход отменен");
} */