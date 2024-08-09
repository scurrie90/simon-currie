import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
  Section,
  Animation,
  Button, ButtonType,
  GatsbyImage,
  PageSection, 
  useLocalDataSource
} from "gatsby-theme-portfolio-minimal";

import { SkillsSection } from "../sections/Skills";
export default function IndexPage() {
  return (
    <>
      <Seo title="Simon Currie Developer Portfolio Personal Blog" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <ArticlesSection sectionId="articles" heading="Latest Blog Posts" sources={['Blog']} />
        <AboutSection sectionId="about" heading="About Me" /> 
        <SkillsSection sectionId="skills" heading="What I do" />        
        <InterestsSection sectionId="interests" heading="Hobbies and Interests" />
        <ProjectsSection sectionId="projects" heading="Recent Projects" />
        <ContactSection sectionId="contact" heading="Contact Me" />
      </Page>
    </>
  );
}
