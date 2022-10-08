import React, { useContext } from "react";
import cn from "classnames";

import styles from "./universityDetail.module.scss";

import UniversityDetailContext from "../../../storage/UniversityDetailContext";
import { Position, Since, UniType } from "../../atoms/icons/index";
import Summary from "../../molecules/Summary";
import SummaryUniData from "../../molecules/SummaryUniData";

export default function UniversityDetail(): JSX.Element {
  const universityContext = useContext(UniversityDetailContext);
  return (
    <div
      className={styles.bgImage}
      style={{ backgroundImage: "url(/university/universityBg/nis_bg.png)" }}
    >
      {/* <BgMaster classBg={styles.bgImage} /> */}
      <div className={styles.navi}>
        <img
          className={styles.img}
          src={universityContext.img}
          alt={universityContext.name}
        />
        <h3 className={styles.naviTitle}>Fakülteler</h3>
        <h3 className={styles.naviTitle}>Bölümler</h3>
        <h3 className={styles.naviTitle}>İletişim</h3>
        <h3 className={styles.naviTitle}>Galeri</h3>
        <a href={"http://www." + universityContext.web} target="_blank" rel="noreferrer">
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
