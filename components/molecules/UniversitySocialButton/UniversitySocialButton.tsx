import React from "react";
import cn from "classnames";

import styles from "./UniversitySocialButton.module.scss"

type UniversitySocialButtonProps = {
  href: string;
  Icon: (className: any) => JSX.Element;
};

const UniversitySocialButton = ({ href, Icon }: UniversitySocialButtonProps) => {
  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer">
        <Icon className={styles.icons} />
      </a>
    );
  }
  return <Icon className={cn(styles.icons, styles.noUrl)} />;
};

export default UniversitySocialButton;
