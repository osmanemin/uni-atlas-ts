import React, { useContext } from 'react'
import { Context } from "../../../storage/Context";
import cn from "classnames";
import styles from "./filterSelect.module.scss"

type FilterSelectProps = {
    selectClass: string;
    placeholder: string;
    options?: any[];
    first?: boolean;
  }

const FilterSelect = ({
    selectClass,
    placeholder,
    options,
    first,
  }: FilterSelectProps): JSX.Element => {
  const context = useContext(Context);

  return (
    <div className={styles.optionsContainer}>
      <select
        className={cn(styles.option, selectClass)}
        onChange={(event) => {
          first
            ? context.setSelectedDepartments({
                ...context.selectedDepartments,
                first: event.target.value,
              })
            : context.setSelectedDepartments({
                ...context.selectedDepartments,
                second: event.target.value // index,
              });
        }}
      >
        <option>{placeholder}</option>
        {options && options.map((option: Report, index:number) => {
          return (
            <option key={index} value={index}>
              {/* value={option.message.title} */}
              {option.title}
            </option>
          );
        })}
      </select>
    </div>
  )
}

export default FilterSelect