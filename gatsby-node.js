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
        }`)
}