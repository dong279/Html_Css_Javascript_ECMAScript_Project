import { useState } from "react";

import { EMPTY_FORM } from "./lib/bookData.js";

import "./style.css";

function App() {
  const [books, setBooks] = useState([]); // 표에 그릴 도서 목록
  const [form, setForm] = useState(EMPTY_FORM); // 입력칸 11개의 값
  const [editingId, setEditingId] = useState(null); // null 이면 등록 모드
  const [loading, setLoading] = useState(false); // "로딩 중..." 을 보일까
  const [listError, setListError] = useState(null); // 표 자리에 낼 오류 문구
  const [message, setMessage] = useState(null); // { text, type } 또는 null
  const [detailBook, setDetailBook] = useState(null); // 상세 보기로 고른 도서

  return (
    <>
      <h1>도서 관리 시스템</h1>
    </>
  );
}

export default App;
