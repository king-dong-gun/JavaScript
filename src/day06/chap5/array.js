// join() 함수: array -> string
const fruits = ["apple", "banana", "orange"];
const result = fruits.join();
console.log(result);

// split() 함수: string -> array
const animal = "🐶, 🐱, 🐰, 🦊"
const res = animal.split(",");
console.log(res);

class Player {
    constructor(name, age, goat, score) {
        this.name = name;
        this.age = age;
        this.goat = goat;
        this.score = score;
    }
}

const player = [
    new Player("messi", 34, true,"100"),
    new Player("ronaldo", 36, true,"90"),
    new Player("bruno", 29, true,"80"),
    new Player("rashford", 26, false, "50"),
    new Player("martial", 28, false,"1"),
];

// find(): 일치하는 요소를 리턴
{
    const find = player.find(function(player, index){
        // console.log(studnet, index);
        return player.score === "100";
    });
    console.log(find);
}

// filter: true값 전부 리턴
{
    const filter = player.filter((player) => player.goat);
    console.log(filter);
}

// map:
{
    // const map = students.map((student) => student);
    const map = player.map(player => player.score * 2);
    console.log(map);
}