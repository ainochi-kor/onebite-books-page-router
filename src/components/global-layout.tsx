import Link from "next/link";
import React from "react";
import styles from "./global-layout.module.css";

const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/">[책] ONEBITE BOOKS</Link>
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>제작 @winterlood</footer>
    </div>
  );
};

export default GlobalLayout;
