import React, { useEffect, useState } from "react";

import styles from "./universities.module.scss";

import MasterComponent from "../MasterComponent";
import Summary from "../../molecules/Summary";
import FavoriteUniversityCardList from "../../organisms/FavoriteUniversityCardList";
import ScrollBottom from "../../molecules/ScrollButton";
import UniversityCardList from "../../organisms/UniversityCardList";
import { UniversitiesTitle } from "../../atoms/icons/index";
import UniversitiesFilterSide from "../../organisms/UniversitiesFilterSide";

export default function Universities({
  universities,
}: UniversitiesPageProps): JSX.Element {
  const [filteredUniversities, setFilteredUniversities] =
    useState(universities);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(0);
  const handleSetSearch = (value: string) => {
    setSearch(value);
  };
  const handleSort = (value: number) => {
    setSort(value || 0);
    setFilteredUniversities((prev) => {
      return [...prev].sort(() => -1);
    });
  };

  useEffect(() => {
    setFilteredUniversities(
      universities
        .filter((uni) => uni.name.toLocaleLowerCase("tr").includes(search))
        .sort(() => {
          if (sort === 1) {
            return 1;
          } else return sort && -1;
        })
    );
  }, [search]);

  return (
    <>
      <MasterComponent
        title="Üniversiteler"
        color="rgba(255, 31, 62, 0.85)"
        classBg={styles.bgImage}
      >
        <Summary
          title="ÜNİVERSİTELERİ KEŞFET"
          text="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
          classContent={styles.classContent}
          classTitle={styles.title}
        />
        <ScrollBottom />
        {/* <FavoriteUniversityCardList /> */}
      </MasterComponent>
      <div className={styles.mainContent}>
        <UniversitiesTitle textStyle={styles.textStyle} uStyle={styles.uStyle} className={styles.title} />
        <UniversitiesFilterSide
          handleSetSearch={handleSetSearch}
          sort={sort}
          handleSort={handleSort}
        />
        <UniversityCardList universities={filteredUniversities} />
      </div>
    </>
  );
}
