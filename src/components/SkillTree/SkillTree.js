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
    level: 5,
    children: [
      { name: "Redux", level: 4 },
      { name: "Hooks", level: 4 },
    ],
  },
];

const SkillTree = () => {
  return (
    <div className="skill-tree">
      {skills.map((skill, index) => {
        return (
          <div key={index} className="container">
            <div className="skill-wrapper">
              <h3 className="description">Core</h3>
              <div className="skill">
                <div className="name">{skill.name}</div>
                <div className="level">{skill.level}</div>
              </div>
            </div>
            <div className="subskill-container">
              {skill.children.map((leafSkill, leafSkillIndex) => {
                return (
                  <div className="subskill-wrapper">
                    <h3 className="description">Sub</h3>
                    <div key={leafSkillIndex} className="subskill">
                      <div className="name">{leafSkill.name}</div>
                      <div className="level">{leafSkill.level}</div>
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
