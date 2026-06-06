

/* document.getElementById("slider").addEventListener("input", function (){
    document.getElementById('slider-value').textContent = this.value;
}); */




/* let tds = document.querySelectorAll("td");

for(let i = 0; i < tds.length; i++) {
    tds[i].addEventListener("click", function func(){
        let input = document.createElement("input");
        input.value = this.innerHTML;
        this.innerHTML = '';
        this.append(input);

        let td = this;
        input.addEventListener('blur', function(){
            td.innerHTML = this.value;
            td.addEventListener("click", func);
        })

        this.removeEventListener("click", func)
    })
} */


/* let userInput = document.getElementById("userInput");
let name = document.getElementById("displayName");

userInput.addEventListener("input", function(){
    name.textContent = this.value || "Гость";
}) */





/* let form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
    // if (!form.checkValidity()) {
    // event.preventDefault();
    // alert("Заполните все поля корректно");
    // }

    let username = form.username.value;
    let password = form.password.value;

    // let formData = new FormData(form);
    // console.log(formData.get("username"));
    // console.log(formData.get("password"));
    // console.log(formData);

    if (username.length < 3) {
        event.preventDefault();
        alert("Имя пользователя должно быть более 3 символов")
    }

    if (password.length < 6) {
        event.preventDefault();
        alert("Пароль должен быть более 6 символов");
    }
}) */

/* Методы:
search - возвращает позицию, на которой регулярное выражение совпадает с вызывающей строкой, или "-1", если совпадений нет

match - получит все совпадения с регулярным выражением

replace - поиск и замена

split - делит строку на массивы, разбивая ее по указанной подстроке

test - выполняет поиск совпадения с регулярного выражения со строкой. Возвращает true или false
*/


/* Синтаксис записи:
let regexp = new RegExp("шаблон", "флаги");
let regexp = /шаблон/флаги;
*/


let str = "Я ищу совпадения в 2026 ^ году 789535678 Hello_World ё";
let regexp = /2026/;
document.writeIn(str + "<br>");
// document.writeIn(str.search(regexp) + "<br>");
// document.writeIn(str.match(regexp) + "<br>");
// document.writeIn(regexp.test(str) + "<br>");


/* Флаги
g (global) - ищет все совпадения с шаблоном поиска
(глобальный поиск)
i (ignoreCase) - регистрозависимый поиск
*/
// let regexp = /[а]/gi;

/* Диапазон
[0-9] - любая цифра от 0 по 9, [1-6]
*/

/* // let regexp = /[1-6\]/gi;
// let regexp = /[А-Яа-я]/g;
// let regexp = /[A-Za-z]/g;
let regexp = /[А-яЁё]/g;
// let regexp = /[A-Za-z]/g; 

document.writeIn(str.match(regexp) + "<br>");


console.log("Ё", "Ё".codePointAt(0)); // 1025
console.log("A", "A".codePointAt(0)); // 1040
console.log("Я", "Я".codePointAt(0)); // 1071
console.log("а", "а".codePointAt(0)); // 1072
console.log("я", "я".codePointAt(0)); // 1103
console.log("ё", "ё".codePointAt(0)); // 1105 */

/* function lowerCase(str){
    return str.replace(/[А-Я]/g, u => u.toLowerCase());
}

console.log(lowerCase("Несколько слов")); */

// [^абс] - исключающий диапазон, ни один из указанных символов

// let regexp = /[^0-9]/g;

/*
{3} - количество символов идущих подряд
{1,} - от 1 до бесконечного количества повторений
{2, 5} - от 2 до 5 повторений
*/

// let regexp = /[0-9]{2,5}/g;
// document.writeIn(str.match(regexp) + "<br>");

let html = `
    <table>
        <tr>
            <td bgcolor="#CCC">
                <img src="222.png"/>
            </td>
            <td bgcolor="#003399">
                <img src="af3.png"/>
            </td>
            <td bgcolor="#00ccdd">
                <img src="fff.png"/>
            </td>
        </tr>
    </table>
    `;

    let exp = /#([0-9a-f]{3}){1,2}/ig;
    console.log(html.match(exp));


    /*
\d (digit) - любая цифра
\s (space) - пробельный символ, включая табуляцию и перевод строки
\w (word) - любая цифра, буква и символ подчеркивания
*/



let regexp = /w/g;
document .writeln(str.match(regexp) + "<br>");




let st = "Это пример строки    несколько проблемами";
let reg = "шаблон";

let result = ...;
console.log(result); // Это_пример_строки_с_нескольким_пробелами



