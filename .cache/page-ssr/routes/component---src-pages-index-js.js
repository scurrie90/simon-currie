"use strict";
exports.id = 293;
exports.ids = [293];
exports.modules = {

/***/ 1457:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ IndexPage)
});

// EXTERNAL MODULE: external "D:\\localRepos\\simon-currie\\node_modules\\react\\index.js"
var external_D_localRepos_simon_currie_node_modules_react_index_js_ = __webpack_require__(339);
var external_D_localRepos_simon_currie_node_modules_react_index_js_default = /*#__PURE__*/__webpack_require__.n(external_D_localRepos_simon_currie_node_modules_react_index_js_);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-portfolio-minimal/index.js + 50 modules
var gatsby_theme_portfolio_minimal = __webpack_require__(1777);
// EXTERNAL MODULE: ./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js
var gatsby_image_module = __webpack_require__(4722);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-portfolio-minimal/src/components/Button/index.tsx + 1 modules
var Button = __webpack_require__(3457);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(123);
;// CONCATENATED MODULE: ./src/sections/Skills/data.tsx
const useLocalDataSource=()=>{return (0,gatsby_browser_entry.useStaticQuery)("2241647740");};
;// CONCATENATED MODULE: ./src/sections/Skills/style.module.css
// Exports
var Skills = "style-module--Skills--2a6e4";
var Skill = "style-module--Skill--f566d";
var Icon = "style-module--Icon--06b37";

;// CONCATENATED MODULE: ./src/sections/Skills/index.tsx
function SkillsSection(props){var _data$button$initiall;const response=useLocalDataSource();const data=response.allSkillsJson.sections[0];const shouldShowButton=data.button.visible!==false;const initiallyShownSkills=(_data$button$initiall=data.button.initiallyShownSkills)!==null&&_data$button$initiall!==void 0?_data$button$initiall:5;const[shownSkills,setShownSkills]=external_D_localRepos_simon_currie_node_modules_react_index_js_default().useState(shouldShowButton?initiallyShownSkills:data.skills.length);function loadMoreHandler(){setShownSkills(data.skills.length);}return/*#__PURE__*/external_D_localRepos_simon_currie_node_modules_react_index_js_default().createElement(gatsby_theme_portfolio_minimal/* Animation */.X5,{type:"fadeUp"},/*#__PURE__*/external_D_localRepos_simon_currie_node_modules_react_index_js_default().createElement(gatsby_theme_portfolio_minimal/* Section */.wn,{anchor:props.sectionId,heading:props.heading},/*#__PURE__*/external_D_localRepos_simon_currie_node_modules_react_index_js_default().createElement("div",{className:Skills},data.skills.slice(0,shownSkills).map((skill,key)=>{return/*#__PURE__*/external_D_localRepos_simon_currie_node_modules_react_index_js_default().createElement(gatsby_theme_portfolio_minimal/* Animation */.X5,{key:key,className:Skill,type:"scaleIn",delay:key*100},skill.image.src&&/*#__PURE__*/external_D_localRepos_simon_currie_node_modules_react_index_js_default().createElement(gatsby_image_module/* GatsbyImage */.mV,{image:skill.image.src.childImageSharp.gatsbyImageData,className:Icon,alt:skill.image.alt||`Skill ${skill.label}`}),' ',skill.label);}),shouldShowButton&&shownSkills<data.skills.length&&/*#__PURE__*/external_D_localRepos_simon_currie_node_modules_react_index_js_default().createElement(gatsby_theme_portfolio_minimal/* Animation */.X5,{type:"scaleIn",delay:(shownSkills+1)*100},/*#__PURE__*/external_D_localRepos_simon_currie_node_modules_react_index_js_default().createElement(Button/* Button */.$,{type:Button/* ButtonType */.V.BUTTON,onClickHandler:loadMoreHandler,label:data.button.label})))));}
;// CONCATENATED MODULE: ./src/sections/Hobbies/data.tsx
const data_useLocalDataSource=()=>{return (0,gatsby_browser_entry.useStaticQuery)("1832833903");};
;// CONCATENATED MODULE: ./src/sections/Hobbies/style.module.css
// Exports
var Hobbies = "style-module--Hobbies--72ff5";
var Hobby = "style-module--Hobby--08953";
var style_module_Icon = "style-module--Icon--e8b0f";

