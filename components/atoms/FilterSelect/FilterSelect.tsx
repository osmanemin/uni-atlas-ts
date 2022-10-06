import React, { useContext } from "react";
import { Context } from "../../../storage/Context";
import cn from "classnames";
import styles from "./filterSelect.module.scss";

type FilterSelectProps = {
  selectClass: string;
  selectName: string;
  placeholder: string;
  options?: any[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const FilterSelect = ({
  selectClass,
  selectName,
  placeholder,
  options,
  onChange,
}: FilterSelectProps): JSX.Element => {
  const context = useContext(Context);

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
              <option key={option.id || index} value={option.value || index}>
                {option.title}
              </option>
            );
          })}
      </select>
    </div>
  );
};

export default FilterSelect;
