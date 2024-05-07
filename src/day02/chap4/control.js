// 제어문

// if 문
const name = " ";
if (name === "adam") {
    console.log("Welcome adam");
} else if (name === "scott") {
    console.log("Welcome scott");
} else {
    console.log("Who are you?");
}

console.log(name === "smith" ? "yes" : "no");

// switch 문
const brower = "Chrome";
switch (brower) {
    case "IE" :
        console.log("Microsofr");
        break;
    case "FireFox" :
        console.log("Mozilla");
        break;
    case "Chrome" :
        console.log("Google");
        break;
    default :
        console.log("What...?")
        break;
}

// 입력한 숫자가 3의 배수인지 확인하는 프로그램 작성
let number = prompt("정수를 입력하세요");

if (number == null) {
    alert("취소하셨습니다.");
} else {
    if (number % 3 === 0) {
        alert(number + "는 3의 배수입니다.");
    } else {
        alert(number + "는 3의 배수가 아닙니다.");
    }
}


document.open();
let session = prompt("관심 세션을 선택해주세요 \n 1. 마케팅 \n 2. 개발 \n 3. 디자인");
// string 타입으로 받기 때문에 case "" -> 적어줘야한다.
switch (session) {
    case "1":
        document.write("<p> 마케팅 세션은 <strong>201호</strong>에서 진행됩니다.</p>");
        break;
    case "2":
        document.write("<p> 개발 세션은 <strong>202호</strong>에서 진행됩니다.</p>");
        break;
    case "3":
        document.write("<p> 디자인 세션은 <strong>203호</strong>에서 진행됩니다.</p>");
        break;
    default :
        alert("세션을 확인해주세요.");
}
document.close();


// 반복문
// for

document.open();
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
document.write("<h1>1~100의 합: </h1>" + sum);
document.close();

let arrays = [10, 20, 30, 40, 50];
for (let i = 0; i < 5; i++) {
    console.log(arrays[i]);
}
/* for (let array of arrays) {  // 인덱스를 사용할 수 없다.
    console.log(i);
}
*/


let i = 5;
while(i > 0) {
    console.log(`while: ${i}`);
    i--;
}

var count = 0;

//무한루프
while(true){
    console.log(count);
    count++;
    //count가 3이면 코드 블록을 탈출한다.
    if(count === 3) break;
} // 0 1 2