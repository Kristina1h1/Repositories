/* let registrationForm = document.getElementById("registrationForm");
let errorMessages = document.getElementById("errorMessages");

registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let [username,email,password] = registrationForm.elements;
    errorMessages.innerHTML = "";
    if (!username.value.trim()) {
        displayError("Имя пользователя обязательно");
        return;
    }
    if (!email.value.trim() || !isValidEmail(email.value)) {
        displayError("Введите адрес электронной почты");
        return;
    }
    if (!password.value.trim() || !isStrongPassword(password.value)) {
        displayError("Пароль должен состоять как минимум из 8 символов и как минимум одну заглавную букву, одну строчную букву, одну цифру и специальный символ");
    }
    alert("Register successfull!");
    registrationForm.reset();
});

function displayError(message) {
    errorMessages.innerHTML += `<div class='error'>${message}</div>`;
}

function isValidEmail(email) {
    return /^[\w.%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(email);
}

function isStrongPassword(password){
    return /\^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(password);
} */



/* let car = new Object(); 
car["type"] = "BMW";
car["color"] = "white";
console.log(car);
document.writeIn(car["type"]+ " " + car["color"]); // [object Object] */



let menu1 = {};
menu1.width = 300;
menu1.height = 300;
menu1.title = "Menu";
console.log(menu1.title + ": " + menu1.width + " x " + menu1.height + "<br>");

let menu = {
    width: 300,
    height: 200,
    title: "Menu"
};
console.log(menu);
document.writeln(menu.title + ": " + menu.width + " x " + menu.height + "<br>");

// delete menu.width;
delete (menu.width);

console.log("width" in menu); //находится ли в меню (нет)
console.log("height" in menu); //находится ли в меню (да)


menu.age = 25;

let counter = 0;
for (let key in menu) {
    document.writeln("<br>Ключ = " + key + ", значение = " + menu[key]);
    counter++;
}

// document.writeln("<br><br>Всероссийский счетчик: " + counter + "<br>");

// document.writeln("<br>Имена ключей: " + Object.keys(menu) + "<br>");
// document.writeln("<br>Всероссийский счетчик: " + Object.keys(menu).length + "<br>");

// console.log(Object.keys(menu));


/* Object.keys(menu).forEach(function(key){
    document.writeIn("<br>" + key + ": " + menu[key]);
})

Object.values(menu).forEach(function(v){
    document.writeIn("<br>" + v);
})

console.log(Object.values(menu));
console.log(Object.entries(menu)); //возвращает массив ключей и значений */


/* for (let el of Object.values(menu)) {
    console.log(el[0], el[1]);
    document.writeln("<br>" + el);
} */



    


