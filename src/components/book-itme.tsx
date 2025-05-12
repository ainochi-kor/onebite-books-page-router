import type { BookData } from "@/types";
import Link from "next/link";
import React from "react";
import styles from "./book-itme.module.css";

const BookItem: React.FC<BookData> = ({
  id,
  title,
  subTitle,
  author,
  publisher,
  coverImgUrl,
}) => {
  return (
    <Link href={`/book/${id}`} className={styles.container}>
      <div>
        <img src={coverImgUrl} alt={title} />
        <div className={styles.title}>{title}</div>
        <div className={styles.subTitle}>{subTitle}</div>
        <br />
        <div className={styles.author}>
          {author} | {publisher}
        </div>
      </div>
    </Link>
  );
};

export default BookItem;
