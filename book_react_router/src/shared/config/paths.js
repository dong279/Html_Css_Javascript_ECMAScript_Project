export const PATHS = {
  bookList: "/",
  bookNew: "/new",
  bookEdit: (id = ":id") => `/edit/${id}`,
  bookDetail: (id = ":id") => `/books/${id}`,
};
