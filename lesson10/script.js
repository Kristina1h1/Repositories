// let k = prompt("Введите индекс для удаления");
// // delete mas[k];
// if (k >= 0 && k < mas.length) {
//     mas.splice(k, 1);
// } else {
//     alert("Недопустимый индекс");
// }
// for (let el of mas) {
//     document.writeIn(el + " ");
// }


// let index = jsx.indexOf("сложный");// возвращает первый индекс, по которому данный элемент может быть найден в массивах, или "-1", если элемент не найден
// console.log(index);

// js.push("сложный");
// console.log(js);

// let index1 = js.indexOf("сложный", index + 1); // второй параметр указывает начальный индекс для поиска
// console.log(index1);

// let index2 = js.lastIndexOf("сложный");
// console.log(index2);


// let isValue = js.includes("интересный"); //проверяет, содержит ли массив определенное значение
// console.log(isValue);

// let str = js.join(" "); //объединяет все элементы массива в строку через символ разделитель (объединитель)
// console.log(str); //показал, что это строка

// js.reverse(); //меняет порядок следования элемента массива на обратный
// console.log(js);

// //необходимо найти уникальные элементы массива
// let array = [7, 4, 1, 4, 7, 4, 1, 4, 7, 7, 1, 4];
// let res = [];

// for(let el of array){
//     if(!res.includes(el)){//если массив res не включает элемент
//         res.push(el); //добавь элемент в переменную res
//     }
// }

// for(let el of res){
//     document.writeln(el + " ");
// }

//запросить у пользователя ФИО (массив) => ФИО (строка с пробелами между словами)

// let st = ["Фамилия", "Имя", "Отчество"]
// let fio = new Array(3);

// for(let i = 0; i<fio.length; i++){
//     fio[i] = prompt("Введите данные: ");
// }

// alert(fio.join(" "));



// let people = ["Tom","Bob", ["Alice","Kate", ["Sam", "Ann"]]];

// let arr = people.flat(2);//упрощает массив с учетом указанной вложенности элементов
// console.log(arr);

// let a = [1, 2];
// let b = a.concat(3,4); //создает новый массив, объединяющий несколько массивов, либо в массив добавляются элементыe.log(b);
// let c = ['a','b', 'c'];
// let num = a.concat(b, c );
// console.log(num);

// let users = ["Tom","Bob", "Alice","Kate","Sam", "Ann"];
// // let modified = users.with(0, "Tomas");// изменяет элемент массива, но при этом сохраняет старое состояние исходного массива

// console.log(users);
// // console.log(modified);

// console.log(users.sort());


// let firstName = prompt("Как вас зовут:");
// let favorite = "";
// let arr = [];//массив где сохраняем данные
// while (favorite != null) {
//     favorite = prompt("Введите любимое имя:");
//     arr.push(favorite);
// }
// arr[arr.length - 1] = firstName;
// arr.soft();

// console.log(arr);
// let index = arr.indexOf(firstName);
// console.log(index);

// for (let i = 0; i < arr.length; i++) {
//     if(i == index){
//         document.writeln("<span style='color: blue; text-decoration: underline;'>" + arr[i] + "</span>");
//     } else{
//         document.writeln(arr[i] + " ");
//     }
// }

// let n = [1, 5, 15, 2];
// n.sort((a, b) => a - b);
// console.log(n);

// // ["1", "5", "15", "2"]
// // ["1", "15", "2", "5"]



// Function Declaration

// function имя(аргументы){
//     тело функции
// }

// function hello(name) {
//    document.writeln("Hello, " + name + "<br>");
// }

// hello("Igor");
// hello("Irina"); // папаметр

// function caption() {
//     for (let i = 1; i <= 6; i++) {
//         document.writeln("<h" + i + ">Заголовок " + i + "</h" + i + ">");
//     }
// }

// caption();

// function test(a, b, c) { //abc это переменные локальные
//     // alert(a + b + c); //10+20+30
//     let res = a+b+c;
//     return res;
// }
// let n1 = 10, n2 = 20, n3 = 30, m1 = 1, m2 = 2, m3 = 3;
// let sum = test(n1, n2, n3); // 60
// // let sum = 60; // 60
// // test(m1, m2, m3); // 6
// console.log(sum);


// function test2(n,m){
//     if(m==0){
//         return "Делить на 0 нельзя";
//     }
//     return n/m;
// }

// let a1 = test2(10,2);
// let a2 = test2(10,0);

// alert(a1);
// alert(a2);

// Попросить пользователя ввести два числа, если первое число больше второго, то найти разность этих чисел, а второе число больше первого найти сумму чисел.

// function result(n, m) {
//     if (n > m) {
//         return n - m;
//     } else {
//         return n + m;
//     }
// }

// let a = +prompt("Введите первое число");
// let b = +prompt("Введите второе число");
// let res = result(a, b); //вызов функции
// alert(res);

//создать функцию для вычисления суммы элементов массива

// function sum(arr){
//     let res = 0;
//     for(let i=0; i<arr.lenght; i++){
//         res+=arr[i];
//     }
//     return res;
// }

// document.writeln(sum([3,8,9,4,1,2,5]) + "<br>");
// document.writeln(sum([1,2,5]) + "<br>");


// Создать функцию для нахождения большего из двух чисел, учитывая, что числа могут быть равны


// function max(n,m){
//     if (n>m){
//     return n;
//     }else {
//         return m;
//     }
// }
// document.writeln(max(5,2) + "<br>");
// document.writeln(max(2,6) + "<br>");
// document.writeln(max(5,5) + "<br>");

// еще вариант:
// function max(a, b) {
//     if (a > b) {
//         document.writeln("Большее число: " + a + "<br>");
//     }
//     else if (a == b) {
//         document.writeln("Числа равны")
//     }
//     else {
//         document.writeln("Большее число: " + b + "<br>");
//     }
// }

// max(5, 2); // Большее число: 5
// max(2, 5); // Большее число: 5
// max(5, 5); // Числа равны


