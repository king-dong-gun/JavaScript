test(); // "Hoisting" 출력

function test() {
    console.log("Hoisting");
}

test(); // "Hoisting" 출력

console.log(name); // undefined
var name = "James";
console.log(name); //James

// console.log(name1); // ReferenceError
// const name1 = "James";


console.log(name2); // ReferenceError
let name2 = "James";
