export class ApiError extends Error {
  constructor(message, { status = null, cause = null } = {}) {
    super(message);

    this.name = "ApiError";
    this.status = status;
    this.cause = cause;
  }

  get isNotFound() {
    return this.status === 404;
  }

  get isValidationError() {
    return this.status === 400;
  }
}

export function toApiError(error) {
  if (error instanceof ApiError) {
    return error;
  }

  return new ApiError(error?.message ?? "", { cause: error });
}
