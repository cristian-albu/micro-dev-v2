import { FC, InputHTMLAttributes } from "react";
import styles from "./inputs.module.scss";

export type T_Checkbox = InputHTMLAttributes<HTMLInputElement>;

const CheckboxInput: FC<T_Checkbox> = ({ children, ...attributes }) => {
  return (
    <label className={styles.checkboxLabel}>
      <input type="checkbox" className={styles.checkbox} {...attributes} />
      <div className={styles.checkboxChildren}>{children}</div>
    </label>
  );
};

export default CheckboxInput;
