import React, { useEffect } from "react";
import styles from "./searchable-layout.module.css";
import { useRouter } from "next/router";

const SearchableLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const q = router.query.q;

  const inputRef = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (q && inputRef.current) {
      inputRef.current.value = Array.isArray(q) ? q[0] : q;
    }
  }, [q]);

  const onSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const search = e.currentTarget.querySelector("input") as HTMLInputElement;
    const searchValue = search.value;

    if (searchValue && searchValue !== q) {
      router.push(`/search?q=${encodeURIComponent(searchValue)}`);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmitSearch} className={styles.searchbar_container}>
        <input
          ref={inputRef}
          placeholder="검색어를 입력하세요 ..."
          className={styles.input}
        />
        <button role="button" className={styles.button}>
          검색 
        </button>
      </form>
      {children}
    </div>
  );
};

export default SearchableLayout;
