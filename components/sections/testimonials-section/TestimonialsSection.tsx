"use client";
import React from "react";
import { data } from "./data";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import styles from "./testimonials.module.scss";

const TestimonialsSection = () => {
  return (
    <Section>
      <Container>
        <h2>{data.title}</h2>
        <div className={styles.list}>
          {data.testimonials.map((testimonial) => (
            <div key={testimonial.name} className={styles.item}>
              <p>{testimonial.name}</p>
              <p>{testimonial.testimonial}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default TestimonialsSection;
