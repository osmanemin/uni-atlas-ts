import React from "react";
import styles from "./slogan.module.scss";

export default function Slogan(): JSX.Element {
  return (
    <div className={styles.slogan}>
      <p>{`İyi bir
gelecek için...`}</p>
    </div>
  );
}
