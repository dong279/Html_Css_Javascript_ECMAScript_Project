import {
  emptyToNull,
  toInputValue,
  toNumberOrNull,
} from "@/shared/lib/convert.js";

export const EMPTY_BOOK_FORM = {
  title: "",
  author: "",
  isbn: "",
  price: "",
  publishDate: "",
  description: "",
  language: "",
  pageCount: "",
  publisher: "",
  coverImageUrl: "",
  edition: "",
};

export function toBookRequest(form) {
  return {
    title: form.title,
    author: form.author,
    isbn: form.isbn,
    price: toNumberOrNull(form.price),
    publishDate: emptyToNull(form.publishDate),
    bookDetail: {
      description: emptyToNull(form.description),
      language: emptyToNull(form.language),
      pageCount: toNumberOrNull(form.pageCount),
      publisher: emptyToNull(form.publisher),
      coverImageUrl: emptyToNull(form.coverImageUrl),
      edition: emptyToNull(form.edition),
    },
  };
}

export function toBookFormValues(book) {
  const detail = book.bookDetail ?? {};

  return {
    title: toInputValue(book.title),
    author: toInputValue(book.author),
    isbn: toInputValue(book.isbn),
    price: toInputValue(book.price),
    publishDate: toInputValue(book.publishDate),
    description: toInputValue(detail.description),
    language: toInputValue(detail.language),
    pageCount: toInputValue(detail.pageCount),
    publisher: toInputValue(detail.publisher),
    coverImageUrl: toInputValue(detail.coverImageUrl),
    edition: toInputValue(detail.edition),
  };
}
