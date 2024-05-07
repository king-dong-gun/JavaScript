## JavaScript 학습 2일차

### JavaScript 기본학습

#### Scriript 삽입위치

- HTML에서 스크립트를 직접 장성하지 않고 외부 스크립트 파일을 로드할 때 로드 방법 및 삽입 위치를 알아보자.
- 다음 HTML 페이지에서 외부 스크립트 파일을 아래와 같은 코드로 가져온다.
```html
<script src = "varible.js"></script>
```
##### <head>에 삽입했을 때

````html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="veiwport" content="width=devic-width, initial-scale=1.0">
    <title>Title</title>
    <script src="varible.js" defer></script>
</head>
<body>
</body>
</html>
````
> 위와 같이 `<head>`에 삽입했을 경우 HTML 페이지를 파싱하던 중 JS 파일을 받아오고, 실행한 뒤 다시 페이지를 파싱한다.
> - JS파일이 크기가 클 경우 랜더링이 너무 오래 걸려, 페이지를 보기까지 시간이 오래걸린다. 따라서 `<head>`에 작성하는 것은 좋지 않다.

![head삽입](https://github.com/king-dong-gun/JavaScript_study/assets/160683545/9562e404-dc90-4776-89e5-740c8b9e062b)



- `파싱`: 컴퓨터 과학 및 프로그래밍에서 특정 형식으로 구성된 데이터를 분석하고 그 의미를 이해하는 과정
- `랜더링`: 이미지 합성은 컴퓨터 프로그램을 사용하여 2D 또는 3D 모델에서 사실적인 이미지 또는 사실적이지 않은 이미지를 생성


##### <body>에 삽입했을 때

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="veiwport" content="width=devic-width, initial-scale=1.0">
    <title>Title</title>
</head>
<body>
<script src="varible.js" defer></script>
</body>
</html>
```

![body삽입](https://github.com/king-dong-gun/JavaScript_study/assets/160683545/1e655e52-8fbc-421e-96b9-1bb4d5a97c71)



> 위와 같이 `<body>`에 삽입했을 경우 HTML 페이지를 파싱을 진행하고 JS 파일을 불러온다.
> - 렌더링에서는 좀 더 효과적일 수 있으나 HTML파일 크기가 큰 경우에는 JS가 포함된 **의미있는 콘텐츠**를 보기 위해서는 너무 오래 걸린다. 따라서 `<body>`에 작성하는 것도 좋지 않다.


#### 속성 사용

- `async`와 `defer`은 HTML에 새롭게 추가된 `<script>`이다. 
- 이 두가지 속성들은 HTML 파싱과 다운로드를 **병렬로 진행**한다. 

##### async 속성

- `async`속성은 아래 코드와 같이 `<head>`부분에 작성한다.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="veiwport" content="width=devic-width, initial-scale=1.0">
    <script async src="varible.js" defer></script>
    <title>Title</title>
</head>
<body>
</body>
</html>
```

![async](https://github.com/king-dong-gun/JavaScript_study/assets/160683545/f0ccc818-0265-41d7-8377-32f167a67b3b)



- `async`는 파싱과 JS 불러오기를 병렬로 진행한다.
- 기존 방법들보다는 다운로드 받는 시간이 절약되어 효율적이다.
- JS를 실행하는 단계에서는 파싱을 중지하게 되고 JS실행이 끝나면 다시 파싱을 재시작 하게 되기 때문에 HTML이 모두 실행되기 전에 JS가 실행된다.
  - **다수의 스크립트 파일을 다운로드 받게되면 다운로드가 완료되는 순으로 JS파일을 실행하기 때문에 순서에 상관없이 실행**되기 때문에 페이지 순서가 중요하다면 문제가 될 수있다.

##### defer 속성

- `defer`속성은 아래 코드와 같이 `<head>`부분에 작성한다.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="veiwport" content="width=devic-width, initial-scale=1.0">
    <script defer src="varible.js"></script>
    <title>Title</title>
</head>
<body>
</body>
</html>
```

![defer](https://github.com/king-dong-gun/JavaScript_study/assets/160683545/2ac3dd0e-f19b-4d80-b924-ed85605393d6)



- `defer`은 병렬적으로 파싱과 JS 불러오기를 진행하게 되고 파싱이 모두 끝나면 JS를 실행한다.
- 다운로드 시간이 절약되고 `async` 속성과는 다르게 파싱하는 중에 JS파일을 모두 다운로드 받아놓고 파싱이 끝난 후 순서대로 JS파일을 실행하기 때문에 원하는 방향대로 스크립트를 실행할 수 있다.

##### 삽입 위치
> - 외부 스크립트를 불러올 때에는 `defer` 속성을 사용하는 것이 좋다. 
> - 스크립트 순서가 상관 없고 빨리 실행하는게 중요할 경우에는 `async` 속성을 사용하는 것이 좋다.


#### 호이스팅
- 스크립트 내 변수와 함수의 선언 순서에 상관없이 **끌어올려**지는 현상이다.

##### 함수 호이스팅

```js
test(); // "Hoisting" 출력

function test() {
    console.log("Hoisting");
}

test(); // "Hoisting" 출력

```

![hoisting](https://github.com/king-dong-gun/JavaScript_study/assets/160683545/6c316d6b-6413-4ec5-9f5c-bb7e8341c81f)


- JS는 함수를 `Hoisting`하기 때문에 최상단의 test()코드도 정상 작동한다.

##### 변수 호이스팅

- `var`로 선언한 변수 호이스팅
```js
console.log(name); // undefined
var name = "James";
console.log(name); //James

```

![varHoisting](https://github.com/king-dong-gun/JavaScript_study/assets/160683545/e3994f70-501a-4e1e-90e9-93c729ef0b62)




- 위의 코드에서는 `var name = "James"`가 작성되기 전 `console.log(name)`은 초기화 된 `var name;`을 출력한다는 의미로 `undefined`를 출력하는 것이다.
- 변수가 호이스팅 될 때는 **선언**, **초기화**만 된채로 호이스팅 되고 할당까지 호이스팅 되지 않기 때문이다.


- `const`, `let`으로 선언한 변수 호이스팅

```js
console.log(name1); // ReferenceError
const name = "James";
```

![constHoisting](https://github.com/king-dong-gun/JavaScript_study/assets/160683545/8f16e73b-83cb-4a4a-a3e2-a961358e889d)



```js
console.log(name2); // ReferenceError
let name = "James";

```


![letHoisting](https://github.com/king-dong-gun/JavaScript_study/assets/160683545/a721ff5a-2e3d-4cc2-b6e9-70003dcf640a)



![tdz](https://github.com/king-dong-gun/JavaScript_study/assets/160683545/ca9f41e1-0d67-4aec-8e8f-3ce26633a10c)


- `const`와 `let`은 `var`의 모호한 문제점을 보완하기 위해 등장한 개념인 만큼 `const`와 `let`으로 변수가 선언되기 이전 라인에 해당 변수를 출력하는 코드를 작성한 경우 참조 오류가 발생한다.

> `let name="James"`이 참조오류가 나타났기 때문에 호이스팅이 안되는 것으로 보일수도 있지만 
>  
> 호이스팅이 안되는것은 아니다. `let`, `const`로 선언한 변수는 호이스팅되었지만, *접근만하지 못하게* 된 것이다.
> - `'name'`의 선언문이 나오기 전까지는 `'name'`에 접근할 수 없다는 말이 된다.


#### 데이터 타입

##### 원시 타입
- 값이 생성된 후에 그 값을 변경 할수 없는 타입

1. `Number`: 숫자 타입
```js
let number = 10;
console.log(`value: ${number}, type: ${typeof number}`);
```

![numberType](https://github.com/king-dong-gun/JavaScript_study/assets/160683545/5d0f8eb3-6259-468f-949a-e0d15d464391)



2. `String`: 문자열 타입
```js
let str = "javascript";
let len = str.length;
console.log(len);
```

![stringType](https://github.com/king-dong-gun/JavaScript_study/assets/160683545/a012d83e-9636-4113-bacd-e174297985d4)




- 문자열 길이 및 배열 메소드도 접근 가능하다.
3. `Null`: 변수에 값이 없다는 뜻 
    - `null`에 `type of` 연산자를 사용하면 `object`를 반환하는 버그가 존재하니 유의하자.
```js
console.log(typeof null); // "object"
```


![nullBug](https://github.com/king-dong-gun/JavaScript_study/assets/160683545/0990eddd-ab0e-4298-abf5-a8872448f409)




4. `Undenfined`: 선언 이후 값이 할당되지 않은 변수
   - 의도적으로 사용하는 것을 권장하지 않으며, 값이 없다는 것을 명시하고 싶으면 `null`을 사용한다.

5. `Boolean`: true, false로 참, 거짓을 나타내는 타입
   - false: `0`, `null`, `undefined`, `NaN`
   - true: `any other value` 
6. `Symbol`: 충돌 위험이 없는 고유한 값을 만들기 위한 타입
```js
const symbol1 = Symbol("id");   // 입력 문자열로 키 생성
const symbol2 = Symbol("id");

console.log(symbol1 === symbol2);
```

![symbolType](https://github.com/king-dong-gun/JavaScript_study/assets/160683545/0aebba2b-ad8f-4c69-ac0d-da3f8e99fe1e)

- 고유한 하나의 값이므로 같은 문자열이라도 `false`가 반환된다.

