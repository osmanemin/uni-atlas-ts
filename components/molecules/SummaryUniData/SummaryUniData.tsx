import React from "react";

import styles from "./summaryUniData.module.scss";

type SummaryUniData = {
  title: string;
  content: string;
  children: JSX.Element;
};

export default function SummaryUniData({
  title,
  content,
  children,
}: SummaryUniData): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.children}>{children}</div>
      <div className={styles.textArea}>
        <div className={styles.title}>{title}</div>
        <div className={styles.content}>{content}</div>
      </div>
    </div>
  );
}
