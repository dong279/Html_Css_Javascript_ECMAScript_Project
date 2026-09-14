fetch("https://jsonplaceholder.typicode.com/posts/1") // 요청 보내기
  .then((response) => response.json()) // 응답을 JSON 으로 변환 (이것도 Promise)
  .then((data) => {
    console.log("받은 데이터:", data);
    document.getElementById("result").innerHTML = data.title;
  })
  .catch((error) => {
    console.error("에러 발생:", error);
  });
