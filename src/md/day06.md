## JavaScript 학습 6일차

### JavaScript 기본학습

### 동기 비동기
- 동기(synchronous): 데이터의 요청과 결과가 한자리에서 동시에 일어난다.
  - 요청을 하면 시간이 얼마나 걸리던지 요청한 자리에서 결과가 주어져야 한다. -> 데이터를 요청한 서버의 응답이 이루어질 때까지 대기 해야한다. 
- 비동기(Asynchronous): 데이터 요청과 결과가 동시에 바로 일어나지 않는다.
  - 데이터 요청 후 응답에 따른 요청이 이루어지지 않아도 다른 외부 활동이 가능하다.

#### 동기 비동기의 장단점
- 동기
  - 장점: 설계가 간단하고 직관적이다.
  - 단점: 결과가 주어질 때까지 아무 작업을 할 수 없고 대기 해야한다.
- 비동기
  - 장점: 요청한 응답이 이루어지기까지 다른 작업이 가능하다.
  - 단점: 동기보다 설계가 복잡하다.

### AJAX (Asynchronous JavaScript and XML)
- 웹페이지에서 비동기적으로 데이터를 요청하고 응답을 받기 위한 사용되는 기술들의 조합이다. 
- 브라우저에서는 비동기적으로 데이터의 요청과 응답이 가능하며 동적인 웹을 만들기 위해 사용된다.

#### XHR
- `Web API`중 하나인 이 `XHR 객체`는 비동기적으로 서버와 통신할 수 있도록 해주는 `Ajax`의 핵심 역할을 한다.

#### JavaScript 비동기 처리 함수
- `콜백함수`
- `Promise`
- `async await`


#### 콜백함수
- 특정 로직이 끝났을 때 원하는 동작을 실행 할 수 있다.
  - 식당에 자리가 없어 대기자 명단에 이름을 쓰고, 근처에 돌아다니다가 전화가 오는 시점이 `콜백함수`
```js
console.log("1");
// 일정 시간 이후 출력
setTimeout(() => {  // 브라우저 API
    console.log("2");
}, 1000);
console.log("3");
console.log("Messi");
```

