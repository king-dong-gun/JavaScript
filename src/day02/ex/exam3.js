// 4. 입력된 숫자만큼 1씩 카운터해 출력
document.open();
let number = prompt("숫자를 입력하세요");

// 입력된 값이 null이 아니며, 숫자인지 확인
if (number === null) {
    document.writeln("값이 없습니다.");
    // 숫자인지 아닌지 확인
} else {
    number = parseInt(number);
    document.writeln(number + 1);
}
document.close();