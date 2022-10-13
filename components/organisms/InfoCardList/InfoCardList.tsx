import React from "react";

import styles from "./InfoCardList.module.scss";

type InfoCardListProps = {
  children: JSX.Element;
  title: string;
  gridColumnCount: number;
};

const InfoCardList = ({
  children,
  title,
  gridColumnCount,
}: InfoCardListProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{title}</div>
      <div
        className={styles.cardList}
        style={{ gridTemplateColumns: `repeat(${gridColumnCount}, 1fr)` }}
      >
        {children}
      </div>
    </div>
  );
};

export default InfoCardList;
