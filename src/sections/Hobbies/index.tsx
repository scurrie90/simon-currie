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


export function HobbiesSection(props: PageSection): React.ReactElement {
  const response = useLocalDataSource();
  const data = response.allHobbiesJson.sections[0];
  const shouldShowButton = data.button.visible !== false;
  const initiallyShownHobbies = data.button.initiallyShownHobbies ?? 5;
  const [shownHobbies, setShownHobbies] = React.useState<number>(
      shouldShowButton ? initiallyShownHobbies : data.hobbies.length,
  );

  function loadMoreHandler() {
      setShownHobbies(data.hobbies.length);
  }

  return (
      <Animation type="fadeUp">
          <Section anchor={props.sectionId} heading={props.heading}>
              <div className={classes.Hobbies}>
                  {data.hobbies.slice(0, shownHobbies).map((hobby, key) => {
                      return (
                          <Animation key={key} className={classes.Hobby} type="scaleIn" delay={key * 100}>
                              {hobby.image.src && (
                                  <GatsbyImage
                                      image={hobby.image.src.childImageSharp.gatsbyImageData}
                                      className={classes.Icon}
                                      alt={hobby.image.alt || `Hobby ${hobby.label}`}
                                  />
                              )}{' '}
                              {hobby.label}
                          </Animation>
                      );
                  })}
                  {shouldShowButton && shownHobbies < data.hobbies.length && (
                      <Animation type="scaleIn" delay={(shownHobbies + 1) * 100}>
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

