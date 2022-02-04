import { FC } from "react";
import styles from "./index.module.scss";

export const Layout: FC = ({ children }) => (
  <div className={styles.layout}>
    <div className={styles.content}>{children}</div>
    <div className={styles.footer}>
      <a
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=2s"
        target="_blank"
        referrerPolicy="no-referrer"
        rel="noreferrer"
      >
        some external link
      </a>
    </div>
  </div>
);
