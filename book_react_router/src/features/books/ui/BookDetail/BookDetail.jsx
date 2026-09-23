import { LinkButton } from "@/shared/ui/Button/Button.jsx";
import { PATHS } from "@/shared/config/paths.js";
import { formatPrice, withFallback } from "@/shared/lib/format.js";
import styles from "./BookDetail.module.css";

const ROWS = [
  { label: "제목", render: (book) => book.title },
  { label: "저자", render: (book) => book.author },
  { label: "ISBN", render: (book) => book.isbn },
  { label: "가격", render: (book) => formatPrice(book.price) },
  { label: "출판일", render: (book) => withFallback(book.publishDate) },
  {
    label: "설명",
    render: (book) => withFallback(book.bookDetail?.description),
  },
  { label: "언어", render: (book) => withFallback(book.bookDetail?.language) },
  {
    label: "페이지 수",
    render: (book) => withFallback(book.bookDetail?.pageCount),
  },
  {
    label: "출판사",
    render: (book) => withFallback(book.bookDetail?.publisher),
  },
  { label: "에디션", render: (book) => withFallback(book.bookDetail?.edition) },
  {
    label: "표지 이미지",
    render: (book) => withFallback(book.bookDetail?.coverImageUrl),
  },
];

export function BookDetail({ book }) {
  const coverImageUrl = book.bookDetail?.coverImageUrl;

  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <h2 className={styles.heading}>도서 상세 정보</h2>

        <div className={styles.headerActions}>
          <LinkButton variant="info" size="sm" to={PATHS.bookEdit(book.id)}>
            수정
          </LinkButton>
          <LinkButton variant="ghost" size="sm" to={PATHS.bookList}>
            목록으로
          </LinkButton>
        </div>
      </header>

      <div className={styles.body}>
        {coverImageUrl && (
          <img
            className={styles.cover}
            src={coverImageUrl}
            alt={`${book.title} 표지`}
          />
        )}

        <dl className={styles.list}>
          {ROWS.map((row) => (
            <div key={row.label} className={styles.row}>
              <dt>{row.label}</dt>
              <dd>{row.render(book)}</dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}
