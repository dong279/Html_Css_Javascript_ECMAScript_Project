function BlackDog() {
  this.name = "흰둥이";
  return {
    name: "검둥이",
    bark: function () {
      console.log(this.name + " 멍멍!");
    },
    bark2: () => {
      console.log(this.name + " 멍멍!");
    },
  };
}

const blackDog = new BlackDog();
blackDog.bark();
blackDog.bark2();

// 화살표 함수
function WhiteDog() {
  this.name = "흰둥이";
  return {
    name: "검둥이",
    bark: () => {
      console.log(this.name + " 멍멍!");
    },
  };
}
const whiteDog = new WhiteDog();
whiteDog.bark(); // 흰둥이 멍멍!

console.log("-------------------------");

const user = {
  name: "둘리",
  age: 30,
  phone: {
    home: "1234",
    mobile: "4566",
  },
};

// 예전 방식이라면 하나씩 꺼내야 한다
// const name = user.name;
// const age = user.age;
// console.log(name);
// console.log(age);
// console.log(user.phone.home);
// console.log(user.phone.mobile);

// 구조 분해 할당 — 한 줄로
// const { name, age, phone } = user;
// console.log(name); // 둘리
// console.log(age); // 30
// console.log(phone); // { home: '1234', mobile: '4566' }
// const { home, mobile } = phone;
// console.log(home, mobile);

const {
  name,
  age,
  phone: { home, mobile },
  address = "주소없음",
} = user;
console.log(name); // 둘리
console.log(age); // 30
console.log(home, mobile);
console.log(address);

console.log("-------------------------");

const colors = ["red", "green", "blue"];
const [first, , second] = colors;
console.log(first, second); // red green

console.log("-------------------------");

const obj = {
  names: "React",
  hello() {
    console.log("hello es");
  },
  greet() {
    return this.names;
  },
};

// console.log(obj.greet()); // 'React'  — 객체를 통해 부르면 정상

const { names, hello, greet } = obj;
console.log(names); // 'React'
console.log(hello());
console.log(greet()); // undefined — this 가 obj 가 아니게 됨

// (1) bind() 로 객체를 붙여 준다
const boundGreet = obj.greet.bind(obj);
console.log(boundGreet()); // 'React'

console.log("-------------------------");

// (2) this 대신 객체 이름을 직접 쓴다
const obj2 = {
  names: "React",
  greet2: () => obj2.names,
};
const { greet2 } = obj2;
console.log(greet2());

console.log("-------------------------");

// ... 펼침 연산자(spread operator)
const a = [1, 2];
const b = [3, 4];
const c = [...a, ...b];
console.log(c);

const all = [...a, ...b]; // [1, 2, 3, 4]   — 합치기
const copy = [...a]; // [1, 2]         — 복사본 (a 와는 다른 배열)
const added = [0, ...a]; // [0, 1, 2]      — 앞에 끼워 넣기
console.log(all);
console.log(copy);
console.log(added);

console.log("-------------------------");

// // 함수 인자로 펼치기
const scores = [88, 92, 75];
console.log(Math.max(...scores)); // 92   — Math.max(88, 92, 75) 와 같다

// // 문자열도 펼칠 수 있다
// [..."abc"]; // ["a", "b", "c"]

console.log("-------------------------");

const student = { name1: "홍길동", age1: 20 };
console.log(student); // { name: '홍길동', age: 20 }

const { name1, age1 } = { ...student }; // 값이 같은 새 객체
console.log(name1, age1);

const updated = { ...student, age1: 21 }; // age 만 바꾼 새 객체
console.log(updated); // { name: '홍길동', age: 21 }

const merged = { ...student, email: "a@b.com" }; // 속성 추가하며 합치기
console.log(merged);

console.log("-------------------------");

// 기본값 + 사용자 입력 패턴
const defaults = { age: 20, email: null };
const input = { name: "홍길동", email: "a@b.com" };
const result = { ...defaults, ...input };
// { age: 20, email: 'a@b.com', name: '홍길동' }

console.log(result);

const arr1 = [10, 20, 30];
const arr2 = arr1; // 같은 주소, 원본이 변경될 수 있음
arr1.push(40);

console.log(arr1, arr2);

console.log("-------------------------");

// 매개변수 자리 — 개수가 정해지지 않은 인자를 배열로 받는다
function sum(...numbers) {
  console.log(numbers);
  //map(function), reduce(T,T,T)
  return numbers.reduce((acc, n) => acc + n); //, 0);
}
console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4, 5)); // 15

function concate(...msgs) {
  return msgs.reduce((m1, m2) => m1 + m2);
}
console.log(concate("h", "e", "l", "l", "o"));

// 앞의 것만 따로 받고 나머지를 모으기
function log(level, ...messages) {
  console.log(level, messages); // "INFO"  ["a", "b"]
}
log("INFO", "a", "b");

// 구조 분해에서도 쓴다 (5장 참고)
const { name2, ...rest } = { name2: "홍길동", age2: 20, email2: "a@b.com" };
console.log(rest); // { age: 20, email: 'a@b.com' }

const [first1, ...others] = [1, 2, 3];
console.log(others); // [2, 3]

console.log("-------------------------");

// ES5 방식 — || 로 처리하다 보니 "" 이나 0 도 함께 걸러져 버린다
function greet1(name) {
  name = name || "손님";
  console.log(name + "님 환영합니다");
}

// ES6 기본 매개변수
function greet3(name = "손님") {
  console.log(`${name}님 환영합니다`);
}

greet1(); // 손님님 환영합니다
greet1("홍길동"); // 홍길동님 환영합니다
greet3(undefined); // 손님님 환영합니다   — undefined 는 "안 넘긴 것"으로 본다
greet3(null); // null님 환영합니다   — null 은 넘긴 값이므로 그대로 쓰인다

// 앞 매개변수를 참조할 수 있다
function range(start, end = start + 10) {
  return [start, end];
}
range(5); // [5, 15]

console.log("-------------------------");

// 객체 매개변수 + 구조 분해 + 기본값
function createStudent({ name, age = 20, email = null } = {}) {
  return { name, age, email };
}
console.log(createStudent({ name: "홍길동" })); // { name: '홍길동', age: 20, email: null }
console.log(createStudent()); // 인자가 없어도 오류가 나지 않는다

// 화살표 함수도 같다
const multiply = (a, b = 1) => a * b;
multiply(5); // 5

console.log("-------------------------");

const name3 = "홍길동";
const studentNumber = "20241234";

// 변수 이름과 속성 이름이 같으면 한 번만 쓴다
const student1 = { name3, studentNumber };
console.log(student1);
// { name3: '홍길동', studentNumber: '20241234' } 와 같다

const student2 = { name, studentNumber };
console.log(student2);

// 속성 이름을 변수로 정하기 — 대괄호를 쓴다
const key = "email";
const obj1 = { [key]: "a@b.com" }; // { email: 'a@b.com' }
console.log(obj);
