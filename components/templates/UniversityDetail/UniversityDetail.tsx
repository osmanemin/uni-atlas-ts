import React, { useContext } from "react";
import cn from "classnames";

import styles from "./universityDetail.module.scss";

import UniversityDetailContext from "../../../storage/UniversityDetailContext";
import { Position, Since, UniType } from "../../atoms/icons/index";
import Summary from "../../molecules/Summary";
import SummaryUniData from "../../molecules/SummaryUniData";
import BgMaster from "../../organisms/BgMaster";
import ScrollBottom from "../../molecules/ScrollButton";

export default function UniversityDetail(): JSX.Element {
  const universityContext = useContext(UniversityDetailContext);
  return (
    <div className={styles.bgImage}>
      <BgMaster
        classBg={styles.bgImage}
        bgImage={`/university/universityBg/${universityContext.bgImage}`}
      />
      <ScrollBottom />
      <div className={styles.navi}>
        {/* <div className={styles.img}>
          <Image
            width={200}
            height={200}
            src={`/uni_avatars/${universityContext.img}`}
            alt={universityContext.name}
          />
        </div> */}
        <img
          className={styles.img}
          src={`/uni_avatars/${universityContext.img}`}
          alt={universityContext.name}
        />
        <h3 className={styles.naviTitle}>Fakülteler</h3>
        <h3 className={styles.naviTitle}>Bölümler</h3>
        <h3 className={styles.naviTitle}>İletişim</h3>
        <h3 className={styles.naviTitle}>Galeri</h3>
        <a
          href={"http://www." + universityContext.web}
          target="_blank"
          rel="noreferrer"
        >
          <h3 className={cn(styles.naviTitle, styles.naviGoTo)}>Siteye git</h3>
        </a>
      </div>
      <Summary classContent={styles.summary}>
        <SummaryUniData title="Konum:" content={universityContext.city}>
          <Position />
        </SummaryUniData>
        <SummaryUniData title="Kuruluş:" content={universityContext.date}>
          <Since />
        </SummaryUniData>
        <SummaryUniData title="Türü:" content={universityContext.type}>
          <UniType />
        </SummaryUniData>
      </Summary>
      <Summary
        classContent={styles.summaryUniNameContent}
        classTitle={styles.summaryUniName}
        title={universityContext.name}
      ></Summary>
    </div>
  );
}
