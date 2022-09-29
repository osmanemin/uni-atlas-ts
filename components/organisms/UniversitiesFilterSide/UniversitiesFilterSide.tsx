import React from "react";

import styles from "./universitiesFilterSide.module.scss";

import SearchBar from "../../molecules/SearchBar";

export default function UniversitiesFilterSide(): JSX.Element {
  return (
    <div className={styles.container}>
      <SearchBar />
      <SearchBar />
    </div>
  );
}
