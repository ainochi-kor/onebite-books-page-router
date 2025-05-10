import React from "react";
import { useRouter } from "next/router";

const SearchPage = () => {
  const router = useRouter();
  const { q } = router.query;

  return <div>SearchPage {q}</div>;
};

export default SearchPage;
