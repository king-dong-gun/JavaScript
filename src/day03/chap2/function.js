// function
// 함수 선언(정의), 호출
// func();         // 함수 호출 -> 함수가 실행된다.
// func() {        // 함수 정의 -> 함수를 만든다.
// }
// function [함수명](입력) {
// ~~~~~
// }

function printHello() { // 함수정의를 만드는게 가장 먼저다.
    console.log("Hello World!");
}
printHello();

function log(message) {     // 함수 정의
    console.log(message);
}
log();
log("Hi@");
log(1234);

function showError(message) {
    alert("에러발생, 다시 시도하세요.")
}

showError();
// showError. -> 지원되는 내장 함수들을 볼수 있다. 함수가 객체이기 때문에


// 입력 파라미터를 객체로 받는 함수
function changeName(obj) {     // 함수의 정의
    obj.name = "coder";
}
const ellie = {name: "ellie"};  // ellie 객체
console.log(ellie);

changeName(ellie);
console.log(ellie);

function showMessage(message, from = "unknown") {
    console.log(`${message} by ${from}`);
}
showMessage("Hi", "JavaScript");
// 입력값이 없을때는 unknown 출력
showMessage("Hi");

function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
    args.forEach(arg => console.log(arg));
}
printAll("A", "B", "C", "D", "E", "F", "G");

// 함수 출력
function add(num1, num2) {
    return num1 + num2;
}
const sum = add(10, 20);
console.log(sum);


let sayHello = function () {
    console.log("Hello");
}
sayHello();

let hiHello = sayHello;
hiHello();
