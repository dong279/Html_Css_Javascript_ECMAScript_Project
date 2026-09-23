import { Button, LinkButton } from "@/shared/ui/Button/Button.jsx";
import { StatusPanel } from "@/shared/ui/StatusPanel/StatusPanel.jsx";
import { PATHS } from "@/shared/config/paths.js";
import { formatPrice, withFallback } from "@/shared/lib/format.js";
import { BOOK_MESSAGES } from "../../constants.js";
import styles from "./BookTable.module.css";

const COLUMNS = [
  { key: "title", label: "제목", render: (book) => book.title },
  { key: "author", label: "저자", render: (book) => book.author },
  { key: "isbn", label: "ISBN", render: (book) => book.isbn },
  { key: "price", label: "가격", render: (book) => formatPrice(book.price) },
  {
    key: "publishDate",
    label: "출판일",
    render: (book) => withFallback(book.publishDate),
  },
  {
    key: "publisher",
    label: "출판사",
    render: (book) => withFallback(book.bookDetail?.publisher),
  },
];

export function BookTable({ books, loading, error, onDelete }) {
  return (
    <section className={styles.card}>
      <h2 className={styles.heading}>도서 목록</h2>

      {loading && <StatusPanel>{BOOK_MESSAGES.loading}</StatusPanel>}
      {error && <StatusPanel tone="error">{error}</StatusPanel>}

      {!loading && !error && books.length === 0 && (
        <StatusPanel>{BOOK_MESSAGES.empty}</StatusPanel>
      )}

      {!error && books.length > 0 && (
        <div className={styles.scroll}>
          <table className={styles.table}>
            <thead>
              <tr>
                {COLUMNS.map((column) => (
                  <th key={column.key}>{column.label}</th>
                ))}
                <th>액션</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book.id}>
                  {COLUMNS.map((column) => (
                    <td key={column.key}>{column.render(book)}</td>
                  ))}
                  <td>
                    <div className={styles.actions}>
                      <LinkButton
                        variant="info"
                        size="sm"
                        to={PATHS.bookEdit(book.id)}
                      >
                        수정
                      </LinkButton>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => onDelete(book.id)}
                      >
                        삭제
                      </Button>
                      <LinkButton
                        variant="warning"
                        size="sm"
                        to={PATHS.bookDetail(book.id)}
                      >
                        상세
                      </LinkButton>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
