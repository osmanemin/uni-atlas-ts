import React from "react";
import cn from "classnames";

import styles from "./UniversityDetailHeader.module.scss";
import { Facebook, Instagram, Twitter } from "../../atoms/icons";
import UniversitySocialButton from "../../molecules/UniversitySocialButton";

type UniversityDetailHeader = {
  social: SocialOfUniversity;
  webSite: string;
  name: string;
  img: string;
};
const UniversityDetailHeader = ({
  social,
  webSite,
  name,
  img,
}: UniversityDetailHeader) => {
  return (
    <div className={styles.navigation}>
      {/* <div className={styles.img}>
          <Image
            width={200}
            height={200}qq
            src={`/uni_avatars/${img}`}
            alt={name}
          />
          </div> */}
      <img className={styles.img} src={`/uni_avatars/${img}`} alt={name} />
      {/* <span className={styles.navigationTitle}>Fakülteler</span>
          <span className={styles.navigationTitle}>Bölümler</span> */}
      {social && (
        <>
          <UniversitySocialButton Icon={Twitter} href={social.twitter} />
          <UniversitySocialButton Icon={Facebook} href={social.facebook} />
          <UniversitySocialButton Icon={Instagram} href={social.instagram} />
        </>
      )}

      <a
        href={`https://www.${webSite}`}
        target="_blank"
        rel="noreferrer"
        className={cn(styles.navigationTitle, styles.naviGoTo)}
      >
        Üniversiteye Git
      </a>
    </div>
  );
};

export default UniversityDetailHeader;
