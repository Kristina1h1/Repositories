// let i = 0;
// while(i<4){
//     document.writeln("+++<br>");

//     let j = 0;
//     while(j<2){
//         document.writeln("--<br>");
//         j++;
//     }
//     i++
// }


// for (let i = 0; i < 4; i++) {
//     document.writeln("+++<br>");
//     for (let j = 0; j < 2; j++) {
//         document.writeln("-<-<br>");
//     }
// }


// let symbol = prompt("Введите символ: ", "*");
// let tr = prompt("Введите количество строк: ");
// let td = prompt("Введите количество столбцов: ");
// document.writeln("<table border='1' width='150'>");
// for(let i = 0; i<tr; i++){
//     document.writeln("<tr align='center'>");
//     for (let j = 0; j<td; j++){
//         document.writeln("<td>" + symbol + "</td>");
//     }
//     document.writeln("</tr>");
// }
// document.writeln("</table>");



// document.writeln("<table border='1' width='150' aling='center'>");
// for (let i = 1; i < 11; i++) {
//     document.writeln("<tr align='center'>");
//     for (let j = 1; j < 11; j++) {
//         if ((i + j) % 2 == 0) {
//             document.writeln("<td bgcolor='red'>" + i * j + "</td>");
//         } else {
//             document.writeln("<td bgcolor='yellow'>" + i * j + "</td>");
//         }
//     }
//     document.writeln("</tr>");
// }
// document.writeln("</table>");


// Массивы
// let a = 2;
// let b = 6;
// let c = 8;

// let mas = [2, 6, 8];
// document.writeln(mas[2]);
// console.log(mas);


// let mas1 = [5]; // массив на 1 элемент со значением 5
// console.log(mas1);


// let mas2 = new Array(2, 6, 8);
// console.log(mas2);

// let mas3 = new Array(5); //массив на пять элементов, но без значений
// console.log(mas3);

// let mas = [2, 6, 8];
// document.writeln(mas[2]);
// console.log(mas);
// document.writeln(mas.length);

// let arr = [1,2,3,4,5,6];
// document.writeln(arr + "<br>");
// document.writeln(arr.length + "<br>");

// arr.length = 3;
// document.writeln(arr + "<br>");
// document.writeln(arr.length + "<br>");


// arr.length = 6;
// document.writeln(arr + "<br>");
// document.writeln(arr.length + "<br>");
// document.writeln(arr[4] + "<br>");
// console.log(arr);

// arr.length = 0;
// document.writeln( "Пустой массив: " + arr + "<br>");
// document.writeln(arr.length + "<br>");
// console.log(arr);
/////////////////////////////////////////////////////////////////////////////
// последний индекс массива = длина массива -1
// length = последний индекс массива +1
/////////////////////////////////////////////////////////////////////////////


// let arr1 = [1,2,3,4,5,6];
// document.writeln(arr + "<br>");
// document.writeln(arr1[arr1.length - 1]  + "<br>");
// console.log(arr1 + [7,8,9]);

// let arr = [5, 9, -3, -1, 4, -8, 7, 2, -6];
// for (let i = 0; i < arr.length; i++) {
//     document.writeln(arr[i] + 2 +"<br>")
// }


// Заменить все отрицательные значения элемента массива их модулями
// let arr = [5, 9, -3, -1, 4, -8, 7, 2, -6];
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]< 0){
//         arr[i]*= -1; // arr[i]= arr[i] * -1;
//     }
//     document.writeln(arr[i] +"<br>");
// }
// console.table(arr);


// Посчитать в массиве сумму всех отрицательных эллементов

// let arr = [5, 9, -3, -1, 4, -8, 7, 2, -6];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//         document.writeln(arr[i] + "<br>");
//         sum += arr[i];
//     }
// }
// document.writeln(sum + "<br>");


// let arr = new Array(); // []
// arr[0] = 15;
// arr[1] = 6;
// arr[2] = 8;
// arr[3] = 23;

// arr[6] = 28;

// console.log(arr);



// // let arr = new Array(5);
// let arr = [0,0,0,0,0];
// for(let i = 0; i <arr.length; i++){
//     arr[i] = prompt ("Введите " + (i + 1) + "элемент массива: ");
// }
// document.writeln(arr + "<br>");


// for (let i = 0; i < arr.length; i++) {
//     arr[i] = prompt("Введите " + (i + 1) + "элемент массива: ");
// }
// document.writeln(arr + "<br>");
// console.log(arr);
// for (let i = arr.length - 1; i >= 0; i--) {
//     document.writeln(arr[i] + "");
// }

// let arr = ['a', 'b', 'c'];

// arr[0] = arr[0] + "!";
// arr[1] = arr[1] + "!!";
// arr[2] = arr[2] + "!!!";

// console.log(arr);


// let arr = [1,2,3,4];

// arr[0]++;
// ++arr[1];
// arr[2]--;
// --arr[3];

// console.log(arr);



// let n = +prompt("Введите количество элементов массива: ", 4);
// let mas = new Array(n);
// for (let i = 0; i < n; i++) {
//     if (n > 5) {
//         mas[i] = 0;
//     }else {
//         mas[i]=prompt("->");
//     }
// }

// console.log(mas);