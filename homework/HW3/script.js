let ch = prompt("Введите количество копеек (от 1 до 99):", 25);
ch = parseInt(ch);

if (ch >= 1 && ch <= 99) {

    let lastDigit = ch % 10;

    if (ch >= 11 && ch <= 19) {
        alert(ch + " копеек");
    }
    else if (lastDigit == 1) {
        alert(ch + " копейка");
    }
    else if (lastDigit == 2 || lastDigit == 3 || lastDigit == 4) {
        alert(ch + " копейки");
    }
    else {
        alert(ch + " копеек");
    }
    
} else {
    alert("Ошибка! Пожалуйста, введите число от 1 до 99.");
}