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
