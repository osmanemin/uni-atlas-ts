import React from "react";
import Link from "next/link";
import cn from "classnames";

import styles from "./uniAtlas.module.scss";

type UniAtlasProps = {
  className: string;
  titleClass?: string;
};

export default function UniAtlas({ className, titleClass }: UniAtlasProps) {
  return (
    <Link legacyBehavior href="/">
        <div className={cn(className, styles.container)}>
          <h1 className={cn(titleClass, styles.title)}>UNİ ATLAS</h1>
        </div>
    </Link>
  );
}
