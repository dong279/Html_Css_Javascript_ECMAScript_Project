import { useEffect, useState } from "react";

import { fetchBooks } from "./api/bookApi.js";
import { EMPTY_FORM } from "./lib/bookData.js";

import BookForm from "./components/BookForm.jsx";
import BookTable from "./components/BookTable.jsx";

import "./style.css";

function App() {
  const [books, setBooks] = useState([]); // 표에 그릴 도서 목록
  const [form, setForm] = useState(EMPTY_FORM); // 입력칸 11개의 값
  const [editingId, setEditingId] = useState(null); // null 이면 등록 모드
  const [loading, setLoading] = useState(false); // "로딩 중..." 을 보일까
  const [listError, setListError] = useState(null); // 표 자리에 낼 오류 문구
  const [message, setMessage] = useState(null); // { text, type } 또는 null
  const [detailBook, setDetailBook] = useState(null); // 상세 보기로 고른 도서
  const isEditing = editingId !== null;

  async function loadBooks() {
    setLoading(true);
    setListError(null);

    try {
      const data = await fetchBooks();
      setBooks(data);
    } catch (error) {
      console.error("Error:", error);
      setMessage({ text: error.message, type: "error" });
      setListError("오류: 데이터를 불러올 수 없습니다.");
    } finally {
      // 성공하든 실패하든 로딩 표시는 반드시 끈다.
      setLoading(false);
    }
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- 처음 한 번 목록을 불러오는 것은 의도된 동작입니다
    loadBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  }

  function resetForm() {
    setForm(EMPTY_FORM);
    setEditingId(null);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("지금 폼의 값:", form);
  }

  function handleEdit() {}
  function handleDelete() {}
  function handleDetail() {}

  return (
    <>
      <h1>도서 관리 시스템</h1>
      <BookForm
        form={form}
        isEditing={isEditing}
        message={message}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onCancel={resetForm}
      />

      <BookTable
        books={books}
        loading={loading}
        error={listError}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onDetail={handleDetail}
      />
    </>
  );
}

export default App;
