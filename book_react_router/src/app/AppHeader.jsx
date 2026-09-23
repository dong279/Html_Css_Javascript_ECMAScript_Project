import { NavLink } from "react-router-dom";

import { APP_MODE, IS_PROD_MODE } from "@/shared/config/env.js";
import { PATHS } from "@/shared/config/paths.js";
import { AppMessage } from "./AppMessage.jsx";
import styles from "./AppHeader.module.css";

const NAV_ITEMS = [
  { to: PATHS.bookList, label: "도서 목록", end: true },
  { to: PATHS.bookNew, label: "도서 등록", end: false },
];

function navLinkClass({ isActive }) {
  return [styles.navLink, isActive && styles.navLinkActive]
    .filter(Boolean)
    .join(" ");
}

export function AppHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <h1 className={styles.title}>
          도서 관리 시스템
          <span
            className={`${styles.mode} ${IS_PROD_MODE ? styles.modeProd : ""}`}
          >
            {APP_MODE}
          </span>
        </h1>

        <AppMessage />
      </div>

      <nav className={styles.nav}>
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={navLinkClass}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
