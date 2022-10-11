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
      <Image src={"/background/pages/background.jpeg"} layout='fill' priority className={styles.bgImage}/>
      <div className={styles.wrapper}>
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
