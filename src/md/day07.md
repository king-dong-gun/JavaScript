## JavaScript 학습 7일차

### JavaScript 기본학습

### fetch 함수
- 원격 API를 간편하게 호출할 수 있도록 브라우저에서 제공하는 함수이다.
- `fetch` 함수는 `HTTP response` 객체를 래핑한 `Promise` 객체를 반환한다. 
  - `Promise`의 후속 처리 메서드인 `then`을 사용하여 `resolve`한 객체를 전달받을 수 있다.
- `fetch` 사용시에 올바른 url을 요청 해야한다.
  - 응답에 대해 `.json()`을 해야한다.


```js
<!--"" 안에는 ''로 한다-->
<input type="button" value="fetch test" onclick=
        "fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(res => console.log(res.json()));">
```
> 단순히 원격 API에 있는 데이터만 가져올 때 사용한다. 
> 
> 응답(res) 객체는 json() 메서드를 제공하고, 이 메서드를 호출하면 응답(res) 객체로부터 JSON 형태의 데이터를 자바스크립트 객체로 변환하여 얻을 수 있다.


### 온라인 쇼핑몰 만들기
1. 바지, 치마, 티셔츠, 색상 별로 카테고리를 만든다.
2. JSON 파일에 상품 리스트를 저장한다.
3. JS -> fetch를 사용해 JSON에 있는 리스트 항목을 가져온다.


#### index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Online Shopping</title>
    <link rel="stylesheet" href="style.css"/>
    <script defer src="src/main.js"></script>
</head>
<body>

<!-- logo -->
<img src="img/logo.png" height="100" width="100" alt="Logo" class="logo"/>
<!-- button -->
<div class="buttons">
    <button class="btn">
        <img src="img/blue_p.png" alt="tshirt-large" class="imgBtn" data-key="type" data-value="tshirt">
    </button>
    <button class="btn">
        <img src="img/blue_s.png" alt="pants-large" class="imgBtn" data-key="type" data-value="pants">
    </button>
    <button class="btn">
        <img src="img/blue_t.png" alt="skirt-large" class="imgBtn" data-key="type" data-value="skirts">
    </button>
    <button class="btn colorBtn blue" data-key="color" data-value="blue">Blue</button>
    <button class="btn colorBtn yellow" data-key="color" data-value="yellow">Yellow</button>
    <button class="btn colorBtn pink" data-key="color" data-value="pink">Pink</button>
</div>
<!-- items -->
<ul class="items">
    <!-- 아이템 항목들은 JSON에서 비동기로 가져오기 때문에 생략한다. --> 
    <!--    <li class="item">-->
    <!--        <img src="img/blue_s.png" alt="blue skirt" class="item_thumbnail">-->
    <!--        <span class="item_description">male, large</span>-->
    <!--    </li>-->
</ul>

</body>
</html>

```

#### style.css
```css
:root {
    --color-black: #3f454d;
    --color-white: #ffffff;
    --color-blue: #3b88c3;
    --color-yellow: #fbbe28;
    --color-pink: #fd7f84;
    --color-light-grey: #dfdfdf;

    /*size*/
    --size-button: 60px;

    /*animation*/
    --animation-duration: 300ms;
    --button-font-size: 18px;
    --base-space: 8px;
    --size-border: 4px;
    --size-thumbnail: 50px;
}

