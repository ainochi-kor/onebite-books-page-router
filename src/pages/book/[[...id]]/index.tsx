import { useRouter } from "next/router";
import React from "react";

const BookDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <h1>BookDetailPage {id}</h1>;
};

export default BookDetailPage;
