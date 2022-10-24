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
import UniversityDetailHeader from "../../organisms/UniversityDetailHeader";

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
        <UniversityDetailHeader
          social={universityContext.social}
          name={universityContext.name}
          webSite={universityContext.web}
          img={universityContext.img}
        />
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
