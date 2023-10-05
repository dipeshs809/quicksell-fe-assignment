import React from "react";
import styles from "./index.module.scss";
import { selectBoxProps } from "./index.interface";

export const SelectBox: React.FC<selectBoxProps> = ({
  label,
  initialValue,
  onChange,
  options,
  className,
}) => {
  return (
    <div className={styles.selectBox}>
      <label>{label}</label>
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
    </div>
  );
};
