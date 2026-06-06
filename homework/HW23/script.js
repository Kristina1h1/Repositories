let choose = document.querySelector("input[type='button']");

choose.addEventListener("click", chooseColor);

function chooseColor() {
    let f = document.form3;

    for (let i = 0; i < f.radio2.length; i++) {
        if (f.radio2[i].checked) {
            document.body.style.background = f.radio2[i].value;
        }
    }
}