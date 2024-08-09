import { graphql, useStaticQuery } from 'gatsby';
import { ImageObject } from 'gatsby-theme-portfolio-minimal/src/types';

interface SkillsSectionQueryResult {
    allSkillsJson: {
        sections: {
            button: {
                initiallyShownSkills: number;
                label: string;
                visible: boolean;
            };
            interests: {
                image: ImageObject;
                label: string;
            }[];
        }[];
    };
}

export const useLocalDataSource = (): SkillsSectionQueryResult => {
    return useStaticQuery(graphql`
        query SkillsSectionQuery {
            allSkillsJson {
                sections: nodes {
                    button {
                        initiallyShownSkills
                        label
                        visible
                    }
                    interests {
                        image {
                            alt
                            src {
                                childImageSharp {
                                    gatsbyImageData(width: 20, height: 20)
                                }
                            }
                            objectFit
                        }
                        label
                    }
                }
            }
        }
    `);
};
