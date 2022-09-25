import React from "react";

import styles from "./searchBar.module.scss";

import { SearchIcon } from "../../atoms/icons";

export default function SearchBar(): JSX.Element {
  return <div className={styles.container}>
      <SearchIcon className={styles.icon}/>
      <input className={styles.input} placeholder="ara..."/>
  </div>;
}
