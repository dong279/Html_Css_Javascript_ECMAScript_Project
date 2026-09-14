const student = { name: "홍길동", age: 20 };

console.log(Object.keys(student)); // ["name", "age"]
console.log(Object.values(student)); // ["홍길동", 20]
console.log(Object.entries(student)); // [["name", "홍길동"], ["age", 20]]

// fromEntries 는 그 반대 — [키, 값] 쌍을 다시 객체로 조립한다
console.log(
  Object.fromEntries([
    ["name", "홍길동"],
    ["age", 20],
  ]),
);

console.log(Object.fromEntries(Object.entries(student)));

console.log("-------------------------");

const scores = { korean: 90, english: 55, math: 78 };
console.log(Object.entries(scores));

// 80점 이상만 남기기
const passed = Object.fromEntries(
  Object.entries(scores).filter(([subject, score]) => score >= 80),
);
// { korean: 90 }

// 모든 값에 5점씩 더하기
const bonus = Object.fromEntries(
  Object.entries(scores).map(([subject, score]) => [subject, score + 5]),
);
// { korean: 95, english: 60, math: 83 }

console.log("-------------------------");

const scores1 = { korean: 90, english: 55, math: 78 };
console.log(Object.entries(scores));
console.log(Object.entries(scores).filter(([subject, score]) => score >= 80));

// 80점 이상만 남기기
const passed1 = Object.fromEntries(
  Object.entries(scores).filter(([subject, score]) => score >= 80),
);
// { korean: 90 }

// 모든 값에 5점씩 더하기
const bonus1 = Object.fromEntries(
  Object.entries(scores).map(([subject, score]) => [subject, score + 5]),
);
// { korean: 95, english: 60, math: 83 }

Object.fromEntries(
  new Map([
    ["a", 1],
    ["b", 2],
  ]),
); // { a: 1, b: 2 }
console.log(
  Object.fromEntries(
    new Map([
      ["a", 1],
      ["b", 2],
    ]),
  ),
);

console.log("-------------------------");

// // const studentForm = {
// //   name: "홍길동",
// //   studentNumber: "CS001",
// //   address: "서울",
// //   email: "aa@a.com",
// // };

// const { name, studentNumber, address } = Object.fromEntries(
//   new FormData(studentForm).entries(),
// );

// console.log(name);
// console.log(studentNumber);
// console.log(address);

// // 실전에서 가장 많이 보게 되는 조합 — fromEntries + 구조 분해
// // Form 에서 입력한 데이터를 객체로 생성하고, 구조 분해 할당으로 각각의 변수로 할당함
// const { name, studentNumber, address } = Object.fromEntries(
//   new FormData(studentForm).entries(),
// );

console.log("-------------------------");
const user = { name: "김코딩", age: 0, address: null };

// ?. 옵셔널 체이닝 — 중간이 없으면 오류 대신 undefined
console.log(user.phone.home); // TypeError
console.log(user.phone?.home); // undefined

// ?? 널 병합 — 왼쪽이 null 또는 undefined 일 때만 오른쪽
console.log(user.age || 25); // 25   ← 0 은 falsy 라 밀려난다
console.log(user.age ?? 25); // 0    ← 의도한 0 이 유지된다
console.log(user.address ?? "주소 미입력"); // '주소 미입력'
