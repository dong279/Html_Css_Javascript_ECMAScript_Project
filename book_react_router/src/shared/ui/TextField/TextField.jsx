import styles from "./TextField.module.css";

function labelClass(required) {
  return [styles.label, required && styles.required].filter(Boolean).join(" ");
}

export function TextField({
  name,
  label,
  value,
  onChange,
  type = "text",
  required = false,
  ...rest
}) {
  return (
    <div className={styles.field}>
      <label className={labelClass(required)} htmlFor={name}>
        {label}
      </label>
      <input
        className={styles.control}
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        {...rest}
      />
    </div>
  );
}

export function TextArea({
  name,
  label,
  value,
  onChange,
  rows = 4,
  required = false,
  ...rest
}) {
  return (
    <div className={styles.field}>
      <label className={labelClass(required)} htmlFor={name}>
        {label}
      </label>
      <textarea
        className={`${styles.control} ${styles.textarea}`}
        id={name}
        name={name}
        rows={rows}
        value={value}
        onChange={onChange}
        required={required}
        {...rest}
      />
    </div>
  );
}
