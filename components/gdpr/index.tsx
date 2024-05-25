import GdprContents from "./GdprContents";
import Policy from "./Policy";
import { data } from "./data";

const { privacyPolicyData, cookiesPolicyData } = data;

export type T_PolicyContent =
  | {
      text: string;
      bullets: string[];
    }
  | string;

export type T_PolicyItem = {
  title: string;
  content: T_PolicyContent;
};

export type T_Policy = T_PolicyItem[];

const PrivacyPolicy = () => {
  return <Policy data={privacyPolicyData} />;
};

const CookiePolicy = () => {
  return <Policy data={cookiesPolicyData} />;
};

export { GdprContents, PrivacyPolicy, CookiePolicy };
