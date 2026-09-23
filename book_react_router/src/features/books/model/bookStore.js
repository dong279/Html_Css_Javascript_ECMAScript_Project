import { create } from "zustand";

import { notify } from "@/shared/model/uiStore.js";
import { bookApi } from "../api/bookApi.js";
import { BOOK_MESSAGES } from "../constants.js";

export const useBookStore = create((set, get) => ({
  books: [],
  loading: false,
  error: "",
  loaded: false,

  loadBooks: async () => {
    set({ loading: true, error: "" });

    try {
      set({ books: await bookApi.list(), loaded: true });
    } catch (error) {
      set({ books: [], error: error.message });
    } finally {
      set({ loading: false });
    }
  },

  loadBooksOnce: async () => {
    if (get().loaded || get().loading) {
      return;
    }

    await get().loadBooks();
  },

  saveBook: async (id, book) => {
    try {
      if (id) {
        await bookApi.update(id, book);
      } else {
        await bookApi.create(book);
      }

      await get().loadBooks();
      notify.success(id ? BOOK_MESSAGES.updated : BOOK_MESSAGES.created);

      return true;
    } catch (error) {
      notify.error(error.message);

      return false;
    }
  },

  removeBook: async (id) => {
    try {
      await bookApi.remove(id);
      await get().loadBooks();
      notify.success(BOOK_MESSAGES.deleted);
    } catch (error) {
      notify.error(error.message);
    }
  },
}));
