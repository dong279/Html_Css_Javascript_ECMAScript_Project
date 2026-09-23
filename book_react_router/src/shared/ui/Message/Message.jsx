import { MESSAGE_TYPE } from "@/shared/model/uiStore.js";
import styles from "./Message.module.css";

export function Message({ message }) {
  if (!message) {
    return null;
  }

  const tone =
    message.type === MESSAGE_TYPE.SUCCESS ? styles.success : styles.error;

  return (
    <span className={`${styles.message} ${tone}`} role="status">
      {message.text}
    </span>
  );
}
