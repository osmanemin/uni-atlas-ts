import React from "react";
import InfoCard from "../../molecules/InfoCard";
import InfoCardList from "../InfoCardList";

import styles from "./UniversityDetailGroups.module.scss";

type UniversityDetailGroupsProps = {
  programs: ProgramOfUniversity;
  academicians: AcademicianOfUniversity;
  students: StudentOfUniversity;
};

const UniversityDetailGroups = ({
  programs,
  academicians,
  students,
}: UniversityDetailGroupsProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      {programs && (
        <InfoCardList title="Program Sayıları" gridColumnCount={4}>
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
      )}

      {academicians && (
        <InfoCardList title="Öğretim Elemanları" gridColumnCount={3}>
          <>
            <InfoCard
              title="Araştırma Görevlisi"
              count={academicians.assistant}
            />
            <InfoCard title="Öğretim Görevlisi" count={academicians.lecturer} />
            <InfoCard
              title="Doktor Öğretim Üyesi"
              count={academicians.doctor}
            />
            <InfoCard title="Doçent" count={academicians.associateProfessor} />
            <InfoCard title="Profesör" count={academicians.professor} />
            <InfoCard title="Toplam" count={academicians.total} />
          </>
        </InfoCardList>
      )}

      {students && (
        <InfoCardList title="Öğrenci Sayıları" gridColumnCount={3}>
          <>
            <InfoCard title="Ön Lisans" count={students.associateDegree} />
            <InfoCard title="Lisans" count={students.degree} />
            <InfoCard title="Yüksek Lisans" count={students.masterDegree} />
            <InfoCard title="Doktora" count={students.doctorate} />
            <InfoCard title="Toplam" count={students.total} />
          </>
        </InfoCardList>
      )}
    </div>
  );
};

export default UniversityDetailGroups;
