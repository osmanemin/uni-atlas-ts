import React from "react";
import FavoriteUniversityCard from "../../molecules/FavoriteUniversityCard";

import styles from "./favoriteUniversityCardList.module.scss";

export default function FavoriteUniversityCardList(): JSX.Element {
  return (
    <div className={styles.container}>
      <FavoriteUniversityCard name="İstanbul Üniversitesi" />
      <FavoriteUniversityCard name="İstanbul Üniversitesi" />
      <FavoriteUniversityCard name="İstanbul Üniversitesi" />
      <FavoriteUniversityCard name="İstanbul Üniversitesi" />
      <FavoriteUniversityCard name="İstanbul Üniversitesi" />
    </div>
  );
}
