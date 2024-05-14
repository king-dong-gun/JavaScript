const liElements = document.getElementsByTagName('li');
console.log(liElements);

for(const liElement of liElements){
    console.log(liElement.textContent);
}

for (let i = 0; i < liElements.length; i++) {
    console.log(liElements[i].textContent);
}

const array = [...liElements];  // 스프레드 문법으로 배열 객체 생성
array.forEach((li) => {
    console.log(li.textContent);
})
