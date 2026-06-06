document.writeln("<table border='1' width='260' align='center'>");
document.writeln("<tr>");
for (let i = 0; i < 11; i++) {
    document.writeln("<th>" + i + "</th>");
}
document.writeln("</tr>");
for (let i = 1; i < 11; i++) {
    document.writeln("<tr align='center'>");
    document.writeln("<th>" + i + "</th>");
    for (let j = 1; j < 11; j++) {
        if (i % 2 == j % 2) {
            document.writeln("<td bgcolor='red'>" + (i * j) + "</td>");
        } else {
            document.writeln("<td bgcolor='yellow'>" + (i * j) + "</td>");
        }
    }
    document.writeln("</tr>");
}
document.writeln("</table>");