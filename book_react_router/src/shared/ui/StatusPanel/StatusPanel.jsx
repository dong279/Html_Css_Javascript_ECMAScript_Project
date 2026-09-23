import styles from "./StatusPanel.module.css";

export function StatusPanel({ tone = "muted", children }) {
  const className = [styles.panel, tone === "error" && styles.error]
    .filter(Boolean)
    .join(" ");

  return <div className={className}>{children}</div>;
}
