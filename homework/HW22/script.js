
    let form = document.querySelector(".register");

form.addEventListener("submit", function(event) {
    let login = form.elements.login.value;
    let psw = form.elements.psw.value;
    let psw2 = form.elements.psw2.value;

    if(login === "") {
        alert("Логин не заполнен");
        event.preventDefault();
    }
    else if(psw === "") {
        alert("Все поля должны быть заполнены");
        event.preventDefault();
    }
    else if(psw.length < 6) {
        alert("Слишком короткий пароль (мин. 6 символов)");
        event.preventDefault();
    }
    else if(psw !== psw2) {
        alert("Пароли не совпадают");
        event.preventDefault();
    }
    else {
        alert("Регистрация успешна!");
        form.submit(); 
    }
});