/* ---------------------------------------------------------
     입력칸 11개 가운데 열 개는 input 이고 하나(설명)는 textarea 입니다.
     저는 textarea 를 묶지 않고 그대로 두기로 했습니다.

     input 열 개는 속성만 다른 같은 태그라 하나로 묶기 자연스럽지만,
     textarea 는 태그 자체가 다르고 이 폼에 하나뿐입니다.
     하나를 위해 type="textarea" 라는 없는 타입을 만들고 Field 안에
     조건을 더 두는 것보다, 공통 컴포넌트는 input 만 맡기는 편이
     읽기 쉽다고 판단했습니다.
   --------------------------------------------------------- */
import MessageBox from "./MessageBox.jsx";
function Field({
  name,
  label,
  value,
  onChange,
  type = "text",
  required = false,
}) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
}

function BookFormField({
  form,
  isEditing,
  message,
  onChange,
  onSubmit,
  onCancel,
  containerRef,
}) {
  return (
    <div
      className={isEditing ? "form-container editing" : "form-container"}
      ref={containerRef}
    >
      <h2>{isEditing ? "도서 수정" : "도서 등록"}</h2>

      <form onSubmit={onSubmit}>
        <div className="form-grid">
          <Field
            name="title"
            label="제목:"
            value={form.title}
            onChange={onChange}
            required
          />
          <Field
            name="author"
            label="저자:"
            value={form.author}
            onChange={onChange}
            required
          />
          <Field
            name="isbn"
            label="ISBN:"
            value={form.isbn}
            onChange={onChange}
            required
          />
          <Field
            name="price"
            label="가격:"
            value={form.price}
            onChange={onChange}
            type="number"
          />
          <Field
            name="publishDate"
            label="출판일:"
            value={form.publishDate}
            onChange={onChange}
            type="date"
          />
          <Field
            name="language"
            label="언어:"
            value={form.language}
            onChange={onChange}
          />
          <Field
            name="pageCount"
            label="페이지 수:"
            value={form.pageCount}
            onChange={onChange}
            type="number"
          />
          <Field
            name="publisher"
            label="출판사:"
            value={form.publisher}
            onChange={onChange}
          />
          <Field
            name="coverImageUrl"
            label="표지 이미지 URL:"
            value={form.coverImageUrl}
            onChange={onChange}
            type="url"
          />
          <Field
            name="edition"
            label="에디션:"
            value={form.edition}
            onChange={onChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">설명:</label>
          <textarea
            id="description"
            name="description"
            rows="4"
            value={form.description}
            onChange={onChange}
          />
        </div>

        <div className="button-group">
          <button type="submit">{isEditing ? "도서 수정" : "도서 등록"}</button>

          {isEditing && (
            <button type="button" className="cancel-btn" onClick={onCancel}>
              취소
            </button>
          )}

          <MessageBox message={message} />
        </div>
      </form>
    </div>
  );
}

export default BookFormField;
