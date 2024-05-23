import React, { FC, HTMLAttributes } from "react";
import styles from "./layout.module.scss";

type T_Container = HTMLAttributes<HTMLDivElement>;

const Container: FC<T_Container> = ({ children, className, ...attributes }) => {
  return (
    <div className={`${styles.container} ${className}`} {...attributes}>
      {children}
    </div>
  );
};

export default Container;
