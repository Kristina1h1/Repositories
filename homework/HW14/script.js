let str = 53862635645635;

let numStr = str.toString();

let lastDigit = numStr[numStr.length - 1];

let count = 0;

for (let i = 0; i < numStr.length; i++) {
    if (numStr[i] === lastDigit) {
        count++;
    }
}

console.log(`Последняя цифра ${lastDigit} встречается ${count} раза`);