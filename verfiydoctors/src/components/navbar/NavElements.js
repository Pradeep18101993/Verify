import Link from "next/link";
import React from "react";
import styles from "@/styles/navbar.module.css";

const NavElements = () => {
  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link href="/blog" className={styles.linkitem}>
            Blog
          </Link>
        </li>
        <li>
          <Link href="/about" className={styles.linkitem}>
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className={styles.linkitem}>
            Contacts
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavElements;