;// CONCATENATED MODULE: ./src/sections/Hobbies/index.tsx
function HobbiesSection(props){var _data$button$initiall;const response=data_useLocalDataSource();const data=response.allHobbiesJson.sections[0];const shouldShowButton=data.button.visible!==false;const initiallyShownHobbies=(_data$button$initiall=data.button.initiallyShownHobbies)!==null&&_data$button$initiall!==void 0?_data$button$initiall:5;const[shownHobbies,setShownHobbies]=external_D_localRepos_simon_currie_node_modules_react_index_js_default().useState(shouldShowButton?initiallyShownHobbies:data.hobbies.length);function loadMoreHandler(){setShownHobbies(data.hobbies.length);}return/*#__PURE__*/external_D_localRepos_simon_currie_node_modules_react_index_js_default().createElement(gatsby_theme_portfolio_minimal/* Animation */.X5,{type:"fadeUp"},/*#__PURE__*/external_D_localRepos_simon_currie_node_modules_react_index_js_default().createElement(gatsby_theme_portfolio_minimal/* Section */.wn,{anchor:props.sectionId,heading:props.heading},/*#__PURE__*/external_D_localRepos_simon_currie_node_modules_react_index_js_default().createElement("div",{className:Hobbies},data.hobbies.slice(0,shownHobbies).map((hobby,key)=>{return/*#__PURE__*/external_D_localRepos_simon_currie_node_modules_react_index_js_default().createElement(gatsby_theme_portfolio_minimal/* Animation */.X5,{key:key,className:Hobby,type:"scaleIn",delay:key*100},hobby.image.src&&/*#__PURE__*/external_D_localRepos_simon_currie_node_modules_react_index_js_default().createElement(gatsby_image_module/* GatsbyImage */.mV,{image:hobby.image.src.childImageSharp.gatsbyImageData,className:style_module_Icon,alt:hobby.image.alt||`Hobby ${hobby.label}`}),' ',hobby.label);}),shouldShowButton&&shownHobbies<data.hobbies.length&&/*#__PURE__*/external_D_localRepos_simon_currie_node_modules_react_index_js_default().createElement(gatsby_theme_portfolio_minimal/* Animation */.X5,{type:"scaleIn",delay:(shownHobbies+1)*100},/*#__PURE__*/external_D_localRepos_simon_currie_node_modules_react_index_js_default().createElement(Button/* Button */.$,{type:Button/* ButtonType */.V.BUTTON,onClickHandler:loadMoreHandler,label:data.button.label})))));}
;// CONCATENATED MODULE: ./src/pages/index.js
function IndexPage(){return/*#__PURE__*/external_D_localRepos_simon_currie_node_modules_react_index_js_default().createElement((external_D_localRepos_simon_currie_node_modules_react_index_js_default()).Fragment,null,/*#__PURE__*/external_D_localRepos_simon_currie_node_modules_react_index_js_default().createElement(gatsby_theme_portfolio_minimal/* Seo */.G$,{title:"Simon Currie Developer Portfolio Personal Blog"}),/*#__PURE__*/external_D_localRepos_simon_currie_node_modules_react_index_js_default().createElement(gatsby_theme_portfolio_minimal/* Page */.YW,{useSplashScreenAnimation:true},/*#__PURE__*/external_D_localRepos_simon_currie_node_modules_react_index_js_default().createElement(gatsby_theme_portfolio_minimal/* HeroSection */.KE,{sectionId:"hero"}),/*#__PURE__*/external_D_localRepos_simon_currie_node_modules_react_index_js_default().createElement(gatsby_theme_portfolio_minimal/* ArticlesSection */.rB,{sectionId:"articles",heading:"Latest Blog Posts",sources:['Blog']}),/*#__PURE__*/external_D_localRepos_simon_currie_node_modules_react_index_js_default().createElement(gatsby_theme_portfolio_minimal/* AboutSection */.nr,{sectionId:"about",heading:"About Me"}),/*#__PURE__*/external_D_localRepos_simon_currie_node_modules_react_index_js_default().createElement(SkillsSection,{sectionId:"skills",heading:"What I Do"}),/*#__PURE__*/external_D_localRepos_simon_currie_node_modules_react_index_js_default().createElement(gatsby_theme_portfolio_minimal/* InterestsSection */.fW,{sectionId:"interests",heading:"What I'm Passionate About"}),/*#__PURE__*/external_D_localRepos_simon_currie_node_modules_react_index_js_default().createElement(HobbiesSection,{sectionId:"hobbies",heading:"How I Relax"}),/*#__PURE__*/external_D_localRepos_simon_currie_node_modules_react_index_js_default().createElement(gatsby_theme_portfolio_minimal/* ProjectsSection */.YE,{sectionId:"projects",heading:"Recent Projects"}),/*#__PURE__*/external_D_localRepos_simon_currie_node_modules_react_index_js_default().createElement(gatsby_theme_portfolio_minimal/* ContactSection */.cy,{sectionId:"contact",heading:"Contact Me"})));}

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map