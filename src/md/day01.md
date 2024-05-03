## JavaScript 학습 1일차

### JavaScript 기본학습

#### JavaScript란?
- `html`과 `css`로 구성된 웹페이지를 동적으로 만들어 주는 언어이다.
- 프론트엔드, 백엔드 영역까지 아우르는 웹 프로그래밍 언어의 표준이다.

#### JavaScript 기본 문법
1. 변수
- 데이터를 담는 바구니를 뜻한다.
- 바구니(변수)에 이름표를 달아주는 것을 `선언`이라고 한다.
- 바구니(변수)에 물건을 담는 것을 `할당`이라고 한다.

```javascript
let 변수이름 = 할당할값;
```

- 변수를 선언할 때 `let`이라는 키워드를 쓰고, 변수명을 지어준 다음 `=`로 할당할 값을 적어준다.
  - `let`: 지역변수
  - `const`: 상수
    - `let`, `const`는 선언만 될뿐, 초기화가 이루어지지 않는 메모리 할당이 아직 되지 않는다.
  - `var`: 함수 레벨 스코프
    - 선언과 동시에 초기화가 이루어진다. 즉, 선언과 동시에 `undefined`가 할당된다.



> 주의할 점
> 1. 변수명에 띄어쓰기가 있으면 안된다.
> 2. `=`는 할당연산자로, `==`와 같은 비교연산자로 사용하면 안된다.


2. 타입
- 변수에 데이터를 할당할 때 **어떤** 데이터를 넣을지 정한다. 그것을 **타입**이라고 한다.
    - number(숫자 타입)
    - String(문자 타입)
    - boolean(불리언 타입)

3. 함수
- 프로그램을 실행시키기 위해 작성한 실행 방법들이다.
- **입력에 따라 그에 알맞은 작업을 하는 하나의 단위!!**


```javascript
// 함수는 이러한 구조를 가집니다.

function name(parameter) {   }
// (1)    (2)    (3)      (4)
```
- (1) keyword: 함수를 만들 때, function 키워드를 사용한다.
- (2) name(함수명): 함수를 호출(실행)할 때 사용할 이름이다.
- (3) parameter(매개변수): 함수에 필요한 변수(재료)가 있다면 이곳에 넣는다. 없다면, () 빈괄호를 쓴다.
- (4) body: 함수가 호출(실행)되면 실행할 코드가 들어있는 곳이다.

```javascript
// 함수를 호출합니다.

// example이라는 함수를 선언합니다.
function example() {
    // 이 함수가 하는 일
    // stuff라는 변수를 설정하여 1을 할당합니다.
    let stuff = 1;
    // 값을 반환합니다.
    return stuff; // (5)
}
```
- (5)keyword: 함수의 값을 반환할 때, `return` 키워드를 사용한다. `return` 키워드를 사용하지 않는다면, 함수는 값을 반환하지 않는다.


#### JavaScript 출력해보기

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="veiwport" content="width=devic-width, initial-scale=1.0">
    <script async src = "main.js"></script>
    <title>printDoc</title>
</head>
<body>

<script>
    document.write("<h1>환영합니다!!</h1>");
    document.write("<h4>올드 트레포트 입니다!!</h4>");
</script>

</body>
</html>
```
![첫출력](https://github.com/king-dong-gun/PKUN_JSP/assets/160683545/3a25ef0b-56ad-4271-bb98-f74012197432)


- 웹화면에 문자를 출력하고 싶으면 `document.write`로 입력을 받는다.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="veiwport" content="width=devic-width, initial-scale=1.0">
  <title>alert</title>
</head>
<body>

<script>
  alert("안녕하세요!!");
</script>

</body>
</html>
```

![alret](https://github.com/king-dong-gun/PKUN_JSP/assets/160683545/d736c8cc-0574-49d5-8ce2-64d0c47b43c6)


- 웹 페이지 경고창을 출력하고 싶으면 `alert`을 사용한다.

#### innerHTML
- JavaScript에서 HTML 요소의 내용을 변경하거나 가져오는 데 사용되는 메서드이다.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple innerHTML Example</title>
</head>
<body>
<h1>innerHTML 예제</h1>
<div id="exampleDiv">이곳의 내용이 변경될 예정입니다.</div>
<button onclick="changeContent()">내용 변경</button>

<script>
    function changeContent() {
        var div = document.getElementById("exampleDiv"); // 요소 찾기
        div.innerHTML = "<strong>새로운 내용이 여기에 표시됩니다!</strong>"; // innerHTML을 사용해 내용 변경
    }
</script>
</body>
</html>

```

![innerHTML변경전](https://github.com/king-dong-gun/PKUN_JSP/assets/160683545/df02624f-a109-498f-8f3d-215f755f0fe6)


![innerHTML변경후](https://github.com/king-dong-gun/PKUN_JSP/assets/160683545/921c645e-1fe9-4460-a1cf-34bdb9cd28e1)


- 1. `변수명 = document.getElementById(생성한 ID명)`을 사용하면 변경할 요소를 찾아온다.
- 2. 그 후 `변수명.innerHTML = 새로운 메세지 작성`을 사용하면 기존의 요소가 새로 생성된 요소로 변경된다.

#### 예제문제

- prompt창에 출생년도를 입력받고 현재 나이 띄우기
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>나이 계산</title>
</head>
<body>
<h1 id="wrong">현재 나이 구하기</h1>
<p id="delete">2024년 현재</p>
<p id="outputElement"></p> <!-- 결과를 출력할 요소 생성 -->
<script>
    const year = prompt("태어난 년도를 입력하세요 (YYYY)", "");
    // 입력된 년도가 양의 정수이고, 현재년도보다 작거나 같은지 확인
    if(year > 0 && year <= 2024) {
        const age = 2024 - year; // 2024년 현재 나이 계산
        const output = document.getElementById('outputElement'); // outputElement 요소 참조
        output.innerHTML = `${year}년에 태어난 사람의 나이는 ${age}살 입니다.`; // outputElement 요소의 내용을 업데이트
    } else {
        // 잘못된 입력에 대한 처리
        const output1 = document.getElementById("wrong");
        output1.innerHTML = "잘못된 입력입니다."; // 제목 변경
        const output2 = document.getElementById("delete");
        output2.innerHTML = ""; // 불필요한 텍스트 제거
    }
</script>
</body>
</html>

```

![예제1](https://github.com/king-dong-gun/PKUN_JSP/assets/160683545/fc7c2ffc-05bf-4d3e-8a2b-f8ceadff77c8)


![예제2](https://github.com/king-dong-gun/PKUN_JSP/assets/160683545/84a0a18a-067e-41b1-9901-78e477bf9f23)
