import { useEffect } from "react";

import { BookTable, useBookStore, BOOK_MESSAGES } from "@/features/books";
import { LinkButton } from "@/shared/ui/Button/Button.jsx";
import { PATHS } from "@/shared/config/paths.js";
import styles from "./BookListPage.module.css";

export default function BookListPage() {
  const books = useBookStore((state) => state.books);
  const loading = useBookStore((state) => state.loading);
  const error = useBookStore((state) => state.error);
  const loadBooksOnce = useBookStore((state) => state.loadBooksOnce);
  const removeBook = useBookStore((state) => state.removeBook);

  useEffect(() => {
    loadBooksOnce();
  }, [loadBooksOnce]);

  const handleDelete = (id) => {
    if (window.confirm(BOOK_MESSAGES.deleteConfirm)) {
      removeBook(id);
    }
  };

  return (
    <>
      <div className={styles.toolbar}>
        <LinkButton to={PATHS.bookNew}>+ 새 도서 등록</LinkButton>
      </div>

      <BookTable
        books={books}
        loading={loading}
        error={error}
        onDelete={handleDelete}
      />
    </>
  );
}
