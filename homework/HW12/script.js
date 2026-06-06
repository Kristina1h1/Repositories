let months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

for (let i = 0; i < months.length; i++) {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    
    document.writeln("<div style='background: rgb(" + r + ", " + g + ", " + b + "); padding: 10px; margin: 5px;'>" + months[i] + "</div>");
}
