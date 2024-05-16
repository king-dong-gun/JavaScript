## JavaScript 학습 7일차

### JavaScript 기본학습

### fetch 함수
- 원격 API를 간편하게 호출할 수 있도록 브라우저에서 제공하는 함수이다.
- `fetch` 함수는 `HTTP response` 객체를 래핑한 `Promise` 객체를 반환한다. 
  - `Promise`의 후속 처리 메서드인 `then`을 사용하여 `resolve`한 객체를 전달받을 수 있다.



```js
<!--"" 안에는 ''로 한다-->
<input type="button" value="fetch test" onclick=
        "fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(res => console.log(res.json()));">
```
> 단순히 원격 API에 있는 데이터만 가져올 때 사용한다. 
> 
> 응답(res) 객체는 json() 메서드를 제공하고, 이 메서드를 호출하면 응답(res) 객체로부터 JSON 형태의 데이터를 자바스크립트 객체로 변환하여 얻을 수 있다.


