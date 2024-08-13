import React from "react";
import { Section, Page, Seo, Animation } from "gatsby-theme-portfolio-minimal";

export default function SiteInformation() {
  return (
    <>
      <Seo title="About This Site" useTitleTemplate={true} noIndex={false} />
      <Page>
        <Animation type="fadeUp">
          <Section sectionId="information" heading="About This Site">
            <p>Version 1.0 of this site uses React and Gatsby for the front-end and GraphQL to serve data.

              I originally used the gatsby-theme-portfolio-minimal, and it still underlies much of the UI, however I added a fair bit of custom React TSX myself.
            </p>
            <p>
              Anything I wrote custom I wrote in TypeScript - coming from a C# background, I much prefer the strong typing of TypeScript. 

              For hosting, I use GitHub Pages with a GitHub Actions Workflow that triggers a fresh deploy any time a push is made to main - the version on the main branch is by definiton the live version. 

              I use feature branches to tinker and then merge in when I'm satisfied.

              For DNS and all things Domain, I use CloudShare.
            </p>
            <p>
              The source code for this website can be found on <a href="https://github.com/scurrie90/simon-currie"><u>Github</u></a>.
            </p>
          </Section>          
        </Animation>
      </Page>
    </>
  );
}