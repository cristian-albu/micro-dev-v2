import React, { ButtonHTMLAttributes, FC } from "react";
import styles from "./button.module.scss";

export type T_Button = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<T_Button> = ({ children, ...attributes }) => {
  return (
    <button className={styles.button} {...attributes}>
      {children}
    </button>
  );
};

export default Button;
