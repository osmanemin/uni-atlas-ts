import React from "react";

import styles from "./InfoCard.module.scss";

type InfoCardProps = {
  title: string;
  count: number;
};

const InfoCard = ({ title, count }: InfoCardProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{title}</div>
      <div className={styles.count}>{count}</div>
    </div>
  );
};

export default InfoCard;
