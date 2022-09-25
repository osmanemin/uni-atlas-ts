import React from "react";

import styles from "./universities.module.scss";

import MasterComponent from "../MasterComponent/MasterComponent";
import Summary from "../../molecules/Summary/Summary";
import FavoriteUniversityCardList from "../../organisms/FavoriteUniversityCardList/FavoriteUniversityCardList";
import ScrollBottom from "../../molecules/ScrollButton/ScrollBottom";
import UniversityCardList from "../../organisms/UniversityCardList/UniversityCardList";
import { UniversitiesTitle } from "../../atoms/icons/index";
import UniversitiesFilterSide from "../../organisms/UniversitiesFilterSide/UniversitiesFilterSide";

export default function Universities(): JSX.Element {
  return (
    <>
      <MasterComponent
        title="Üniversiteler"
        color="#FF1F3E"
        classBg={styles.bgImage}
      >
        <Summary
          title="ÜNİVERSİTELERİ KEŞFET"
          text="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
          classContent={styles.classContent}
          classTitle={styles.title}
        />
        <ScrollBottom />
        <FavoriteUniversityCardList />
      </MasterComponent>
      <div className={styles.mainContent}>
        <UniversitiesTitle className={styles.title}/>
        <UniversitiesFilterSide />
        <UniversityCardList />
      </div>
    </>
  );
}
