import React from "react";

import styles from "./marketReport.module.scss";

import ScrollBottom from "../../molecules/ScrollButton";
import Summary from "../../molecules/Summary";
import CompareReport from "../../organisms/CompareReport";
import MasterComponent from "../MasterComponent";

export default function MarketReport(): JSX.Element {
  return (
    <>
      <MasterComponent
        title="Piyasa Raporu"
        color="#f2ce16"
        classBg={styles.bgImage}
      >
        <Summary
          title="Nedir ?"
          text="Üniversite lisans mezunlarının işgücü piyasası performanslarını “bölüm
          bazında” değerlendiren Üni-Veri, başta üniversite tercihi yapacak
          öğrenciler olmak üzere eğitimi devam eden gençlerin ve
          profesyonellerin doğrudan yararlanabileceği ulusal bir araştırmadır."
          classContent={styles.classContent}
          classTitle={styles.title}
        />
        <ScrollBottom />
      </MasterComponent>
      <CompareReport/>
    </>
  );
}
