/* 배열 */

// 빈 배열 생성
const arr1 = new Array();   // Array() 생성자 함수로 배열을 생성
const arr2 = [1, 2, 3, 4, 5];   // 배열 리터널을 사용
console.log(arr1);
console.log(arr2);


// 일반 for 문
const fruits = ["🍎", "🍉", "🍌", "🍇", "🍓"];
console.log(fruits);
for (let i = 0; i < 5; i++) {
    console.log(fruits[i]);
}

// fruits 배열의 각 요소에 대해 반복 실행
for (let fruit of fruits) {
    console.log(fruit);
}

// forEach 문
fruits.forEach(function (fruit, index, array) {
    console.log(fruit, index, array);
});

// forEach 애로우 함수
fruits.forEach((fruit, index) => {
console.log(fruit, index);
})

// 한줄인 경우 중괄호 생략 가능
fruits.forEach((fruit) =>
 console.log(fruit)
)

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

// 배열 마지막 요소 삭제하기
ary.pop();
console.log(ary);


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
console.log(animal.includes("🐨"));
