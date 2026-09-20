export const EMPTY_FORM = {
  // 도서 기본 정보 5개
  title: "",
  author: "",
  isbn: "",
  price: "",
  publishDate: "",
  // 상세 정보 6개
  description: "",
  language: "",
  pageCount: "",
  publisher: "",
  coverImageUrl: "",
  edition: "",
};

function toNumberOrNull(value) {
  if (!value || !String(value).trim()) return null;
  return Number(value);
}

export function toRequest(form) {
  return {
    title: form.title.trim(),
    author: form.author.trim(),
    isbn: form.isbn.trim(),
    price: toNumberOrNull(form.price),
    publishDate: form.publishDate || null,

    bookDetail: {
      description: form.description.trim(),
      language: form.language.trim(),
      pageCount: toNumberOrNull(form.pageCount),
      publisher: form.publisher.trim(),
      coverImageUrl: form.coverImageUrl.trim(),
      edition: form.edition.trim(),
    },
  };
}

export function toFormValues(book) {
  const { title, author, isbn, price, publishDate, bookDetail } = book;

  return {
    title: title ?? "",
    author: author ?? "",
    isbn: isbn ?? "",
    price: price ?? "",
    publishDate: publishDate ?? "",

    description: bookDetail?.description ?? "",
    language: bookDetail?.language ?? "",
    pageCount: bookDetail?.pageCount ?? "",
    publisher: bookDetail?.publisher ?? "",
    coverImageUrl: bookDetail?.coverImageUrl ?? "",
    edition: bookDetail?.edition ?? "",
  };
}
