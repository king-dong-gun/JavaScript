## JavaScript 학습 3일차

### JavaScript 기본학습

### 배열
- 이름과 인덱스로 참조되는 정렬된 값의 집합으로 정의된다.
    - 배열을 구성하는 각각의 값을 배열 요소
    - 배열에서의 위치를 가리키는 숫자를 인덱스
- 기본 코드
```js
const arr1 = new Array();   // Array() 생성자 함수로 배열을 생성
const arr2 = [1, 2, 3, 4, 5];   // 배열 리터널을 사용
console.log(arr1);
console.log(arr2);
```

![array](https://github.com/king-dong-gun/JavaScript_study/assets/160683545/4f9ae47a-f0a7-4b0e-9c7f-fe6dd0878d1b)


#### 배열의 모든 요소 순회하기
- `for`문을 사용하여 접근한다.

```js
// 일반 for 문
const fruits = ["🍎", "🍉", "🍌", "🍇", "🍓"];
for (let i = 0; i <= 5; i++) {
    console.log(fruits[i]);
}
```
![arrFor](https://github.com/king-dong-gun/JavaScript_study/assets/160683545/eb2bbe70-083f-48f6-b117-21b6ab83723c)



```js
// forEach 문
fruits.forEach(function (fruit, index, array) {
  // 콘솔에 현재 과일, 해당 과일의 인덱스, 그리고 전체 배열을 출력
  console.log(fruit, index, array);
});

// forEach 애로우 함수
fruits.forEach((fruit, index) => {
  // 콘솔에 각 과일과 그 위치를 출력
  console.log(fruit, index);
})
```
> 실행될 코드가 한줄이라면 중괄호 생략이 가능하다.


![forEach](https://github.com/king-dong-gun/JavaScript_study/assets/160683545/021d58a0-ef9c-4cc9-82ac-4c8d33a8bb72)

#### 배열 요소 추가, 제거하기

- `배열명.unshift(추가할 배열)`: 배열의 첫번째 요소로 추가한다.
- `배열명.push(추가할 배열)`: 배열의 마지막 요소로 추가한다.
- `배열명.pop(제거할 배열)`: 배열의 마지막 요소를 제거한다. -> LIFO 구조 때문에


```js
// 배열 길이 확인하기
let ary = [1, 2, 3, 4, 5];
console.log(ary.length);

// 배열 마지막 요소로 추가하기
ary.push(10);
console.log(ary.length);
console.log(ary);

// 배열 첫번째 요소로 추가
ary.unshift(0);
console.log(ary.length);
console.log(ary);

// 배열 마지막 요소 제거하기
ary.pop();
console.log(ary);
```


![arrPush](https://github.com/king-dong-gun/JavaScript_study/assets/160683545/3ae4cd77-2844-4951-987f-dfb2ce681983)


#### 배열 요소 중간값 추가, 제거하기

- `배열명.splice(시작 인덱스, 삭제할 배열 갯수, 추가할 배열1, 추가할 배열2....)`: 배열 중간값 추가 및 제거하기

![splice](https://github.com/king-dong-gun/JavaScript_study/assets/160683545/211257f8-43ef-45f2-94df-94990475e828)


- `const 새 배열 = 기존배열.concat(추가할 요소 or 배열)`: 배열에 추가할 배열이나 요소를 새 배열로 만들기
- `consol.log(배열명.index("요소")`: 배열 요소의 인덱스 번호 찾기
- `consol.log(배열명.includes("요소")`: 배열 요소가 있는지 참, 거짓으로 나타내기


```js
// 배열 중간값 추가 삭제하기
const animal = ["🐶", "🐰", "🐼"];
console.log(animal);
animal.splice(1, 1);
animal.splice(1, 1, "🐯", "🐷");

// 두개의 배열 합치기
const newAnimal = animal.concat(animal);
console.log(newAnimal);
console.log(animal);

// 배열찾기
console.log(animal.indexOf("🐶"));   // 인덱스 리턴
console.log(animal.indexOf("🐷"));
console.log(animal.includes("🐨")); // False로 나타내기
```


![스크린샷 2024-05-08 오전 10 50 39](https://github.com/king-dong-gun/JavaScript_study/assets/160683545/550ae19b-bad8-46a4-a821-ccc17a289832)




### 자료구조

#### LIFO 구조
- **LAST IN, FIRST OUT** 후입선출이라는 의미를 가지고 있으며, 일반적으로 스택이라고 한다.


```js
let stack = [];

// 요소 추가
stack.push("apple");
stack.push("banana");
stack.push("cherry");

console.log(stack);  // ["apple", "banana", "cherry"]

// 마지막 요소 제거
let lastItem = stack.pop();

console.log(lastItem);  // "cherry"
console.log(stack);  // ["apple", "banana"]

```

![LIFO](https://github.com/king-dong-gun/JavaScript_study/assets/160683545/7b3574ea-e3f8-476d-a400-ae0d069d66db)


> 1. `push()`메소드로 배열 `stack`에 세개의 과일을 추가한다.
> 2. `pop()`으로 가장 마지막에 추가한 과일을 제거한다.
> 3. 배열을 확인하면 가장 마지막에 추가된 cherry가 제거되었다. -> LIFO 구조


### 함수
#### 순서
1. 함수를 정의한다. -> `function 함수명() { ~~~내용};`
2. 함수를 호출한다. -> `함수명();`


```js
function printHello() { // 함수정의를 만드는게 가장 먼저다.
    console.log("Hello World!");
}
printHello();
```


![스크린샷 2024-05-08 오전 11 48 03](https://github.com/king-dong-gun/JavaScript_study/assets/160683545/5f8582e4-5f8a-468d-8b85-2a6e39a93c26)


#### 입력 파라미터를 객체로 받는 함수

```js
function changeName(obj) {     // 함수의 정의
    obj.name = "coder";
}
const ellie = {name: "ellie"};  // ellie 객체
console.log(ellie); // ellie 출력

changeName(ellie);  // name을 coder로 교체
console.log(ellie); // coder 출력


function showMessage(message, from = "unknown") {
  console.log(`${message} by ${from}`);
}
showMessage("Hi", "JavaScript");
// from 입력값이 없을때는 unknown 출력
showMessage("Hi");
```

![스크린샷 2024-05-08 오전 11 49 09](https://github.com/king-dong-gun/JavaScript_study/assets/160683545/9d7df040-fa52-4bff-80e7-aa8941abbaff)


#### 나머지 매개변수
- 매개변수가 고정되있지 않고 무수히 많은 함수를 **가변 매개변수 함수**라고 한다.
- `JavaScript`에서는 이러한 함수를 구현할 때 **나머지 매개변수**를 사용한다.
- 함수 매개변수 앞에 `...` 3개를 붙히면 매개변수들이 배열로 들어온다.
```js
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}
  printAll("A", "B", "C", "D", "E", "F", "G");
```


![스크린샷 2024-05-08 오후 12 24 44](https://github.com/king-dong-gun/JavaScript_study/assets/160683545/44e94ced-f9bb-4b67-a39c-98ec0bde063d)


#### 즉시 실행함수
- 정의되자마자 즉시 실행되는 함수를 뜻한다.
- `( () )` 소괄호로 함수를 감싸 사용한다.
- 파라미터 값을 미리 설정해줘도 되고 `()`안에 값을 줘도 된다.

```js
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
```