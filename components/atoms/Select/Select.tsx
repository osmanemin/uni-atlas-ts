import React from "react";

const Select = ({ options, ...props }: any) => {
  return (
    <select
      {...props}
      onChange={(e) => {
        props.onChange(e);
      }}
    >
      {options.map((option: any) => {
        return (
          <option
            key={option.key}
            value={option.value}
          >
            {option.key}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
