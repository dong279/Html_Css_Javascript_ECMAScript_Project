import { useEffect, useRef, useState } from "react";

import {
  fetchBooks,
  fetchBook,
  createBook,
  updateBook,
  deleteBook,
} from "./api/bookApi.js";
import { validateBook } from "./lib/validation.js";
import { EMPTY_FORM, toRequest, toFormValues } from "./lib/bookData.js";

import BookForm from "./components/BookForm.jsx";
import BookTable from "./components/BookTable.jsx";

import "./style.css";

const MESSAGE_TIMEOUT = 3000;

function App() {
  const [books, setBooks] = useState([]); // 표에 그릴 도서 목록
  const [form, setForm] = useState(EMPTY_FORM); // 입력칸 11개의 값
  const [editingId, setEditingId] = useState(null); // null 이면 등록 모드
  const [loading, setLoading] = useState(false); // "로딩 중..." 을 보일까
  const [listError, setListError] = useState(null); // 표 자리에 낼 오류 문구
  const [message, setMessage] = useState(null); // { text, type } 또는 null
  const [detailBook, setDetailBook] = useState(null); // 상세 보기로 고른 도서

  const isEditing = editingId !== null;

  const formRef = useRef(null);

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
      setLoading(false);
    }
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- 처음 한 번 목록을 불러오는 것은 의도된 동작입니다
    loadBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!message) {
      return;
    }
    if (message.type !== "success") {
      return;
    }

    const timer = setTimeout(() => setMessage(null), MESSAGE_TIMEOUT);

    return () => clearTimeout(timer);
  }, [message]);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  }

  function resetForm() {
    setForm(EMPTY_FORM);
    setEditingId(null);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setMessage(null);

    const bookData = toRequest(form);

    const errorMessage = validateBook(bookData);
    if (errorMessage) {
      setMessage({ text: errorMessage, type: "error" });
      return; // early return
    }

    try {
      if (editingId) {
        await updateBook(editingId, bookData);
        setMessage({
          text: "도서 정보가 성공적으로 수정되었습니다.",
          type: "success",
        });
      } else {
        await createBook(bookData);
        setMessage({
          text: "도서가 성공적으로 등록되었습니다.",
          type: "success",
        });
      }

      resetForm();
      await loadBooks(); // 목록 새로고침
    } catch (error) {
      console.error("Error:", error);
      setMessage({ text: error.message, type: "error" }); // 서버가 보낸 문구
    }
  }

  async function handleEdit(bookId) {
    setMessage(null);

    try {
      const book = await fetchBook(bookId);

      setForm(toFormValues(book));
      setEditingId(bookId);

      formRef.current?.scrollIntoView({ behavior: "smooth" });
    } catch (error) {
      console.error("Error:", error);
      setMessage({ text: error.message, type: "error" });
    }
  }

  // book_ecma 의 removeBook
  async function handleDelete(bookId) {
    if (!confirm("정말로 이 도서를 삭제하시겠습니까?")) {
      return;
    }

    try {
      await deleteBook(bookId);
      setMessage({
        text: "도서가 성공적으로 삭제되었습니다.",
        type: "success",
      });

      if (editingId === bookId) {
        resetForm();
      }

      await loadBooks();
    } catch (error) {
      console.error("Error:", error);
      setMessage({ text: error.message, type: "error" });
    }
  }

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
        containerRef={formRef}
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
