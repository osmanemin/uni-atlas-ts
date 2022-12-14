import React from "react";
import ArrowRightButton from "../../atoms/ArrowRigthButton";

import styles from "./favoriteUniversityCard.module.scss";

type FavoriteUniversityCardProps = {
  name: string;
};
export default function FavoriteUniversityCard({
  name,
}: FavoriteUniversityCardProps): JSX.Element {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: "url(/favoriteUnies/favoriteUni.jpg)" }}
    >
      <div className={styles.linearGradientTop} />
      <h2 className={styles.title}>{name}</h2>
      <div className={styles.star}></div>
      <div className={styles.linearGradientBottom} />
      <ArrowRightButton className={styles.goToUniversity} />
    </div>
  );
}
