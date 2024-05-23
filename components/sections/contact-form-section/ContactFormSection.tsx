"use client";
import { HiMiniEnvelope } from "react-icons/hi2";
import styles from "./contact-form-section.module.scss";
import { TextInput } from "@/components/inputs";
import Button from "@/components/buttons";

const ContactFormSection = () => {
  const handleSubmit = () => {
    console.log("submit");
  };
  return (
    <section className={styles.section}>
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
    </section>
  );
};

export default ContactFormSection;
