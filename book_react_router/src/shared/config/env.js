const env = import.meta.env ?? {};

export const API_BASE_URL = env.VITE_API_BASE_URL ?? "http://localhost:8080";

export const APP_MODE = env.VITE_MODE ?? "TEST";

export const IS_PROD_MODE = APP_MODE === "PROD";
