exports.sourceNodes = ({ actions, schema }) => {
    const { createTypes } = actions;
    createTypes(`  
        type Skill {
        label: String
        image: Image
        }
        type SkillsButton {
            visible: Boolean
            label: String
            initiallyShownSkills: Int
        }
        type SkillsJson implements Node @dontInfer {
            skills: [Skill]
            button: SkillsButton
        }
            
        type Hobby {
        label: String
        image: Image
        }
        type HobbiesButton {
            visible: Boolean
            label: String
            initiallyShownHobbies: Int
        }
        type HobbiesJson implements Node @dontInfer {
            hobbies: [Hobby]
            button: HobbiesButton
        }`)
}