![callback](https://github.com/king-dong-gun/JavaScript_study/assets/160683545/1b967871-1707-4a96-b081-a6732d862c97)



#### Promise 함수
- 서버에서 받아온 데이터를 화면에 표시할 때 사용한다. 
- 일반적으로 웹 애플리케이션을 구현할 때 서버에서 데이터를 요청하고 받아오기 위해 아래와 같은 `API`를 사용한다.

```html
<!--버튼 클릭시 콘솔에 출력-->
<input type = "button" value = "test" onclick=
        "new Promise(() => {
            console.log(`doing someting...`);
        })">
```


![스크린샷 2024-05-14 오전 11 55 31](https://github.com/king-dong-gun/JavaScript_study/assets/160683545/dcfa16c4-f8f5-4f91-97c8-3b7ce734dc54)


#### Promise 3가지 상태
- `Pending(대기)` : 비동기 처리 로직이 아직 완료되지 않은 상태
- `Fulfilled(이행)` : 비동기 처리가 완료되어 프로미스가 결과 값을 반환해준 상태
- `Rejected(실패)` : 비동기 처리가 실패하거나 오류가 발생한 상태

```js
// 1. promise를 생성하는 순간 즉시 호출된다. -> 자동 실행
const promise = new Promise((resolve, reject) =>
    console.log("doing....someting...1...2")
);


// 2. 콜백함수와 같이 쓰기
let promise2 = new Promise((resolve, reject) => {
    console.log("실행중...1...2...3");
    // 비동기 작업인 setTimeout을 Promise 내부에서 사용
    setTimeout(() => {
        resolve("완료");    // 실행이 정상적이면 resolve 호출
    }, 2000);
});

// 콜백 함수로 실행 정상이면 실행할 콜백 함수
promise2.then((value) => {
    console.log(value);
});
```

![promise](https://github.com/king-dong-gun/JavaScript_study/assets/160683545/18cdda11-0985-4f5f-a84b-cac606f3d621)


1. `Promise`는 생성하는 순간 호출문이 없어도 즉시 호출된다.
2. `Promise`로 작업 실행을 하고 완료가 되었을때 `Callback`함수인 `setTimeout`으로 `Promise` 3가지 상태 확인한다.
  - `console.log("실행중...1...2...3");` -> `Pending`상태 (2초동안)
  - `resolve("완료");` -> 완료가 출력되면서 `fullfilled` 상태가 된다.

### async, await

- `async` -> `function` 키워드 앞에 붙혀준다. 
  - 함수 앞에 붙혀서 비동기 코드임을 알리는 함수임을 나타낸다.
  - 비동기 작업이 완료될 때까지 코드 실행을 일시중지하고 결과를 기다린 다음 해당 결과를 반환한다.
- `await`
  - `Promise` 비동기 처리가 완료될때 까지 코드 실행을 일시 중지하고 `wait` 한다라는 뜻으로 보면 된다
  - `then`과 콜백함수를 남발하는 것을 방지한다.

```js
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
```
![await](https://github.com/king-dong-gun/JavaScript_study/assets/160683545/46655e9a-6f21-43b0-acba-f5b93ccbb95e)
> 1. `function()`, `function1()`, `function2()`에서 리턴값을 각각 Joel, 1, Ellie를 주었다.
> 2. `await` 함수로 `Last Of Us`라는 리턴값을 주었다.
> 3. `Promise`가 있는 `function()의 함수가 출력되면서 `alert`창이 출력되는 것을 확인했다.



### JSON(JavaScript Object Notation)
- `자바 스크립트 객체 표기법`으로 데이터를 쉽게 **교환**하고 **저장** 하기위한 택스트 기반의 데이터 교환 표준이다.

```js
{ key1 : { inKey : inValue }, key2 : [arr1, arr2 arr3] }
{"판매자정보" : { "이름" : "남도일", "지역" : "서울" } , "판매품목" : ['사과','배','딸기']  }
```

```js
[   1,    "str",    true,    {inKey : "value"},    ["일", "이"],    null    ]

// 숫자 타입(number)
{  k  :  1  }

//문자열 타입(string)
{  k  :  "str"  }

//불리언 타입(boolean)
{  k  :  true  }

//객체(object)
{  k  :  {inKey : "value" }  }

//배열(array)
{  k  :  ["일", "이"]  }

//널(NULL)
{  k  :  null  }
```
1. `{key : value}`가 기본적인 형태이다.
2. `{key1 : value1, key2 : value2}`로 여러 데이터를 나열 할때는 ,(콤마)를 사용한다.
3. 객체(Object)는 `{}`를 사용하고, 배열(Array)은 `[]`를 사용한다.
4. 데이터값으로 여러가지 타입 사용이 가능하다.

#### JSON 사용
- JavaScript에서 JSON을 사용하기 위해 아래 두가지 메서드를 제공한다.
  - `JSON.stringify(arg)`: **객체**를 **문자열**로 변경한다.
  - `JSON.parse(arg)`: **문자열**을 **객체**로 변경한다.


#### 객체 -> 문자열 변경 (parse)
```js
const str = `{
  "name": "홍길동",
  "age": 25,
  "married": false,
  "family": { "father": "홍판서", "mother": "춘섬" },
  "hobbies": ["독서", "도술"],
  "jobs": null
}`;

const obj = JSON.parse(str);

console.log(obj);
```


![parse](https://github.com/king-dong-gun/JavaScript_study/assets/160683545/eb6e927b-2730-4a9f-b0ce-257d0393cce3)


> JSON 문자열에서는 키(key)를 나타낼 때 반드시 쌍따옴표로 감싸줘야 하는 반면에, JavaScript 객체에서는 쌍따옴표를 꼭 사용할 필요는 없다.
> - 특수 문자나 영어 외의 언어와 같이 키로 허용되지 않는 문자를 키로 사용해야하는 경우에는 쌍따옴표를 사용해야 한다.


#### 문자열 -> 객체 변경(stringify)
```js
const obj = {
    name: "홍길동",
    age: 25,
    married: false,
    family: {
        father: "홍판서",
        mother: "춘섬",
    },
    hobbies: ["독서", "도술"],
    jobs: null,
};

const str = JSON.stringify(obj);

console.log(str);

```

![stringify](https://github.com/king-dong-gun/JavaScript_study/assets/160683545/36e08644-fb92-454d-ac86-9ce46818f4af)


> JSON 형식의 문자열로 변환된 데이터는 더 이상 `.` 또는 `[]` 기호를 사용하여 각 속성에 접근할 수 없게 된다.


