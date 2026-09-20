const EMPTY = "-";

function formatPrice(price) {
  if (price == null) return EMPTY;
  return `₩${price.toLocaleString()}`;
}

function BookDetail({ book, onClose }) {
  if (!book) {
    return null;
  }

  const { title, author, isbn, price, publishDate, bookDetail } = book;

  return (
    <div className="book-detail">
      <div className="book-detail-header">
        <h2>도서 상세 정보</h2>
        <button type="button" className="cancel-btn" onClick={onClose}>
          닫기
        </button>
      </div>

      <div className="book-detail-body">
        {bookDetail?.coverImageUrl && (
          <img
            className="book-cover"
            src={bookDetail.coverImageUrl}
            alt={`${title} 표지`}
          />
        )}

        <dl className="book-detail-list">
          <dt>제목</dt>
          <dd>{title}</dd>

          <dt>저자</dt>
          <dd>{author}</dd>

          <dt>ISBN</dt>
          <dd>{isbn}</dd>

          <dt>가격</dt>
          <dd>{formatPrice(price)}</dd>

          <dt>출판일</dt>
          <dd>{publishDate ?? EMPTY}</dd>

          {bookDetail && (
            <>
              <dt>설명</dt>

              <dd>{bookDetail.description || EMPTY}</dd>

              <dt>언어</dt>
              <dd>{bookDetail.language || EMPTY}</dd>

              <dt>페이지 수</dt>
              <dd>{bookDetail.pageCount ?? EMPTY}</dd>

              <dt>출판사</dt>
              <dd>{bookDetail.publisher || EMPTY}</dd>

              <dt>에디션</dt>
              <dd>{bookDetail.edition || EMPTY}</dd>

              <dt>표지 이미지</dt>
              <dd>{bookDetail.coverImageUrl || EMPTY}</dd>
            </>
          )}
        </dl>
      </div>
    </div>
  );
}

export default BookDetail;
