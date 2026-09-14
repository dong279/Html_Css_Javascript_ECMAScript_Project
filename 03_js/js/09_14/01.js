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
