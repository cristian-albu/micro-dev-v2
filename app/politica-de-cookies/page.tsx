import { CookiePolicy } from "@/components/gdpr";
import { data } from "@/components/gdpr/data";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Politica de cookies",
  description: data.cookiesPolicyData[0].content as string,
};

const CookiePolicyPage = () => {
  return (
    <Section>
      <Container>
        <CookiePolicy />
      </Container>
    </Section>
  );
};

export default CookiePolicyPage;
