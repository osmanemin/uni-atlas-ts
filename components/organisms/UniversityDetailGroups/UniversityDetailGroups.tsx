import React from "react";
import InfoCard from "../../molecules/InfoCard";
import InfoCardList from "../InfoCardList";

import styles from "./UniversityDetailGroups.module.scss";

type UniversityDetailGroupsProps = {
  programs: ProgramOfUniversity;
  academicians: AcademicianOfUniversity;
};

const UniversityDetailGroups = ({
  programs,
  academicians,
}: UniversityDetailGroupsProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <InfoCardList
        title="Üniversite Bölüm Sayıları"
        gridColumnCount={4}
      >
        <>
          <InfoCard title="Ön Lisans" count={programs.associateDegree} />
          <InfoCard title="Lisans" count={programs.degree} />
          <InfoCard title="Yüksek Lisans" count={programs.masterDegree} />
          <InfoCard title="Doktora" count={programs.doctorate} />
          <InfoCard title="MYO" count={programs.vocationalSchool} />
          <InfoCard title="Enstitü" count={programs.institute} />
          <InfoCard title="Fakülte" count={programs.faculty} />

          <InfoCard
            title="Araştırma Uygulamaları Merkezi"
            count={programs.collage}
          />
        </>
      </InfoCardList>
      <InfoCardList title="Üniversite Bölüm Sayıları" gridColumnCount={3}>
        <>
          <InfoCard
            title="Araştırma Görevlisi"
            count={academicians.assistant}
          />
          <InfoCard title="Öğretim Görevlisi" count={academicians.lecturer} />
          <InfoCard title="Doktor Öğretim Üyesi" count={academicians.doctor} />
          <InfoCard title="Doçent" count={academicians.associateProfessor} />
          <InfoCard title="Profesör" count={academicians.professor} />
          <InfoCard title="Toplam" count={academicians.total} />
        </>
      </InfoCardList>
    </div>
  );
};

export default UniversityDetailGroups;
