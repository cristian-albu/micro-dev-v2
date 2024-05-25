import { PrivacyPolicy } from "@/components/gdpr";
import { data } from "@/components/gdpr/data";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Politica de confidențialitate",
  description: data.privacyPolicyData[0].content as string,
};

const PrivacyPolicyPage = () => {
  return (
    <Section>
      <Container>
        <PrivacyPolicy />
      </Container>
    </Section>
  );
};

export default PrivacyPolicyPage;
