// 첫번째 <li>에 접근
document.querySelector("li").style.background = "red";

// 버튼에 접근
const btn = document.querySelector("#myBtn");
btn.addEventListener("click", () => {
    alert("버튼을 클릭되었습니다.")
});

