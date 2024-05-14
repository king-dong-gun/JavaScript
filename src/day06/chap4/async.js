// async & await
// function fetchUser() {
//     //10s...
//     return "ellie";
// }

function fetchUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Ellie");
        }, 1000)
    })
}

const user = fetchUser();

console.log(user);

user.then(console.log);

// async
// 코드블록이 Promise로 변환된다.
async function getUser() {
    return "Joel";
}

const getuser = getUser();
getuser.then(console.log);


async function function2() {
    return 1;
}

const function1 = function2();
function1.then(console.log);


// await -> async 키워드가 있는 함수에서만 사용 가능하다.
// 비동기의 작업 완료를 기다린다.
async function function3() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Last Of Us");
        }, 2000)
    });
    let result = await promise;
    alert(result);
}

function3();

// 동기적 처리
function Delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

async function getApple() {
    await Delay(2000);
    return "🍎";
}

async function getBanana() {
    await Delay(2000);
    return "🍌";
}

function function4() {
    return getApple()
        .then(apple => {
            return getBanana()
                .then(banana => `${apple} + ${banana}`);
        });
}

function4().then(console.log);

async function function5() {
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`;
}

function5().then(console.log);


async function function6() {
    const applePromise =  getApple();
    const bananaPromise =  getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}
function6().then(console.log);

// 배열로 전달된 Promise들이 모두 병렬로 처리된다.
function function7() {
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(" + "));
};
function7().then(console.log);

function function8() {
    return Promise.race([getApple(), getBanana()]);
}
function8().then(console.log);