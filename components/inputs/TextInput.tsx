import { FC, InputHTMLAttributes } from "react";
import styles from "./inputs.module.scss";

export type T_TextInput = InputHTMLAttributes<HTMLInputElement>;

const TextInput: FC<T_TextInput> = ({ children, ...attributes }) => {
  return (
    <label className={styles.label}>
      <div className={styles.labelChildren}>{children}</div>
      <input type="text" className={styles.textInput} {...attributes} />
    </label>
  );
};

export default TextInput;
