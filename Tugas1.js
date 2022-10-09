var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var nama = ["Boy", "Aldi", "Ade", "Aca", "Lena", "Iran", "Dana", "Doni", "Dani", "Randy"];
var nim = [123, 124, 125, 126, 127, 128, 129, 130, 131, 132];
var nilai = [60, 70, 40, 50, 90, 70, 30, 20, 100, 90];

for (var j = 0; j <= 9; j++) {
    document.write("<td>" + num[j] + "</td>");
    document.write("<td>" + nama[j] + "</td>");
    document.write("<td>" + nim[j] + "</td>");
    document.write("<td>" + nilai[j] + "</td>");
    if (nilai[j] >= 80) {
        document.write("<td>A</td>");
    } else if (nilai[j] >= 70 && nilai[j] < 80) {
        document.write("<td>AB</td>");
    } else if (nilai[j] >= 60 && nilai[j] < 70) {
        document.write("<td>B</td>");
    } else if (nilai[j] >= 50 && nilai[j] < 60) {
        document.write("<td>BC</td>");
    } else if (nilai[j] >= 40 && nilai[j] < 50) {
        document.write("<td>C</td>");
    } else if (nilai[j] >= 10 && nilai[j] < 40) {
        document.write("<td>D</td>");
    } else {
        document.write("<td>E</td>");
    }
    document.write("<tr></tr>");
}

