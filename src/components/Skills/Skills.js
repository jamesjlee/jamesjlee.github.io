import React, { forwardRef } from "react";
import SkillTree from "../SkillTree/SkillTree";
import "./skills.scss";

const Skills = forwardRef((props, ref) => {
  return (
    <section className="skills" ref={ref}>
      <div className="description">
        Professional Development Skills (Comfort Levels ranging from 1-5)
      </div>
      <SkillTree />
    </section>
  );
});

export default Skills;
