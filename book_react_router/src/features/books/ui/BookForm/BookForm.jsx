import { Button } from "@/shared/ui/Button/Button.jsx";
import { Message } from "@/shared/ui/Message/Message.jsx";
import { TextArea, TextField } from "@/shared/ui/TextField/TextField.jsx";
import styles from "./BookForm.module.css";

const FIELDS = [
  { name: "title", label: "제목", required: true },
  { name: "author", label: "저자", required: true },
  { name: "isbn", label: "ISBN", required: true },
  { name: "price", label: "가격", type: "number" },
  { name: "publishDate", label: "출판일", type: "date" },
  { name: "language", label: "언어" },
  { name: "pageCount", label: "페이지 수", type: "number" },
  { name: "publisher", label: "출판사" },
  { name: "coverImageUrl", label: "표지 이미지 URL", type: "url" },
  { name: "edition", label: "에디션" },
];

export function BookForm({
  values,
  isEditing,
  message,
  onChange,
  onSubmit,
  onCancel,
}) {
  return (
    <section className={`${styles.card} ${isEditing ? styles.editing : ""}`}>
      <h2 className={styles.heading}>
        {isEditing ? "도서 수정" : "도서 등록"}
      </h2>

      <form onSubmit={onSubmit} noValidate>
        <div className={styles.grid}>
          {FIELDS.map((field) => (
            <TextField
              key={field.name}
              name={field.name}
              label={field.label}
              type={field.type}
              required={field.required}
              value={values[field.name]}
              onChange={onChange}
            />
          ))}
        </div>

        <div className={styles.wide}>
          <TextArea
            name="description"
            label="설명"
            value={values.description}
            onChange={onChange}
          />
        </div>

        <div className={styles.footer}>
          <Button type="submit">{isEditing ? "도서 수정" : "도서 등록"}</Button>
          <Button variant="ghost" onClick={onCancel}>
            취소
          </Button>
          <Message message={message} />
        </div>
      </form>
    </section>
  );
}
