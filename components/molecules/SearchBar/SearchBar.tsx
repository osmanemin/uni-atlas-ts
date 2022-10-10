import React, { useEffect, useState } from "react";
import useDebounce from "../../../hooks/useDebounce";
import Input from "../../atoms/Input";
import Select from "../../atoms/Select/Select";

import styles from "./searchBar.module.scss";

type SearchBarProps = {
  placeHolder?: string;
  name: string;
  icon: JSX.Element;
  onChange: (value: any) => void;
  formElement: "input" | "select";
  options?: { key: string; value: string | number}[];
  delay?: number;
  value?: string | number;
  selected?: boolean;
};

export default function SearchBar({
  placeHolder,
  icon,
  onChange,
  name,
  formElement,
  options,
  delay=0,
  value,
}: SearchBarProps): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, delay);

  useEffect(() => {
    onChange(searchTerm);
  }, [debouncedSearchTerm]);

  return (
    <div className={styles.container}>
      {icon}
      {formElement === "input" ? (
        <Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setSearchTerm(e.currentTarget.value.trim().toLocaleLowerCase("tr"));
          }}
          name={name}
          className={styles.input}
          placeholder={placeHolder}
          autoComplete="off"
        />
      ) : (
        <Select
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setSearchTerm(e.currentTarget.value.trim().toLocaleLowerCase("tr"));
          }}
          name={name}
          className={styles.input}
          options={options}
        />
      )}
    </div>
  );
}
