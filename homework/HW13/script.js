function formatKopeeks(min, max, ...results) {
    for (let result of results) {
        if (result < min || result > max) {
            console.log(result + " - число должно быть от " + min + " до " + max);
            continue;
        }
        
        let lastTwo = result % 100;
        let lastDigit = result % 10;
        
        if (lastTwo >= 11 && lastTwo <= 19) {
            console.log(result + " копеек");
        } else if (lastDigit === 1) {
            console.log(result + " копейка");
        } else if (lastDigit >= 2 && lastDigit <= 4) {
            console.log(result + " копейки");
        } else {
            console.log(result + " копеек");
        }
    }
}

formatKopeeks(1, 99, 1, 2, 3, 4, 5, 10, 11, 21, 33, 99, 100);