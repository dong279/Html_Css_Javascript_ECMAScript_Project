import { Link } from "react-router-dom";

import styles from "./Button.module.css";

function buttonClass({ variant = "primary", size = "md", className }) {
  return [styles.button, styles[variant], size === "sm" && styles.sm, className]
    .filter(Boolean)
    .join(" ");
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  type = "button",
  ...rest
}) {
  return (
    <button
      type={type}
      className={buttonClass({ variant, size, className })}
      {...rest}
    />
  );
}

export function LinkButton({
  variant = "primary",
  size = "md",
  className,
  ...rest
}) {
  return (
    <Link className={buttonClass({ variant, size, className })} {...rest} />
  );
}
