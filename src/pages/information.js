import React from "react";
import { Section, Page, Seo } from "gatsby-theme-portfolio-minimal";

export default function SiteInformation() {
  return (
    <>
      <Seo title="About This Site" useTitleTemplate={true} noIndex={false} />
      <Page>
        <Section sectionId="information" heading="About This Site" />
      </Page>
    </>
  );
}