let form = document.querySelector("form");
console.log(form.length);
console.log(form.elements);
console.log(form.name);
console.log(form.action);
console.log(form.method);





/* document.form1.style.background = "silver";

document.forms[0].style.margin = "20px"; //псевдо-массив forms
document.forms["form1"].style.padding = "16px";
document.forms.form1.style.border = "2px dotted gray"; */



/* let form = document.querySelector("form");
console.log(form.elements);

let key = form.elements[0];
console.log(key);

let key2 = form.elements["name1"];
console.log(key2); */




/* document.form1.name1.style.color = "blue";
document.form1["name1"].style.background = "aqua";

let txt = document.querySelector("#text1");
let but = document.querySelector("button");

but.addEventListener("click", content);

function content(){
    alert(txt.value);
} */



/* let text = document.querySelector("input");
let output = document.querySelector("#length");

text.addEventListener("input", function(){
    output.textContent = text.value.length + "/30"
}) */



/* let form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    alert("Сохраненные данные: " + form.elements.value.value);
    event.preventDefault(); // отмена перехода по ссылке через preventDefault
}); */







