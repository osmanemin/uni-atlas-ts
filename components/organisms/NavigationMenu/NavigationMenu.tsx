import React from "react";

import styles from "./navigationMenu.module.scss";

import MenuButton from "../../molecules/MenuButton";
import * as Icons from "../../atoms/icons";

export default function NavigationMenu(): JSX.Element {
  return (
    <div className={styles.container}>
          <MenuButton title="Üniversiteler" bgColor="rgb(242,5,68)" href="/universiteler">
            <Icons.School />
          </MenuButton>
          <MenuButton title="Bölümler" bgColor="rgb(56,32,140)" href="/bolumler">
            <Icons.Department />
          </MenuButton>
          <MenuButton title="Şehirler" bgColor="rgb(79,62,140)" href="/sehirler">
            <Icons.Cityscape />
          </MenuButton>
          <MenuButton title="Tercih Robotu" bgColor="rgb(57,143,103)" href="/tercih-robotu">
            <Icons.Robot />
          </MenuButton>
          <MenuButton title="Piyasa Raporu" bgColor="rgb(242,206,22)" href="/piyasa-raporu">
            <Icons.Statistics />
          </MenuButton>
    </div>
  );
}
