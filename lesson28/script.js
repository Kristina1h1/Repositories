/* let st = "Jonn Smith";
let re = /(\w+)\s(\w+)/;
document.writeln(st.replase(re, "$2 $1")); */


/* function add(str){
    return str.replace(/([A-Z])/g, "$1");
}
console.log(add("camelCase"));
console.log(add("helloWorldItIsMe")); */



/* let text = "red color: #F00 and green: #090";
let ex = /(#[a-f0-9]{3})/ig;
text = text.replace(ex, "<span style='color:$1'>$1</span>");
document.writeln("<p>" + text + "</p>"); */



/* let text = "I like htmlbook.ru and yandex.com.ru";
let ex = /(([a-z0-9-]{2,}\.)+([a-z]{2,4}))/ig;
text = text.replace(ex, "<a href='http://$&'>$&</a>");
document.writeln("<p>" + text + "</p>"); */


/* let st = "-1.5 0 2 -123.4.";
//Чтобы найти в строке и отрицательные и положительные числа поставим сначала "-"
//Следующим символом будет "?" так как шаблон должен находить отрицательные и положительные числа
//Теперь нужно найти в строке все целые числа от 0 до 9. Для этого запишем шорткат \d+ чтобы найти более 1 числа
//Теперь найдем дробную часть (...)
//точку группируем вместе с дробной частью, потому что должны находиться и целые числа то есть точка должна быть необязательной
//затем пишем поиск чисел от 0 до 9, не только одно числа а возможно и несколько "+"
//после скобок нужно указать ?, чтобы находить не только дробные числа но и целые
//в конце нужно поставить флаг g чтобы отыскать все совпадения.
let reg = /-?\d+(?:\.\d+)?/g;
document.writeln(st.match(reg) + "<br>"); // -1.5,0,2,-123.4
//получить целые нецелые отрицательные числа без точки в конце. */





/* function formatPhoneNumber(phone){
    // Удаляем все НЕцифровые символы (оставляем только цифры)
    let cleaned = phone.replace(/\D/g, "");
    // Форматируем: первые 1 цифра, затем 3, затем 3, затем 2, затем 2
    return cleaned.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, "$1 ($2) $3-$4-$5");
}

console.log(formatPhoneNumber("+7 999 1234567"));   // 7 (999) 123-45-67
console.log(formatPhoneNumber("8 999 1234567"));    // 7 (999) 123-45-67
console.log(formatPhoneNumber("999 1234567"));      // 7 (999) 123-45-67
console.log(formatPhoneNumber("79991234567"));      // 7 (999) 123-45-67
console.log(formatPhoneNumber("7(999)123 45 67"));  // 7 (999) 123-45-67 */




/* document.writeln("Люблю HTML".replace(/HTML/, "$& и JavaScript"));



let st = `Он сказал: "I'm at home".`;
let re = /(\["\])(.*)\1/g;
let re = /(?<quote>[""])(.*)\k<quote>/g;
document.writeln(st.match(re) + "<br>"); // "I'm at home"

let st = "1 курс стоит 30 py6";
document.writeln(st.match(/\d+(?= py6)/g) + "<br>");
document.writeln(st.match(/\d+(?= py6)/g) + "</br>"); */



/* let st = "1 курс стоит $30";
document.writeln(st.match(/(?<=$)\d+/g) + "<br>");
document.writeln(st.match(/(?<!\$)\d+/g) + "<br>"); */




/* //(?=.*...)
function isValidPassword(psw){
    let pswEx = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,})$/;
    return pswEx.test(psw);
}

console.log(isValidPassword("Qwerqwee!#"));//false
console.log(isValidPassword("$qwERqq5qq"));//true */



/* let but = document.querySelector("#but");
but.addEventListener("click", smsUser);

function smsUser(){
    let name = document.querySelector("#your_name").value;
    let text = document.querySelector("#text").value;
    let regExpBBMail = /([\w.]+@[0-9a-z_\.]+\.[a-z]{2,3})/ig;
    // console.log(reg);
    text = text.replace(regExpBBMail, "<span style='color:red'>$1</span>");

    // document.writeIn(`
    // <fieldset>
    // <legend>${name}</legend>
    // <div>${text}</div>
    // </fieldset>
    // `);
    let form = document.querySelector("form");
form.insertAdjacentHTML("afterend", `<fieldset>
        <legend>${name}</legend>
        <div>${text}</div>
    </fieldset> `);
} */


    // let st = " текст строки первой ";
// st = st.replace(/^\\s+|\\s+\$/g, "");
// console.log(">" + st + "<");

let date = "25-10-2026, 14/09/2025, 10.03.2022, 12:02:2014";
let re = date.split(/[-\/,.:]/);
console.log(re);