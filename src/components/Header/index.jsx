import React from "react";
import styles from "./Header.module.css";
function Header() {
  return (
    <header className="p-20-300">
      <div className={styles.logo}>
        <div className={styles.logo__icon}>
          <p>B</p>
        </div>
        <p className={styles.logo_title}>Brooklyn</p>
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Process</li>
        <li>Portfolio</li>
        <li>Blog</li>
        <li>Services</li>
        <li className="btn-color">Contact</li>
      </ul>
    </header>
  );
}
export default Header;
