import React from "react";
import cn from "classnames";

import styles from "./summary.module.scss";

type SummaryProps = {
  title?: string;
  text?: string;
  classContent: string;
  classTitle?: string;
  children?: JSX.Element[];
};
export default function Summary({
  title,
  text,
  classContent,
  classTitle,
  children,
}: SummaryProps): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={cn(classContent, styles.content)}>
        {title && <h2 className={cn(styles.title, classTitle)}>{title}</h2>}
        {text && <p className={styles.text}>{text}</p>}
        {children}
      </div>
    </div>
  );
}
