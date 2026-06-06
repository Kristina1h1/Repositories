let count = prompt('Сколько символов?');
let symbol = prompt('Какой символ?');
let orientation = prompt('0 - горизонтально\n1 - вертикально?');

if (orientation == '0') {
    for (let i = 0; i < count; i++) {
        document.writeln(symbol);
    }
} else {
    for (let i = 0; i < count; i++) {
        document.writeln(symbol + '<br>');
    }
}