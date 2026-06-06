// Пользователь с клавиатуры вводит набор чисел. Необходимо проверить кратное ли число трем, если это так то сохранить эти числа в массив.


function check() {
    let arr = new Array(9);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = parseInt(prompt("Введите число:"));
    }
    let mas = [];
    for (let i = 0; i < 9; i++) {
        if (arr[i] % 3 === 0) {
            mas.push(arr[i]);
        }
    }
    return mas;
}
let result = check();
alert(result);