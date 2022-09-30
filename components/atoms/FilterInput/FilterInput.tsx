import React from "react";
import cn from "classnames";
import styles from "./filterInput.module.scss";

type FilterInputProps = {
  inputClass: string;
  placeholder: string;
};

export default function FilterInput({
  inputClass,
  placeholder
}: FilterInputProps): JSX.Element {
  return (
    <div className={styles.inputContainer}>
      <input placeholder={placeholder} className={cn(styles.option, inputClass)} />
      <div className={styles.arrowBottom}></div>
    </div>
  );
}
