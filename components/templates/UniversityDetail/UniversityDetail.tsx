import React, { useContext } from "react";
import cn from "classnames";

import styles from "./universityDetail.module.scss";

import UniversityDetailContext from "../../../storage/UniversityDetailContext";
import { Position, Since, UniType } from "../../atoms/icons/index";
import Summary from "../../molecules/Summary";
import SummaryUniData from "../../molecules/SummaryUniData";
import BgMaster from "../../organisms/BgMaster";
import ScrollBottom from "../../molecules/ScrollButton";
import UniversityDetailGroups from "../../organisms/UniversityDetailGroups";
import Twitter from "../../atoms/icons/Twitter";
import Facebook from "../../atoms/icons/Facebook";
import Instagram from "../../atoms/icons/Instagram";

export default function UniversityDetail(): JSX.Element {
  const universityContext = useContext(UniversityDetailContext);
  return (
    <>
      <div className={styles.bgImage}>
        <BgMaster
          classBg={styles.bgImage}
          bgImage={`/university/universityBg/${universityContext.bgImage}`}
          alt={universityContext.name}
        />
        <ScrollBottom />
        <div className={styles.navigation}>
          {/* <div className={styles.img}>
          <Image
            width={200}
            height={200}qq
            src={`/uni_avatars/${universityContext.img}`}
            alt={universityContext.name}
          />
          </div> */}
          <img
            className={styles.img}
            src={`/uni_avatars/${universityContext.img}`}
            alt={universityContext.name}
          />
          {/* <span className={styles.navigationTitle}>Fakülteler</span>
          <span className={styles.navigationTitle}>Bölümler</span> */}
          {universityContext.social && (
            <>
              {universityContext.social.twitter ? (
                <a
                  href={universityContext.social.twitter}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Twitter className={styles.icons} />
                </a>
              ) : (
                <Twitter className={cn(styles.icons, styles.noUrl)} />
              )}
              {universityContext.social.facebook ? (
                <a
                  href={universityContext.social.facebook}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Facebook className={styles.icons} />
                </a>
              ) : (
                <Facebook className={cn(styles.icons, styles.noUrl)} />
              )}

              {universityContext.social.instagram ? (
                <a
                  href={universityContext.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Instagram className={styles.icons} />
                </a>
              ) : (
                <Instagram className={cn(styles.icons, styles.noUrl)} />
              )}
            </>
          )}

          <a
            href={`https://www.${universityContext.web}`}
            target="_blank"
            rel="noreferrer"
            className={cn(styles.navigationTitle, styles.naviGoTo)}
          >
            Üniversiteye Git
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
      <UniversityDetailGroups
        programs={universityContext.programs}
        academicians={universityContext.academicians}
        students={universityContext.students}
      />
    </>
  );
}
