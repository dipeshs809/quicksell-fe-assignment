import React from "react";
import { selectBoxProps } from "./index.interface";

export const SelectBox: React.FC<selectBoxProps> = ({
  initialValue,
  onChange,
  options,
  className,
}) => {
  return (
    <select
      onChange={(e) => onChange(e.target.value)}
      defaultValue={initialValue}
      className={className}
    >
      {options.map((option, index) => {
        return (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        );
      })}
    </select>
  );
};
