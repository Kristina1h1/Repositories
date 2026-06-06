// Создать функцию для нахождения большего из двух чисел, учитывая, что числа могут быть равны (тремя способами)

//1. Function Declaration (Объявление функции)
function maxDec(a, b) {
    if (a > b) {
        document.writeln("Большее число: " + a + "<br>");
    }
    else if (a == b) {
        document.writeln("Числа равны" + "<br>");
    }
    else {
        document.writeln("Большее число: " + b + "<br>");
    }
}

maxDec(5, 2);
maxDec(2, 5);
maxDec(5, 5);


//2. Function Expression (Функциональное выражение)
const maxExpression = function(a, b) {
    if (a > b) {
        document.writeln("Большее число: " + a + "<br>");
    }
    else if (a == b) {
        document.writeln("Числа равны" + "<br>");
    }
    else {
        document.writeln("Большее число: " + b + "<br>");
    }
}

maxExpression(10, 3);
maxExpression(4, 9);
maxExpression(7, 7);


//3. Arrow Function (Стрелочная функция)
const maxFunction = (a, b) => {
    if (a > b) {
        document.writeln("Большее число: " + a + "<br>");
    }
    else if (a == b) {
        document.writeln("Числа равны" + "<br>");
    }
    else {
        document.writeln("Большее число: " + b + "<br>");
    }
}

maxFunction(15, 8);
maxFunction(3, 12);
maxFunction(9, 9);


// Написать функцию нахождения максимального числа из массива (тремя способами)

//1. Function Declaration
function max(arr) {
    let maxi = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxi) {
            maxi = arr[i];
        }
    }
    return maxi;
}

document.writeln(max([5, 7, 6, 2, 9, 3]) + "<br>");
document.writeln(max([1, 2, 5]) + "<br>");


//2. Function Expression
const max2 = function(arr) {
    let maxi = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxi) {
            maxi = arr[i];
        }
    }
    return maxi;
};

document.writeln(max2([10, 25, 3, 18, 7]) + "<br>");


//3. Arrow Function
const max3 = (arr) => {
    let maxi = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxi) {
            maxi = arr[i];
        }
    }
    return maxi;
};

document.writeln(max3([100, 50, 200, 75]) + "<br>");