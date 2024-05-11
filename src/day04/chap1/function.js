// function quiz
// function calculate (command, a, b)
// command: add, minus, devide, mul

function calculate(command, a, b) {
    switch (command) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
    }
}
console.log(calculate("+", 2, 3));


// 함수 입력 파라미터로 받을 때는 함수 이름을 전달한다.
// 인자를 받아서 처리하는 doSomething 함수 정의
function doSomething(result) {
    console.log(result);  // 인자로 받은 결과를 출력
}

// 두 수를 더하는 add 함수 정의
function add(a, b) {
    const sum = a + b;
    return sum;
}

// add 함수를 호출하여 그 결과를 doSomething에 전달
doSomething(add(1, 2)); // 입력 파라미터가 없는 경우 undefind


function add2(num1, num2) {
    return num1 + num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function surpise (callback) {
    const result = callback(2, 3);
    console.log(result);
}
surpise(add2);
surpise(multiply);
