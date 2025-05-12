import React from "react";
import books from "@/mock/books.json";
import { BookData } from "@/types";
import styles from "./index.module.css";

const BookDetailPage = () => {
  const { title, subTitle, description, author, publisher, coverImgUrl } =
    books[0] as BookData;

  return (
    <div className={styles.container}>
      <div
        className={styles.cover_img_container}
        style={{ backgroundImage: `url('${coverImgUrl}')` }}
      >
        <img src={coverImgUrl} />
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.subTitle}>{subTitle}</div>
      <div className={styles.author}>
        {author} | {publisher}
      </div>

      <div className={styles.decoration}>{description}</div>
    </div>
  );
};

export default BookDetailPage;
