import React from "react";
import {
  Section,
  Animation
} from "gatsby-theme-portfolio-minimal";
import { GatsbyImage } from 'gatsby-plugin-image';
import { Button, ButtonType } from 'gatsby-theme-portfolio-minimal/src/components/Button';
import { useLocalDataSource } from './data';
import { PageSection } from 'gatsby-theme-portfolio-minimal/src/types';
import * as classes from './style.module.css'


export function SkillsSection(props: PageSection): React.ReactElement {
  const response = useLocalDataSource();
  const data = response.allSkillsJson.sections[0];
  const shouldShowButton = data.button.visible !== false;
  const initiallyShownSkills = data.button.initiallyShownSkills ?? 5;
  const [shownSkills, setShownSkills] = React.useState<number>(
      shouldShowButton ? initiallyShownSkills : data.skills.length,
  );

  function loadMoreHandler() {
      setShownSkills(data.skills.length);
  }

  return (
      <Animation type="fadeUp">
          <Section anchor={props.sectionId} heading={props.heading}>
              <div className={classes.Skills}>
                  {data.skills.slice(0, shownSkills).map((skill, key) => {
                      return (
                          <Animation key={key} className={classes.Skill} type="scaleIn" delay={key * 100}>
                              {skill.image.src && (
                                  <GatsbyImage
                                      image={skill.image.src.childImageSharp.gatsbyImageData}
                                      className={classes.Icon}
                                      alt={skill.image.alt || `Skill ${skill.label}`}
                                  />
                              )}{' '}
                              {skill.label}
                          </Animation>
                      );
                  })}
                  {shouldShowButton && shownSkills < data.skills.length && (
                      <Animation type="scaleIn" delay={(shownSkills + 1) * 100}>
                          <Button
                              type={ButtonType.BUTTON}
                              onClickHandler={loadMoreHandler}
                              label={data.button.label}
                          />
                      </Animation>
                  )}
              </div>
          </Section>
      </Animation>
  );
}