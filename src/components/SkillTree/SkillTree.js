import React from "react";
import "./skillTree.scss";

const skills = [
  {
    name: "HTML/CSS",
    level: 4,
    children: [
      { name: "SASS/SCSS", level: 4 },
      { name: "css-in-js", level: 2 },
    ],
  },
  {
    name: "JavaScript",
    level: 3,
    children: [
      { name: "Node.js", level: 3 },
      { name: "GraphQL", level: 1 },
    ],
  },
  {
    name: "React",
    level: 4,
    children: [
      { name: "Redux", level: 4 },
      { name: "Hooks", level: 3 },
    ],
  },
];

const SkillTree = () => {
  const stars = (level) => {
    switch (level) {
      case 1:
        return "⭐";
      case 2:
        return "⭐⭐";
      case 3:
        return "⭐⭐⭐";
      case 4:
        return "⭐⭐⭐⭐";
      case 5:
        return "⭐⭐⭐⭐⭐";
    }
  };

  return (
    <div className="skill-tree">
      {skills.map((skill, index) => {
        return (
          <div key={index} className="container">
            <div className="skill-wrapper">
              <div className="skill">
                <div className="name">{skill.name}</div>
                <div className="level">{stars(skill.level)}</div>
              </div>
            </div>
            <div className="subskill-container">
              {skill.children.map((leafSkill, leafSkillIndex) => {
                return (
                  <div className="subskill-wrapper" key={leafSkillIndex}>
                    <div className="subskill">
                      <div className="name">{leafSkill.name}</div>
                      <div className="level">{stars(leafSkill.level)}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillTree;
