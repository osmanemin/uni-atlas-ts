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
  const {
    social,
    bgImage,
    name,
    web,
    img,
    city,
    date,
    type,
    programs,
    academicians,
    students,
  } = useContext(UniversityDetailContext);

  return (
    <>
      <div className={styles.bgImage}>
        <BgMaster
          classBg={styles.bgImage}
          bgImage={`/university/universityBg/${bgImage}`}
          alt={name}
        />
        <ScrollBottom />
        <UniversityDetailHeader
          social={social}
          name={name}
          webSite={web}
          img={img}
        />
        <Summary classContent={styles.summary}>
          <SummaryUniData title="Konum:" content={city}>
            <Position />
          </SummaryUniData>
          <SummaryUniData title="Kuruluş:" content={date}>
            <Since />
          </SummaryUniData>
          <SummaryUniData title="Türü:" content={type}>
            <UniType />
          </SummaryUniData>
        </Summary>
        <Summary
          classContent={styles.summaryUniNameContent}
          classTitle={styles.summaryUniName}
          title={name}
        ></Summary>
      </div>
      <UniversityDetailGroups
        programs={programs}
        academicians={academicians}
        students={students}
      />
    </>
  );
}