/* 전체 바디 스타일 */
body {
    height: 100vh;
    background-color: var(--color-black);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

/* 로고 설정 */
.logo {
    cursor: pointer;
    transition: transform var(--animation-duration) ease;
}
/* 로고, 버튼 호버 설정 */
.logo:hover,
.btn:hover {
    transform: scale(1.1);
}

/* 버튼 위치 설정 */
.buttons {
    display: flex;
    align-items: center;
}

/* 전체 버튼 설정 */
.btn {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    transition: transform var(--animation-duration) ease;
    margin-right: var(--base-space);
}

/* 이미지 버튼 설정 */
.imgBtn {
    width: var(--size-button);
    height: var(--size-button);
}
/* 칼라 버튼 설정 */
.colorBtn {
    font-size: var(--button-font-size);
    padding: calc(var(--base-space)*2);
    border-radius: var(--size-border);
}

.blue {
    background-color: var(--color-blue);
}

.yellow {
    background-color: var(--color-yellow);
}

.pink {
    background-color: var(--color-pink);
}

/* 아이템 리스트들 크기설정 */
.items {
    width: 60%;
    height: 60%;
    list-style: none;
    padding-left: 0;
    overflow-y: auto;
}
/* 각 아이템들 크기 위치 설정 */
.item {
    background-color: white;
    display: flex;
    align-items: center;
    padding: var(--base-space);
    margin-bottom: var(--base-space);
}
/* 아이템 이미지 크기 설정 */
.item_thumbnail {
    width: var(--size-thumbnail);
    height: var(--size-thumbnail);
}
/* 아이템 텍스트 크기 설정 */
.item_description {
    margin-left: var(--base-space);
    font-size: var(--button-font-size);
}

```

#### data.json
```json
{
  "items": [
    {
      "type": "tshirt",
      "gender": "male",
      "size": "large",
      "color": "blue",
      "image": "img/blue_t.png"
    },{
      "type": "tshirt",
      "gender": "female",
      "size": "large",
      "color": "blue",
      "image": "img/blue_t.png"
    },{
      "type": "skirts",
      "gender": "male",
      "size": "large",
      "color": "blue",
      "image": "img/blue_s.png"
    },{
      "type": "skirts",
      "gender": "female",
      "size": "large",
      "color": "blue",
      "image": "img/blue_s.png"
    },{
      "type": "pants",
      "gender": "male",
      "size": "large",
      "color": "blue",
      "image": "img/blue_p.png"
    },{
      "type": "pants",
      "gender": "female",
      "size": "large",
      "color": "blue",
      "image": "img/blue_p.png"
    },{
      "type": "tshirt",
      "gender": "male",
      "size": "large",
      "color": "yellow",
      "image": "img/yellow_t.png"
    },
    {
      "type": "tshirt",
      "gender": "female",
      "size": "large",
      "color": "yellow",
      "image": "img/yellow_t.png"
    },{
      "type": "skirts",
      "gender": "male",
      "size": "large",
      "color": "yellow",
      "image": "img/yellow_s.png"
    },{
      "type": "skirts",
      "gender": "female",
      "size": "large",
      "color": "yellow",
      "image": "img/yellow_s.png"
    },{
      "type": "pants",
      "gender": "male",
      "size": "large",
      "color": "yellow",
      "image": "img/yellow_p.png"
    },{
      "type": "pants",
      "gender": "female",
      "size": "large",
      "color": "yellow",
      "image": "img/yellow_p.png"
    },{
      "type": "tshirt",
      "gender": "male",
      "size": "large",
      "color": "pink",
      "image": "img/pink_t.png"
    },{
      "type": "tshirt",
      "gender": "female",
      "size": "large",
      "color": "pink",
      "image": "img/pink_t.png"
    },{
      "type": "skirts",
      "gender": "male",
      "size": "large",
      "color": "pink",
      "image": "img/pink_s.png"
    },{
      "type": "skirts",
      "gender": "female",
      "size": "large",
      "color": "pink",
      "image": "img/pink_s.png"
    },{
      "type": "pants",
      "gender": "male",
      "size": "large",
      "color": "pink",
      "image": "img/pink_p.png"
    },{
      "type": "pants",
      "gender": "female",
      "size": "large",
      "color": "pink",
      "image": "img/pink_p.png"
    }
  ]
}
```

#### main.js
```js
// JSON에서 item 가져오기
function loadItems() {
    return fetch('data/data.json')
        .then(response => response.json())  // 응답을 JSON 형태로 변환
        .then(json => json.items);
}

// 리스트에 아이템 업데이트
function displayItems(items) {
    const container = document.querySelector('.items');  // 아이템을 표시할 컨테이너를 선택
    container.innerHTML = items.map(item => createHTMLString(item)).join('');  // 각 아이템을 HTML 문자열로 변환하고, 이를 합쳐서 컨테이너의 내용으로 설정
}

// 아이템 객체를 HTML 문자열로 변환
function createHTMLString(item) {
    return `<li class="item">
        <img src="${item.image}" alt="${item.type}" class="item_thumbnail">
        <span class="item_description">${item.color}, ${item.size}</span>
    </li>`;
}

// 버튼 클릭 시 아이템 필터링 처리
function onButtonClick(event, items) {
    const dataset = event.target.dataset;  // 이벤트가 발생한 요소의 데이터 속성을 가져오기
    const key = dataset.key;  // 필터링할 키를 가져오기
    const value = dataset.value;  // 필터링할 값 가져오기

    if (key == null || value == null) {
        return;  // 필터링할 키나 값이 없으면 함수를 종료
    }
    displayItems(items.filter(item => item[key] === value));  // 필터링된 아이템들을 표시
}

// 이벤트 리스너 설정
function setEventListeners(items) {
    const logo = document.querySelector('.logo');
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', event => onButtonClick(event, items));  // 각 버튼에 클릭 이벤트 리스너를 추가
    });
}

// main
loadItems()  // 아이템을 로드
    .then(items => {
        displayItems(items);  // 아이템을 표시
        setEventListeners(items)  // 이벤트 리스너를 설정
    })
    .catch(console.log)  // 에러 발생 시 콘솔에 로그를 출력

```

1. html로 웹페이지 뼈대를 잡는다.
2. css 파일로 만든 html 스타일링을 한다.
3. json 파일에 상품 리스트들을 저장한다.
4. json에 저장한 리스트들을 `fetch`로 들고온 후 아이템 객체를 HTML 문자열로 변환한다.
5. 설정해놓은 `key`와 `value`로 각 아이템을 필터링 후 `eventListener`로 로고 클릭시 실행되는 리스너를 설정한다.
6. 아이템들을 화면에 출력하는 메인 메서드를 실행하면 다음과 같은 화면이 나온다.


#### 전체화면


![전체화면](https://github.com/king-dong-gun/JavaScript_study/assets/160683545/3994660b-4798-4546-8521-c94a54f3b15e)


#### 노랑버튼 필터


![노랑필터](https://github.com/king-dong-gun/JavaScript_study/assets/160683545/a3c194ab-f266-492d-935c-a5dad9c1351f)


#### 치마버튼 필터


![치마필터](https://github.com/king-dong-gun/JavaScript_study/assets/160683545/ed6ca03a-9679-42aa-92f8-e65e40d305b5)
