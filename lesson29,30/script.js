let registrationForm = document.getElementById("registrationForm");
let errorMessages = document.getElementById("errorMessages");

registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let [username, email, password] = registrationForm.elements;

    console.log(registrationForm.elements);
});