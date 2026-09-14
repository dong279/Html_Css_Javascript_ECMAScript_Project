async function getData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
    );
    const data = await response.json();
    console.log("데이터 받았어요!", data);
    return data;
  } catch (error) {
    console.error("에러 발생:", error);
  }
}

getData();
