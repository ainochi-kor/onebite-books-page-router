import { ReactNode, useCallback, useEffect, useState } from "react";
import SearchableLayout from "@/components/searchable-layout";
import BookItem from "@/components/book-itme";

import fetchBooks from "@/lib/fetch-books";
import { useRouter } from "next/router";
import { BookData } from "@/types";

// export const getStaticProps = async (context: GetStaticPropsContext) => {
//   const q = context.query.q as string;

//   const books = await fetchBooks(q);

//   return {
//     props: { books },
//   };
// };

const SearchPage = () => {
  const [books, setBooks] = useState<BookData[]>([]);

  const router = useRouter();
  const q = router.query.q as string;

  const fetchSearchBooks = useCallback(async () => {
    const books = await fetchBooks(q);
    setBooks(books);
  }, [setBooks, q]);

  useEffect(() => {
    if (q) {
      fetchSearchBooks();
    }
  }, [q, fetchSearchBooks]);

  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
};

SearchPage.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};

export default SearchPage;
