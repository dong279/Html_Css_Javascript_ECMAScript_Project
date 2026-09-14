const user = { name: "김코딩", age: 0, address: null };

// ?. 옵셔널 체이닝 — 중간이 없으면 오류 대신 undefined
console.log(user.phone.home); // TypeError
console.log(user.phone?.home); // undefined

// ?? 널 병합 — 왼쪽이 null 또는 undefined 일 때만 오른쪽
console.log(user.age || 25); // 25   ← 0 은 falsy 라 밀려난다
console.log(user.age ?? 25); // 0    ← 의도한 0 이 유지된다
console.log(user.address ?? "주소 미입력"); // '주소 미입력'
