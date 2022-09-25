import React from "react";
import cn from "classnames";

import styles from "./arrowRightButton.module.scss";

type ArrowRightButtonProps = {
  className: string;
};

export default function ArrowRightButton({
  className,
}: ArrowRightButtonProps): JSX.Element {
  return (
    <div className={cn(styles.container, className)}>
      <div className={styles.content}>
        <div className={styles.top} />
        <div className={styles.center} />
        <div className={styles.bottom} />
      </div>
    </div>
  );
}
