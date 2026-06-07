let catAge = document.getElementById("catAge");
let method = document.getElementById("method");
let gender = document.getElementById("gender");
let calcBtn = document.getElementById("calcBtn");
let humanAgeSpan = document.getElementById("humanAge");

function calculateSimple(age) {
    return age * 7;
}

function calculateClassic(age) {
    if (age <= 1) return 15;
    if (age <= 2) return 24;
    return 24 + (age - 2) * 4;
}

function formatYears(years) {
    let lastDigit = years % 10;
    let lastTwo = years % 100;
    
    if (lastTwo >= 11 && lastTwo <= 19) {
        return years + " лет";
    }
    if (lastDigit === 1) {
        return years + " год";
    }
    if (lastDigit >= 2 && lastDigit <= 4) {
        return years + " года";
    }
    return years + " лет";
}

function calculate() {
    let age = parseFloat(catAge.value);

    if (isNaN(age) || age < 0) {
        humanAgeSpan.textContent = "?";
        return;
    }

    let result;

    if (method.value === "simple") {
        result = calculateSimple(age);
    } else {
        result = calculateClassic(age);
    }

    if (gender.value === "0") {
        result = result - 2;
    }

    result = Math.round(result);
    if (result < 0) result = 0;

    humanAgeSpan.textContent = formatYears(result);
}

calcBtn.onclick = calculate;