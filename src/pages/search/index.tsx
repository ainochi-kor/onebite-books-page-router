import { ReactNode } from "react";
import SearchableLayout from "@/components/searchable-layout";
import BookItem from "@/components/book-itme";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import fetchBooks from "@/lib/fetch-books";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const q = context.query.q as string;

  const books = await fetchBooks(q);

  return {
    props: { books },
  };
};

const SearchPage = ({
  books,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
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
