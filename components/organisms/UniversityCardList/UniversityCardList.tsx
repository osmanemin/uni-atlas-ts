import React, { useContext } from "react";

import styles from "./universityCardList.module.scss";

import UniversitiesContext from "../../../storage/UniversitiesContext";
import UniversityCard from "../../molecules/UniversityCard";

export default function UniversityCardList(): JSX.Element {
  const context = useContext(UniversitiesContext);

  return (
    <div className={styles.container}>
      <ul className={styles.content}>
        {context.universities.map((uni: any) => (
          <li key={uni.id}>
            <UniversityCard
              src={uni.img}
              name={uni.name}
              city={uni.city}
              slug={uni.slug}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
