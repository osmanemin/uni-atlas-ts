import React from "react";

import styles from "./main.module.scss";

import NavigationMenu from "../../organisms/NavigationMenu";
import UniAtlas from "../../molecules/UniAtlas";
import Slogan from "../../molecules/Slogan";
import UniFinder from "../../organisms/UniFinder";
import Image from "next/image";

export default function Main(): JSX.Element {
  return (
    <>
      <div className={styles.wrapper}>
        <Image
          alt="ani atlas"
          src={"/background/pages/background.jpeg"}
          fill
          priority
          className={styles.bgImage}
        />
        <UniAtlas className={styles.uniAtlas} />
        <Slogan />
        <NavigationMenu />
      </div>
      <div className={styles.finder}>
        <UniFinder />
      </div>
    </>
  );
}
