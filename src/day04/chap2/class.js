// class 는 template 이다.
// object는 class에 데이터를 넣으면 객체가 된다.


class Person {
    constructor(name, age) {    // 필드
        this.name = name;
        this.age = age;
    }

    speak() {           // 메서드
        console.log(`${this.name}: Hello`);
    }
}

const person = new Person("messi", 34);
console.log(person);
console.log(person.name + "는 " + person.age + "살 입니다.");
person.speak();


// Getter & Setter
class User {
    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age; // setter를 통한 값 설정
    }

    // 내부 프로퍼티를 _age로 변경
    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value < 0 ? 0 : value;  // 내부 프로퍼티 _age를 조정
    }
}

// 나이는 음수가 될 수 없다.
const user = new User("lionel", "messi", -1);
console.log(user);
console.log(user.firstname + " " + user.lastname + "는 " + user.age + "살 입니다.");
console.log(user.age);

// 생성자없이 필드를 작성하면 public, #를 붙히면 private
class Exper {
    publicField = 2;
    #privateField = 0;
}

const exper = new Exper();
console.log(exper.publicField);
console.log(exper.privateField);

// static -> static 을 붙히면 클래스 맴버가 된다.
// 클래스 이름으로 접근해야 한다.
// 각 객체마다 만들어지지 않고 공통으로 사용되는 데이터는 메서드에서 사용한다.
class Article {
    static publisher = "JavaScript";

    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublish() {
        console.log(Article.publisher);
    }
}

const article = new Article(1);
console.log(article.articleNumber);
console.log(Article.publisher);

// 상속
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing color of ${this.color}`);
    }

    getArea() {
        return this.width * this.height;
    }
};

class Rectangle extends Shape {
};
const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw();
console.log(rectangle.getArea());

class Triangle extends Shape {
    getArea() {
        return (this.height * this.height) / 2;
    }
}
const triangle = new Triangle(20, 20, "red");
triangle.draw();
console.log(triangle.getArea());

// instanceof: 좌측 오브젝트가 우측 클래스의 오브젝트인지 확인한다.
// 모든 오브젝트의 최상의 Object의 클래스를 상속한다.
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);

