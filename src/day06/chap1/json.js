// // object to json
// let json = JSON.stringify(true);
// console.log(json);
//
// // array to json
// json = JSON.stringify(["ManU", "BarC", "RMA"]);
// console.log(json);
//
// // 객체는 ({})로 묶어 표현, 배열은 ([])로 묶어서 표현한다.
// [1, "ManC", "Liv", "Ars", true, {inkey: "value"}, null]
//
// // 숫자, 문자열, 오브젝트, null 표현
// {
//     key: 1
// }        // 숫자
// {
//     key: "str"
// }    // 문자열
// {
//     key: {
//         inkey: "value"
//     }
// } // 오브젝트
// {
//     key: null
// }     // null
//
// // object
// const team = {
//     name: "ManU",
//     color: "red",
//     size: null,
//     birthDate: new Date(),
//     // 함수는 데이터가 아니기 때문에 json 변환이 되지 않는다.
//     table: () => {
//         console.log(`&{this.name} can  go europa`);
//     }
// };
// json = JSON.stringify(team);
// console.log(json);
//
// // json을 통해 원하는 프로퍼티만 선택해서 출력
// json = JSON.stringify(team, ["name", "color"]);
// console.log(json);
//
// // 콜백함수
// json = JSON.stringify(team, (key, value) => {
//     console.log(`key: ${key}, value: ${value}`);
//     return value;
// });
//
// // json -> object 타입 변환
// const object = JSON.parse(json);
// console.log(object);
//
// console.log(team.birthDate.getDate());  // null 타입
// console.log(object.birthDate);          // String 타입
//
// const obj = JSON.parse(json, (key, value) => {
//     console.log(`key: ${key}, value: ${value}`);
// // return value;
//     return key === "birthDate" ? new Date(value) : value;
// });
//
// console.log(obj.birthDate);
// console.log(obj.birthDate.getDate());
//
// console.clear();

const str = `{
  "name": "홍길동",
  "age": 25,
  "married": false,
  "family": { "father": "홍판서", "mother": "춘섬" },
  "hobbies": ["독서", "도술"],
  "jobs": null
}`;

const obj = JSON.parse(str);

console.log(obj);

const obj1 = {
    name: "홍길동",
    age: 25,
    married: false,
    family: {
        father: "홍판서",
        mother: "춘섬",
    },
    hobbies: ["독서", "도술"],
    jobs: null,
};

const str1 = JSON.stringify(obj1);

console.log(str1);