import React from "react";

import styles from "./universitiesFilterSide.module.scss";

import SearchBar from "../../molecules/SearchBar";
import { SearchIcon, SortIcon } from "../../atoms/icons";

export default function UniversitiesFilterSide({
  handleSetSearch,
  handleSort,
  sort
}: {
  handleSetSearch: ( value: string) => void;
  sort: number;
  handleSort: (value: number)=> void;
}): JSX.Element {
  return (
    <div className={styles.container}>
      <SearchBar
        name="search"
        onChange={handleSetSearch}
        placeHolder="Üniversite Ara..."
        icon={<SearchIcon className={styles.icon} />}
        formElement="input"
        delay={300}
      />
      <SearchBar
        name="sort"
        onChange={handleSort}
        icon={<SortIcon className={styles.icon} />}
        formElement="select"
        options={[
          { key: "İsme göre sırala", value: 1 },
          { key: "İsme göre tersten sırala", value: -1 },
        ]}
        value={sort}
      />
    </div>
  );
}
