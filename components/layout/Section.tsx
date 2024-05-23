import React, { FC, HTMLAttributes } from "react";
import styles from "./layout.module.scss";

type T_Section = HTMLAttributes<HTMLDivElement>;

const Section: FC<T_Section> = ({ children, className, ...attributes }) => {
  return (
    <section className={`${styles.section} ${className}`} {...attributes}>
      {children}
    </section>
  );
};

export default Section;
