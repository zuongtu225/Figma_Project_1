import React from "react";
import styles from "./Footer.module.css";
function Footer() {
  return (
    <footer className="p-20-300">
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
        <li>Contact</li>
      </ul>
      <p>Copyright © 2022 Picto.</p>
    </footer>
  );
}
export default Footer;
