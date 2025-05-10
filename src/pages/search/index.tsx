import { ReactNode } from "react";
import { useRouter } from "next/router";
import SearchableLayout from "@/components/searchable-layout";

const SearchPage = () => {
  const router = useRouter();
  const { q } = router.query;

  return <div>SearchPage {q}</div>;
};

SearchPage.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};

export default SearchPage;
