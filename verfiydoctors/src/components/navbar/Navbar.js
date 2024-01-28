import React from "react";
import logo from "../../images/newlogo.png";
import Image from "next/image";
import Link from "next/link";
import NavElements from "./NavElements";
import styles from "@/styles/navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div>
        <Link href="/">
          <Image src={logo} width={150} height={90} alt="" priority="empty" />
        </Link>
      </div>
      <NavElements />
    </header>
  );
};

export default Navbar;
