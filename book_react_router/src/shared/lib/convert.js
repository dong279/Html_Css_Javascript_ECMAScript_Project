export function toNumberOrNull(value) {
  if (value === "" || value === null || value === undefined) {
    return null;
  }

  return Number(value);
}

export function emptyToNull(value) {
  return value === "" || value === undefined ? null : value;
}

export function toInputValue(value) {
  return value ?? "";
}
