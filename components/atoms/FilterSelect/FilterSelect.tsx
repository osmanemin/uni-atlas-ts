import React from "react";
import cn from "classnames";
import styles from "./filterSelect.module.scss";

type FilterSelectProps = {
  selectClass: string;
  selectName: string;
  selected?: number;
  placeholder: string;
  options?: any[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const FilterSelect = ({
  selectClass,
  selectName,
  selected,
  placeholder,
  options,
  onChange,
}: FilterSelectProps): JSX.Element => {
  return (
    <div className={styles.optionsContainer}>
      <select
        name={selectName}
        className={cn(styles.option, selectClass)}
        onChange={onChange}
      >
        <option>{placeholder}</option>
        {options &&
          options.map((option: any, index: number) => {
            return (
              <option selected={selected === index ? true: false} key={option.id || index} value={option.value || index}>
                {option.title}
              </option>
            );
          })}
      </select>
    </div>
  );
};

export default FilterSelect;
