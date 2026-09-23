import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { BookDetail, bookApi, BOOK_MESSAGES } from "@/features/books";
import { StatusPanel } from "@/shared/ui/StatusPanel/StatusPanel.jsx";
import { PATHS } from "@/shared/config/paths.js";
import { notify } from "@/shared/model/uiStore.js";

export default function BookDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);

  useEffect(() => {
    let cancelled = false;

    bookApi
      .detail(id)
      .then((data) => {
        if (!cancelled) {
          setBook(data);
        }
      })
      .catch((error) => {
        if (!cancelled) {
          notify.error(error.message);
          navigate(PATHS.bookList);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [id, navigate]);

  if (!book) {
    return <StatusPanel>{BOOK_MESSAGES.loading}</StatusPanel>;
  }

  return <BookDetail book={book} />;
}
