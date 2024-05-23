"use client";
import Button from "@/components/buttons";
import { data } from "./data";
import styles from "./hero-section.module.scss";
import React from "react";
import Image from "next/image";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";

const HeroSection = () => {
  return (
    <Section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.headingContainer}>
          <h1>{data.heading}</h1>
          <p>{data.description}</p>
          <Button>{data.button.text}</Button>
        </div>
        <div className={styles.imageContainer}>
          <Image
            width={300}
            height={300}
            src={data.image.link}
            alt={data.image.title}
            className={styles.image}
          />
        </div>
      </Container>
    </Section>
  );
};

export default HeroSection;
