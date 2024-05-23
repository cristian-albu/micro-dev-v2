"use client";
import { HiMiniEnvelope } from "react-icons/hi2";
import styles from "./contact-form-section.module.scss";
import { TextInput } from "@/components/inputs";
import Button from "@/components/buttons";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";

const ContactFormSection = () => {
  const handleSubmit = () => {
    console.log("submit");
  };
  return (
    <Section className={styles.section}>
      <Container>
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <TextInput id="nume">Nume</TextInput>
          <TextInput id="email" type="email">
            Email
          </TextInput>
          <Button onClick={handleSubmit}>
            <HiMiniEnvelope />
            Trimite
          </Button>
        </form>
      </Container>
    </Section>
  );
};

export default ContactFormSection;
