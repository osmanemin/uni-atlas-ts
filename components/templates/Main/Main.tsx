import React from "react";

import styles from "./main.module.scss";

import NavigationMenu from "../../organisms/NavigationMenu/NavigationMenu";
import UniAtlas from "../../molecules/UniAtlas/UniAtlas";
import Slogan from "../../molecules/Slogan/Slogan";
import UniFinder from "../../organisms/UniFinder/UniFinder";

export default function Main(): JSX.Element {
  return (
    <>
      <div className={styles.bgImage}>
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
