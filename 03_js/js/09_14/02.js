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
