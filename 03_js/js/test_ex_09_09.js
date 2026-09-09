// 1. 03_js/js/{파일명}.js 경로로 파일 생성
// 2. node 03_js/js/{파일명}.js로 실행 (터미널에서 실행.)

foo();

function foo() {
  var b = "hello";
  if (true) {
    let a = "bye";
    //let a = "바이";
    console.log(a); // bye
    console.log(this.b);
  }
  console.log(b); // bye
}

const value = 100;
//value = 200;

const myList = [1, 2];
myList.push(3);
console.log(myList);

console.log("-------------------------");

const name = "  홍길동  ";
name.trim(); // "홍길동"  — 앞뒤 공백 제거
name.length; // 글자 수
console.log("abc".toUpperCase()); // "ABC"
console.log("a,b,c".split(",")); // ["a", "b", "c"]
console.log(name.includes("길")); // true

// Object Literal
const user1 = {
  name: "Alice",
  // greet() {
  greet: function () {
    console.log(`Hello, I'm
      ${this.name}`);
  },
};
console.log(user1.name);
user1.greet();

console.log("-------------------------");

//생성자 함수
function Person(name) {
  this.name = name; // this -> 생성되는 인스턴스
}

const john = new Person("John");
console.log(john.name); // "John"

console.log(3 == "3"); //true(1)
console.log(3 === "3"); //false(0)

console.log("-------------------------");

const user = {
  // name: "김코딩",
  name: "",
  age: 0, // 의도적으로 0 을 넣었다
  address: null,
};
console.log(user.address);
console.log(user.phone);

console.log(user.name ?? "이름없음"); // "김코딩" //""
console.log(user.name || "이름없음"); //"이름없음"

console.log(user.age || 25); // 25   — 0 이 falsy 라 밀려난다
console.log(user.age ?? 25); // 0    — 의도한 0 이 그대로 유지된다

console.log(user.address ?? "주소 미입력"); // "주소 미입력"
console.log(user.address || "주소 미입력"); // "주소 미입력"

console.log(user.phone ?? "연락처 없음"); // "연락처 없음"   (undefined 이므로)

console.log("-------------------------");

const student1 = { name: "홍길동" };

// console.log(student.detail.address); // TypeError — undefined 에 점을 찍었다
console.log(student1.detail?.address); // undefined — 오류 없이 넘어간다
console.log(student1.detail?.address ?? "-"); // "-"      — 두 연산자를 함께 쓰면

// console.log(student.getName?.()); // 함수가 없으면 undefined (호출하지 않음)
// console.log(list?.[0]);

console.log("-------------------------");

const students = [
  { id: 1, name: "홍길동" },
  { id: 7, name: "둘리" },
];
// 배열을 순회할 때 — 가장 많이 씁니다
students.forEach((student) => console.log(student.name));

// for...of — 중간에 break 로 멈춰야 할 때
console.log("for-of");
for (const student of students) {
  if (student.id === 7) break;
  console.log(student.name);
}

console.log("기존 for loop");
// 전통적인 for — 인덱스가 필요할 때
for (let i = 0; i < students.length; i++) {
  console.log(i, students[i].name);
}

console.log("-------------------------");

//선언식 형태로 선언된 함수는 호이스팅 된다 .(순서 상관 없이 호출 가능)
foo();
//함수 선언식
function foo() {
  var b = "hello";
  if (true) {
    let a = "bye";
    console.log(a); // bye
    console.log(b);
  }
  console.log(b); // bye
}

// foo2(); 선언식이 아닌 표현식은 호이스팅이 안되서 오류남.
//표현식 형태로 선언된 함수는 호이스팅 되지 않는다.
const foo2 = function () {
  console.log("표현식 함수");
};
foo2();

console.log("-------------------------");

const student = {
  name: "홍길동",
  studentNumber: "20241234",
  // "student Number": "20241234"
  age: 20,
};
console.log(student.name); // "홍길동"   — 점 표기법 (주로 이걸 씁니다)
// console.log(student["student Number"]); - 대괄호로 띄워쓰기 가능은 하지만 추천 X
console.log(student["name"]); // "홍길동"   — 대괄호 표기법
student.age = 21; // 값 변경
student.email = "a@b.com"; // 새 속성 추가
console.log(student);

console.log("-------------------------");

// 평평한 구조 (실습 3-5까지)
const studentData1 = {
  name: "홍길동",
  studentNumber: "20241234",
  address: "서울시",
  phoneNumber: "010-1234-5678",
};
console.log(studentData1.address); // "서울시"

// 중첩 구조 (실습 3-7부터)
const studentData = {
  name: "홍길동",
  studentNumber: "20241234",
  detailRequest: {
    // 객체 안의 객체
    // address: "서울시",
    phoneNumber: "010-1234-5678",
  },
};
console.log(studentData.detailRequest?.address ?? "-"); // "서울시"  — 점을 두 번
console.log(studentData.address); // undefined — 여기엔 없습니다!

console.log("-------------------------");

const text = JSON.stringify(studentData); // 객체 → 문자열   (보낼 때)
console.log(text);
const obj = JSON.parse(text); // 문자열 → 객체   (받을 때)
console.log(obj.name);

console.log("-------------------------");

const person = {
  name: "홍길동",
  age: 30,
  hobbies: ["독서", "여행"],
  isStudent: false,
};

// 객체 → JSON 문자열
const jsonString = JSON.stringify(person);
console.log(jsonString);
// {"name":"홍길동","age":30,"hobbies":["독서","여행"],"isStudent":false}

// 보기 좋게 출력 (들여쓰기 2칸)
console.log(JSON.stringify(person, null, 2));
/*
{
  "name": "홍길동",
  "age": 30,
  "hobbies": [
    "독서",
    "여행"
  ],
  "isStudent": false
}
*/
