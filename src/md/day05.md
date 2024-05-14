## JavaScript 학습 5일차

### JavaScript 기본학습

### DOM(문서 객체 모델)
- JavaScript를 HTML에 적용하기 위해서 HTML의 요소를 `문서 객체 모델(Document Object Model)`로 이해하는 것이다.


![dom2](https://github.com/king-dong-gun/JavaScript_study/assets/160683545/871fb066-297d-4118-9061-40304a76880c)




#### DOM API
- `Document`: <html> DOM 트리의 루트 노드
- `Element`: 각 태그
- `arribute`: 속성
- `style`: css
- `collection`: 배열

#### HTMLCollection
- JavaScript가 문서객체에 접근해서 받아오는 리턴 타입
- HTMLCollection 객체를 반환하는 메서드
  - `getElementByTagName("name")`: 문자열로 지정된 태그 이름과 일치하는 모든 요소를 선택하고 `HTMLCollection`객체를 반환한다.

  - `getElementByClassName("name")`: 지정된 클래스 이름과 일치하는 모든 요소를 선택하고 `HTMLCollection`객체를 반환한다.
  - `getElementById("id")`: 지정된 아이디 이름과 일치하는 모든 요소를 선택하고 `HTMLCollection`객체로 반환한다.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="veiwport" content="width=devic-width, initial-scale=1.0">
    <title>ElementById</title>
</head>
<body>
<p id="welcome">환영합니다.</p>
<p id="hello">안녕하세요</p>
<script>
    const changeColorRed = (newColor) => {
        const welcome = document.getElementById("welcome");
        welcome.style.color = newColor;
    }

    const changeColorBlue = (newColor) => {
        const hello = document.getElementById("hello");
        hello.style.color = newColor
    }
</script>
<button type="button" onclick="changeColorRed('red');">빨강 변신</button>   <!--빨강변신 버튼 생성-->
<button type="button" onclick="changeColorBlue('blue')">파랑 변신</button>  <!--파랑변신 버튼 생성-->
</body>
</html>
```

![elementbyid](https://github.com/king-dong-gun/JavaScript_study/assets/160683545/706699c4-1380-44fc-a4ea-c811b4c002c1)


### try / catch 예외처리
```javascript
try {
    예외를 처리하길 원하는 실행 코드;
} catch(ex) {
    예외가 발생할 경우 실행될 코드;
} finally {
  try 블록이 종료되면 무조건 실행될 코드;
}
```

- `try`: 기본적으로 가장 먼저 실행되고, 에러 발생이 예상되는 코드를 작성한다.
- 