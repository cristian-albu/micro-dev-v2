"use client";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import React from "react";
import { data } from "./data";
import Button from "@/components/buttons";
import styles from "./modules.module.scss";
import Image from "next/image";

const ModulesSection = () => {
  return (
    <Section>
      <Container>
        <h2>{data.title}</h2>
        <div className={styles.moduleContainer}>
          {data.modules.map((module) => {
            return (
              <div key={module.title} className={styles.card}>
                <div className={styles.content}>
                  <h3>{module.title}</h3>
                  <h4>{module.subTitle}</h4>
                  <p>{module.description1}</p>
                  <p>{module.description2}</p>
                  <Button>{module.button.title}</Button>
                </div>
                <div className={styles.imgContainer}>
                  <Image
                    src={module.image.link}
                    width={300}
                    height={300}
                    alt={module.image.title}
                    className={styles.img}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

export default ModulesSection;
