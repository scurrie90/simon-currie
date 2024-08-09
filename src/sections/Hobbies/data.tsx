import { graphql, useStaticQuery } from 'gatsby';
import { ImageObject } from 'gatsby-theme-portfolio-minimal/src/types'


interface HobbiesSectionQueryResult {
    allHobbiesJson: {
        sections: {
            button: {
                initiallyShownHobbies: number;
                label: string;
                visible: boolean;
            };
            hobbies: {
                image: ImageObject;
                label: string;
            }[];
        }[];
    };
}

export const useLocalDataSource = (): HobbiesSectionQueryResult => {
    
    return useStaticQuery(graphql`
        query HobbiesSectionQuery {
            allHobbiesJson {
                sections: nodes {
                    button {
                        initiallyShownHobbies
                        label
                        visible
                    }
                    hobbies {
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
