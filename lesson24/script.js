
/* let languages = document.querySelector("#languages");
let languageOptions = ["Python", "JavaScript", "C++", "Java"];

languages.innerHTML = languageOptions.map(language => `
<div>
    <input type="radio" name="language" value="${language}" id="${language}">
    <label for="${language}">${language}</label>
</div>
`).join(" ");

let radioButtons = document.querySelectorAll('input[name="language"]');
for(let radioButton of radioButtons){
    radioButton.addEventListener("change", showSelectedLanguage);
}

function showSelectedLanguage(){
    if(this.checked){
    document.querySelector("#languageOutput").textContent = `Вы выбрали: ${this.value}`;
    }
} */



/* let city = document.querySelector("#city");

city.addEventListener("change", setImage);

// Свойства select
// select.options - коллекция из подэлементов <option>
// select.value - значение выбранного в данный момент <option>
// select.selectedIndex - номер (индекс) выбранного <option>


function setImage() {
let cities = city.selectedIndex;
let options = city.options;
let code = options[cities].value;
console.log(code);

let div = document.querySelector("#image");
div.innerHTML = "<img src='img/" + code + ".png'>";
} */




/* let select = document.querySelector("select");
let output = document.querySelector("#output");

select.addEventListener("change", function () {
let number = 0;
for (let i = 0; i < select.options.length; i++) {
let option = select.options[i];
if(option.selected){
number += Number(option.value);
}
}
output.textContent = number;
}) */



/* let countries = document.querySelector("#countries");

let ruCities = document.querySelector("#ru");
let byCities = document.querySelector("#by");

countries.addEventListener("change", function () {
    document.querySelector(".cities.active").classList.remove('active');

    if (this.value == 'ru') {
        ruCities.classList.add('active');
    }
    if (this.value == 'by') {
        byCities.classList.add('active');
    }
}) */


    /*  let option = new Option("Текст", "value", true, true);
    console.log(option); */

    let btnAdd = document.querySelector("#btnAdd");
    let btnRemove = document.querySelector("#btnRemove");
    