## JavaScript 학습 4일차

### JavaScript 기본학습

### class
- 객체를 직접 작성하여 정의하고 생성할 수도 있지만, 클래스로 만들어주면 여러 객체를 더 쉽게 만들 수 있다.
  - 클래스는 객체를 생성하기 위한 템플릿이다.
- 클래스 = 붕어빵 기계
- 객체 = 붕어빵

```js
class Person {                  // 클래스
    constructor(name, age) {    // 필드
        this.name = name;
        this.age = age;
    }
    speak() {                   // 메서드
        console.log(`${this.name}: Hello`);
    }
}

const person = new Person("messi", 34);
console.log(person);
console.log(person.name + "는 " + person.age + "살 입니다.");
person.speak();
```


![class1](https://github.com/king-dong-gun/JavaScript_study/assets/160683545/bca83fcf-45a8-4d88-a268-ad61954f9ab1)



- 클래스 내에 정의된 함수를 `method`라고 부른다.
- 클래스를 통해 생성된 객체를 `인스턴스(instance)`라고 부른다.
- 클래스도 함수처럼 호출하기 전까지는 코드가 실행되지 않는다.
- 클래스 이름은 `Person`과 같이 항상 대문자로 시작한다.
- `constructor`는 `class`에서 필요한 기초 정보를 세팅하는 곳이다.
  - 객체를 `new`로 생성할 때 가장먼저 자동으로 호출된다.
  - `constructor()` 메소드에서 `name`과 `age`, 2개의 매개변수로 `Person` 인스턴스의 `name`, `age` 프로퍼티(객체의 속성)에 값을 할당했다.
  - `this` 는 본인 객체를 의미한다. 클래스 내에서 메소드끼리 소통하기 위해서는 `this`가 필요하다.


### Getter & Setter
- `Getter`는 프로퍼티(객체의 속성) 값을 반환하는 메서드이다.
- `Setter`는 객체의 속성 값을 설정, 변경하는 메서드이다.

```js
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
```

- `this.age = age;` 부분은 `age` 프로퍼티의 `setter` 메소드를 호출하여 `_age` 내부 프로퍼티를 설정한다.
- `age` 프로퍼티의 `getter`: `this._age`의 값을 반환한다. 
- `age` 프로퍼티의 `setter`: `age`값을 설정할 때 호출한다. 
  - `age`값이 0보다 작다면 `_age`를 0으로 설정한다.    
  - `age`값이 0보다 크다면 `_age`를 해당값으로 설정한다.    

### static
- `static` 키워드를 붙히면 클래스 맴버가 된다.
- `static`은 클래스 이름으로 접근해야하고, 공통으로 사용되는 데이터는 메서드에서 사용한다.

```js
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
```



