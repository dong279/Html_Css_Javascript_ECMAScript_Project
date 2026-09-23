import { create } from "zustand";

export const MESSAGE_TYPE = {
  SUCCESS: "success",
  ERROR: "error",
};

export const useUiStore = create((set) => ({
  message: null,

  showSuccess: (text) => set({ message: { type: MESSAGE_TYPE.SUCCESS, text } }),

  showError: (text) => set({ message: { type: MESSAGE_TYPE.ERROR, text } }),

  clearMessage: () => set({ message: null }),
}));

export const notify = {
  success: (text) => useUiStore.getState().showSuccess(text),
  error: (text) => useUiStore.getState().showError(text),
};
