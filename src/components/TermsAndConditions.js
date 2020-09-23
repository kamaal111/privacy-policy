import React, { Fragment } from "react";

import { termsAndCondition } from "../appContent";
import { lastUpdated } from "../config";
import ContactMe from "./ContactMe";

function TermsAndConditions() {
  return (
    <>
      <h1>{termsAndCondition.title}</h1>
      <h3>Last updated: {lastUpdated}</h3>
      <p>{termsAndCondition.description}</p>
      {termsAndCondition.content.map(({ header, content }) => {
        return (
          <Fragment key={header}>
            <h2>{header}</h2>
            <p>{content}</p>
          </Fragment>
        );
      })}
      <ContactMe from={termsAndCondition.title} />
    </>
  );
}

export default TermsAndConditions;
