// // status: pending -> fulfilled or rejected
//
// // 1. producer
// // promise를 생성하는 순간 즉시 호출된다. -> 자동 실행
// const promise = new Promise((resolve, reject) =>
//     console.log("doing....someting...1...2")
// );
//
// let promise2 = new Promise((resolve, reject) => {
//     console.log("실행중...1...2...3");
//     // 비동기 작업인 setTimeout을 Promise 내부에서 사용
//     setTimeout(() => {
//         resolve("완료");    // 실행이 정상적이면 resolve 호출
//     }, 2000);
// });
//
// // 콜백 함수로 실행 정상이면 실행할 콜백 함수
// promise2.then((value) => {
//     console.log(value);
// });
//
// console.clear();
//
//
// let promise3 = new Promise((resolve, reject) => {
//     console.log("doing...something...");
//     setTimeout(() => {
//         reject(new Error("No network...")); // 네트워크 오류를 시뮬레이션
//     }, 2000);
// });
//
// promise3.then((resData) => {
//     console.log(resData);
// }).catch((error) => {
//     console.log(error); // 여기서 에러를 캐치하고 출력
// }).finally(() => {
//     console.log("Run Access!!");
// });
//
// console.clear();

// fetchNumber (Promise)객체 생성
let fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(num - 1)
            }, 1000);
        });
    })
    .then(num => console.log(num));

// 에로우에 중괄호를 사용하면 return으로 반환을 받아야한다.
// 에로우에 중괄호를 생략하면 자동 반환된다.
let getSoccer = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("⚽️");
        }, 1000);
    });


let getBaseball = (soccer) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(soccer + " => ⚾️");
        }, 1000);
    });


getSoccer()
    .then(soccer => getBaseball(soccer))
    .then(result => console.log(result));



