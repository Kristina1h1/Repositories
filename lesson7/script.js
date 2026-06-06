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


// let n = +prompt("Введите количество элементов массива: ");
// let mas = new Array(n);

// for(let i = 0; i < mas.length; i++){
//     mas[i]= prompt("->");
// }

// console.log(mas);

// for(let i = 0; i < mas.length; i++){
//     if(mas[i]> mas [i - 1]){
//     document.writeln(mas[i]+ " ");
// }
// }



// let mas = [49, 22, 13, 31, 43, 22, 10, 20, 28, 10, 40, 49, 38, 30, 48, 48, 31, 38, 35, 25];

// let sum = 0;
// let count = 0; 

// for (let i = 0; i < mas.length; i++) {
//     if (mas[i] % 2 === 0) {
//         count++;
//     } else {
//         sum += mas[i];
//     }
// }


// document.writeln("Количество четных элементов массива: " + count + "<br>");
// document.writeln("Сумма нечетных элементов: " + sum);


// let arr = [2, 6, 7, "Kristina", true, 1.5];
// console.log(arr);
// letsum = 0;

// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// document.writeln(sum + "<br>");


// let mas = [[2, 1, 1], [6, 3, 7], [8, 5, 6]];
// console.log(mas);
// console.table(mas);
// document.writeIn(mas[1][2]);
// document.writeIn(mas[0][2][1]);

// for (let i = 0; i < mas.length; i++) {
//     for (let j = 0; j < mas[i].length; j++){
//         document.writeln(mas[i][j] + " ");
//     }
//         document.writeln(mas[i] + "<br>");
// }


// let mas = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];

// for (let i = 0; i < mas.length; i++) {
//     for (let j = 0; j < mas[i].length; j++) {
//         document.writeln(mas[i][j] + " - - - ");
//     }
// }

// document.writeln("<br>");

// console.log(mas.length); // 3
// document.writeln("<br>");

// for (let i = 0; i < mas.length; i++) {
//     for (let j = 0; j < mas[i].length; j++) {
//         document.writeln(mas[i][j] ** 2 + " - - - ");
//     }
// }

// document.writeln("<br>");


let questions = ["На ноль делить можно?", "Волга впадает в Каспийское море?", "Атмосферное давление увеличивается с высотой?", "2x2 будет 8?", "Дельфины - это рыбы?", "Мадонна - это настоящее имя певицы?", "Первая мировая война началась 1 сентября 1939 года?"];
let answers = [false, true, false, false, false, false, false];
let sum = 0;
let res = new Array();

for(let i = 0; i < questions.length; i++){
    let answer = confirm(questions[i]);
    if(answer == answers[i]){
        res[i] = 10;
        sum += res[i];
    } else {
        res[i] = 0;
    }
}

console.log(res);
console.log(sum);