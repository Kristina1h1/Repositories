let registrationForm = document.getElementById("registrationForm");
let errorMessages = document.getElementById("errorMessages");
let emailInput = document.getElementById("email");

registrationForm.addEventListener("submit", function(event) {
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
                return;
            }
            alert("Register successfull!");
            registrationForm.reset();
            emailInput.classList.remove("error");
        });
        
        function displayError(message) {
            errorMessages.innerHTML += `<div>${message}</div>`;
        }
        function isValidEmail(email) {
            return /^[\w.%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(email);
        }
        function isStrongPassword(password){
            return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(password);
        }

        emailInput.oninput = function() {
            let email = emailInput.value;
            
            if (email !== "" && !isValidEmail(email)) {
                emailInput.classList.add("error");
            } else {
                emailInput.classList.remove("error");
            }
        }