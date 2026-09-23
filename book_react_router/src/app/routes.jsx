import { Route, Routes } from "react-router-dom";

import BookDetailPage from "@/pages/BookDetailPage.jsx";
import BookFormPage from "@/pages/BookFormPage.jsx";
import BookListPage from "@/pages/BookListPage.jsx";
import NotFoundPage from "@/pages/NotFoundPage.jsx";
import { PATHS } from "@/shared/config/paths.js";

export function AppRoutes() {
  return (
    <Routes>
      <Route path={PATHS.bookList} element={<BookListPage />} />
      <Route path={PATHS.bookNew} element={<BookFormPage key="create" />} />
      <Route path={PATHS.bookEdit()} element={<BookFormPage key="edit" />} />
      <Route path={PATHS.bookDetail()} element={<BookDetailPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
