import axios from "axios";

import { API_BASE_URL } from "@/shared/config/env.js";
import {
  HTTP_ERROR_MESSAGES,
  NETWORK_ERROR_MESSAGE,
  UNKNOWN_ERROR_MESSAGE,
} from "@/shared/constants/messages.js";
import { ApiError } from "./ApiError.js";

export const httpClient = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
  timeout: 10000,
});

function resolveMessage(error) {
  const status = error.response?.status;

  if (!error.response) {
    return NETWORK_ERROR_MESSAGE;
  }

  return (
    error.response.data?.message ??
    HTTP_ERROR_MESSAGES[status] ??
    UNKNOWN_ERROR_MESSAGE
  );
}

httpClient.interceptors.response.use(
  (response) => response.data,
  (error) =>
    Promise.reject(
      new ApiError(resolveMessage(error), {
        status: error.response?.status ?? null,
        cause: error,
      }),
    ),
);
