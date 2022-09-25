import React from "react";

import styles from "./masterNavigation.module.scss";

import UniAtlas from "../../molecules/UniAtlas/UniAtlas";

type MasterNavigationProps = {
  title: string;
  color: string;
};
export default function MasterNavigation({
  title,
  color,
}: MasterNavigationProps): JSX.Element {
  return (
    <div className={styles.container} style={{ backgroundColor: `${color}` }}>
      <UniAtlas className={styles.uniAtlas} titleClass={styles.uniTitle} />
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
}
