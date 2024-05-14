const liElements = document.getElementsByClassName("a");
console.log(liElements);

for(const liElement of liElements) {
    console.log(liElement.textContent);
}