import { httpClient } from "@/shared/api/httpClient.js";
import { BOOKS_ENDPOINT } from "../constants.js";

export const bookApi = {
  list: () => httpClient.get(BOOKS_ENDPOINT),

  detail: (id) => httpClient.get(`${BOOKS_ENDPOINT}/${id}`),

  create: (book) => httpClient.post(BOOKS_ENDPOINT, book),

  update: (id, book) => httpClient.put(`${BOOKS_ENDPOINT}/${id}`, book),

  remove: (id) => httpClient.delete(`${BOOKS_ENDPOINT}/${id}`),
};
