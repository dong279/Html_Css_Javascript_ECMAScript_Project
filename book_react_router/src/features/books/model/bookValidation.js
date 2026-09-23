import { isUrl } from "@/shared/lib/isUrl.js";
import { BOOK_VALIDATION_MESSAGES } from "../constants.js";

const ISBN_PATTERN = /^[0-9X-]+$/i;

const RULES = [
  {
    field: "title",
    isInvalid: ({ title }) => !title,
  },
  {
    field: "author",
    isInvalid: ({ author }) => !author,
  },
  {
    field: "isbn",
    isInvalid: ({ isbn }) => !isbn || !ISBN_PATTERN.test(isbn),
  },
  {
    field: "price",
    isInvalid: ({ price }) => price !== null && price < 0,
  },
  {
    field: "pageCount",
    isInvalid: ({ bookDetail }) =>
      bookDetail.pageCount !== null && bookDetail.pageCount < 0,
  },
  {
    field: "coverImageUrl",
    isInvalid: ({ bookDetail }) =>
      Boolean(bookDetail.coverImageUrl) && !isUrl(bookDetail.coverImageUrl),
  },
];

export function validateBookRequest(request) {
  const target = { ...request, bookDetail: request.bookDetail ?? {} };
  const broken = RULES.find((rule) => rule.isInvalid(target));

  return broken ? BOOK_VALIDATION_MESSAGES[broken.field] : null;
}
