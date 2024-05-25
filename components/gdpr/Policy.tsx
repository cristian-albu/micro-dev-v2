import React, { FC } from "react";
import { T_Policy } from ".";
import styles from "./gpdr.module.scss";

const Policy: FC<{ data: T_Policy }> = ({ data }) => {
  return (
    <div className={styles.policy}>
      {data.map(({ title, content }, index) => {
        return (
          <div key={title} className={styles.policyItem}>
            {index === 0 ? <h1>{title}</h1> : <h2>{title}</h2>}

            {typeof content === "string" ? (
              <p>{content}</p>
            ) : (
              <div>
                <p>{content.text}</p>

                <ul>
                  {content.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Policy;
