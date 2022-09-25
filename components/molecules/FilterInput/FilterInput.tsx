import React, { useContext } from "react";

import cn from "classnames";

import styles from "./filterInput.module.scss";
import { Context } from "../../../storage/Context";

type FilterInputProps = {
  inputClass: string;
  placeholder: string;
  options?: any[];
  first?: boolean;
}

export default function FilterInput({
  inputClass,
  placeholder,
  options,
  first,
}: FilterInputProps): JSX.Element {
  const context = useContext(Context);

  const result = options ? (
    <div className={styles.optionsContainer}>
      <select
        className={cn(styles.option, inputClass)}
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
        <option value={-0}>{placeholder}</option>
        {options.map((option, index) => {
          return (
            <option key={index} value={index}>
              {/* value={option.message.title} */}
              {option.message.title}
            </option>
          );
        })}
      </select>
    </div>
  ) : (
    <div className={styles.inputContainer}>
      <input className={cn(styles.option, inputClass)} />
      <div className={styles.arrowBottom}></div>
    </div>
  );

  return result;
}
