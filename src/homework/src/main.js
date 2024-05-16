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
