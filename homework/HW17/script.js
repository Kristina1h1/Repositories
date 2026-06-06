function showDate() {
    let date = new Date(2026, 3, 18); // 18 апреля 2026
    let days = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
    let dayName = days[date.getDay()];
    
    document.write("Сегодня: 18 апреля 2026, " + dayName);
}
showDate();