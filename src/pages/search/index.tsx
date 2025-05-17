import { ReactNode, useCallback, useEffect, useState } from "react";
import SearchableLayout from "@/components/searchable-layout";
import BookItem from "@/components/book-itme";

import fetchBooks from "@/lib/fetch-books";
import { useRouter } from "next/router";
import { BookData } from "@/types";
import Head from "next/head";

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
    <>
      <Head>
        <title>한입북스 - 검색결과</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="한입북스 - 검색결과" />
        <meta
          property="og:description"
          content="한입 북스에 등록된 도서들을 만나보세요"
        />
      </Head>
      <div>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </div>
    </>
  );
};

SearchPage.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};

export default SearchPage;
