"use client";
import { HiMiniEnvelope } from "react-icons/hi2";
import Button from "../buttons/Button";
import TextInput from "../inputs/TextInput";
import styles from "./contact-form-section.module.scss";

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
