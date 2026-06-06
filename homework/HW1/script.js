let number = prompt("Введите 5-значное число:");

if (!number || number.length !== 5 || isNaN(number)) {
    alert("Ошибка: нужно ввести 5-значное число!");
} else {
    let product = 1;
    let sum = 0;
    
    for (let i = 0; i < number.length; i++) {
        let element = parseInt(number[i]);
        product *= element;
        sum += element;
    }
    let mean = sum / number.length;
    
    alert(`Число: ${number}
Произведение цифр: ${product}
Среднее арифметическое: ${mean}`);
}


