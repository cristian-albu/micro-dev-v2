"use client";
import React from "react";
import styles from "./values.module.scss";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import { data } from "./data";

const ValuesSection = () => {
  return (
    <Section>
      <Container>
        <div className={styles.list}>
          <h2>{data.title}</h2>
          {data.values.map((value) => (
            <div key={value.title} className={styles.item}>
              <p>{value.title}</p>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default ValuesSection;
