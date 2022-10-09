import React from "react";
import UniversityCard from "../../molecules/UniversityCard";

import styles from "./universityCardList.module.scss";

export default function UniversityCardList({
  universities,
}: UniversitiesPageProps): JSX.Element {
  return (
    <div className={styles.container}>
      <ul className={styles.content}>
        {universities.map((uni: any) => (
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
