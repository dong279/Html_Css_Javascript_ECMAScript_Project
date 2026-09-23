import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  BookForm,
  EMPTY_BOOK_FORM,
  bookApi,
  toBookFormValues,
  toBookRequest,
  useBookStore,
  validateBookRequest,
} from "@/features/books";
import { PATHS } from "@/shared/config/paths.js";
import { MESSAGE_TYPE, notify } from "@/shared/model/uiStore.js";

export default function BookFormPage() {
  const { id } = useParams();
  const isEditing = id !== undefined;
  const navigate = useNavigate();

  const [values, setValues] = useState(EMPTY_BOOK_FORM);
  const [formError, setFormError] = useState(null);

  const saveBook = useBookStore((state) => state.saveBook);

  useEffect(() => {
    if (!isEditing) {
      return;
    }

    let cancelled = false;

    bookApi
      .detail(id)
      .then((book) => {
        if (!cancelled) {
          setValues(toBookFormValues(book));
        }
      })
      .catch((error) => {
        if (!cancelled) {
          notify.error(error.message);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [id, isEditing]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormError(null);

    const request = toBookRequest(values);
    const validationMessage = validateBookRequest(request);

    if (validationMessage) {
      setFormError({ type: MESSAGE_TYPE.ERROR, text: validationMessage });
      return;
    }

    if (await saveBook(id, request)) {
      navigate(PATHS.bookList);
    }
  };

  return (
    <BookForm
      values={values}
      isEditing={isEditing}
      message={formError}
      onChange={handleChange}
      onSubmit={handleSubmit}
      onCancel={() => navigate(PATHS.bookList)}
    />
  );
}
