import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo
} from "gatsby-theme-portfolio-minimal";

import { SkillsSection } from "../sections/Skills";
import { HobbiesSection } from "../sections/Hobbies";

export default function IndexPage() {
  return (
    <>
      <Seo title="Simon Currie Developer Portfolio Personal Blog" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <ArticlesSection sectionId="articles" heading="Latest Blog Posts" sources={['Blog']} />
        <AboutSection sectionId="about" heading="About Me" /> 
        <SkillsSection sectionId="skills" heading="What I Do" />        
        <InterestsSection sectionId="interests" heading= "What I'm Passionate About" />
        <HobbiesSection sectionId="hobbies" heading="How I Relax" />
        <ProjectsSection sectionId="projects" heading="Recent Projects" />
        <ContactSection sectionId="contact" heading="Contact Me" />
      </Page>
    </>
  );
}
