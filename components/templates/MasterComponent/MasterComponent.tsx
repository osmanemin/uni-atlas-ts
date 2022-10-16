import React from "react";

import styles from "./masterComponent.module.scss";

import BgMaster from "../../organisms/BgMaster";
import MasterNavigation from "../../organisms/MasterNavigation";
import Head from "../../molecules/Head";

type MasterComponentProps = {
  children: JSX.Element[];
  title: string;
  color: string;
  classBg: string;
  bgImage: string;
  alt: string;
};
export default function MasterComponent({
  children,
  title,
  color,
  classBg,
  bgImage,
  alt,
}: MasterComponentProps): JSX.Element {
  return (
    <div className={styles.upSide}>
      <Head />
      <MasterNavigation title={title} color={color} />
      <BgMaster classBg={classBg} bgImage={bgImage} alt={alt}/>
      {children}
    </div>
  );
}
