document.open();
for (let i = 2; i <= 9; i++) {
    document.writeln(i + '단');
    for (let j = 1; j <= 9; j++) {
        document.writeln(i + ' * ' + j + ' = ' + (i * j) + '<br>');
    }
    document.writeln('<br>'); // 단마다 줄바꿈
}
document.close();
