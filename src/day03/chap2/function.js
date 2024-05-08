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


// 즉시 실행 함수: 즉시 실행되며 단 한번만 호출되어 다시는 호출할 수 없다.
let result = (function () {
    let a = 10;
    let b = 20;
    return a + b;
}());
console.log(result);

let result2 = (function (a, b) {
    return a * b;
}(10, 20));
console.log(result2);

// 화살표 함수
// let func = () => {};
const simplePrint = function () {
    console.log("simplePrint");
}
console.log(simplePrint);   // 함수의 이름은 포인터
console.log(simplePrint());

const simplePrint2 = () => {
    console.log("simplePrint");
}
console.log(simplePrint2());

const simplePrint3 = () =>
    console.log("simplePrint");
simplePrint3();

const add2 = (a, b) => {
    return a + b;
};
console.log(add2(10, 20));

const hi = () => {
    alert("hi");
};
hi();

let hello = (user) => {
    document.writeln(user + "님 안녕하세요.");
};
hello("김동건");

// 콜백함수 -> 정의가 함수 나중에 나오면 호이스팅 되기 때문에
function randomQuiz(answer, printYes, printNo) {
    if(answer === "javascript") {
        printYes();
    } else {
        printNo();
    }
}

const printYes = function () {
    console.log("Yes");
}

const printNo = function () {
    console.log("No");
}

randomQuiz("javascript", printYes, printNo);
randomQuiz("springboot", printYes, printNo);


