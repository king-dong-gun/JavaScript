// synchronous
console.log("10");
console.log("20");
console.log("30");
console.log("40");
console.log("50");

// async
console.log("1");
// 일정 시간 이후 출력
setTimeout(() => {  // 브라우저 API
    console.log("2");
}, 1000);
console.log("3");

// let obj = {name: "messi", age: 34};
// let jsonString = JSON.stringify(obj);
// console.log(jsonString);
//
// let jsonString = '{"name":"ronaldo","age":36}';
// let obj = JSON.parse(jsonString);
// console.log(obj);

function printPlayer(print) {
    print();
}
printPlayer(() =>
console.log("Messi"));

function printDelay(print, timeout) {
    setTimeout(print, timeout);
}
printDelay(() =>
console.log("asnyc callback"), 4000);