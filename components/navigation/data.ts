import { ReactNode } from "react";

export type T_NavLink = {
  title: ReactNode;
  link: string;
};

export const navData: T_NavLink[] = [{ title: "Acasă", link: "/" }];

export const footerData: T_NavLink[] = [
  { title: "Politica de cookies", link: "/politica-de-cookies" },
  {
    title: "Politica de confidențialitate",
    link: "/politica-de-confidentialitate",
  },
];
