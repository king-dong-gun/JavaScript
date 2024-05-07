// 3. 0부터 20까지 4의 배수를 제외한 출력 (continue 사용)
document.open();
for (let i = 0; i <= 20; i++) {
    if (i % 4 === 0) {
        continue;
    }
    document.writeln(i);
}
document.close();
