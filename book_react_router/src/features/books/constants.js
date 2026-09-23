export const BOOKS_ENDPOINT = "/api/books";

export const BOOK_MESSAGES = {
  created: "등록되었습니다.",
  updated: "수정되었습니다.",
  deleted: "삭제되었습니다.",
  deleteConfirm: "정말로 이 도서를 삭제하시겠습니까?",
  empty: "등록된 도서가 없습니다.",
  loading: "불러오는 중...",
};

export const BOOK_VALIDATION_MESSAGES = {
  title: "제목을 입력해주세요.",
  author: "저자를 입력해주세요.",
  isbn: "ISBN 을 입력하지 않았거나 형식이 올바르지 않습니다. (숫자와 X, - 만 허용)",
  price: "가격은 0 이상이어야 합니다.",
  pageCount: "페이지 수는 0 이상이어야 합니다.",
  coverImageUrl:
    "올바른 이미지 URL 형식이 아닙니다. (예: https://example.com/cover.jpg)",
};
