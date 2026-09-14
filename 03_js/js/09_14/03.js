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
