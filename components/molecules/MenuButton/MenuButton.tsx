import Link from "next/link";
import React from "react";
import styles from "./menuButton.module.scss";

type MenuButtonProps = {
  title: string;
  bgColor: string;
  children: JSX.Element;
  href: string;
};

export default function MenuButton({
  title,
  bgColor,
  children,
  href,
}: MenuButtonProps): JSX.Element {
  return (
    <Link href={href}>
      <a>
        <div
          className={styles.container}
          style={{ backgroundColor: `${bgColor}` }}
        >
          {children}
          <h2 className={styles.title}>{title}</h2>
        </div>
      </a>
    </Link>
  );
}
