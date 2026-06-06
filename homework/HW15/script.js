
function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

let num = +prompt("Введите число:", 5);
document.writeln("Факториал числа " + num + " = " + factorial(num));