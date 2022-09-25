import React from "react";
import ArrowRightButton from "../../atoms/ArrowRigthButton/ArrowRightButton";

import styles from "./favoriteUniversityCard.module.scss";

type FavoriteUniversityCardProps = {
  uniName: string;
};
export default function FavoriteUniversityCard({
  uniName,
}: FavoriteUniversityCardProps): JSX.Element {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: "url(/favoriteUnies/favoriteUni.jpg)" }}
    >
      <div className={styles.linearGradientTop} />
      <h2 className={styles.title}>{uniName}</h2>
      <div className={styles.star}></div>
      <div className={styles.linearGradientBottom} />
      <ArrowRightButton className={styles.goToUniversity} />
    </div>
  );
}
