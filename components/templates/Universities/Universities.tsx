import React from "react";

import styles from "./universities.module.scss";

import MasterComponent from "../MasterComponent";
import Summary from "../../molecules/Summary";
import FavoriteUniversityCardList from "../../organisms/FavoriteUniversityCardList";
import ScrollBottom from "../../molecules/ScrollButton";
import UniversityCardList from "../../organisms/UniversityCardList";
import { UniversitiesTitle } from "../../atoms/icons/index";
import UniversitiesFilterSide from "../../organisms/UniversitiesFilterSide";

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
