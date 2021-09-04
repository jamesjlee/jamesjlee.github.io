import React, { forwardRef } from "react";
import "./about.scss";
import me from "../../assets/me.jpg";

const About = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="about">
      <div className="container">
        <div>
          Welcome! My name is <b>James Lee</b> and
        </div>
        <div className="dot-container">
          <div className="dot-pulse"></div>
          <div className="dot-pulse"></div>
          <div className="dot-pulse"></div>
        </div>
      </div>
      <div>
        I'm a <b>Front-End Developer</b> who enjoys implementing hci focused
        designs.
      </div>
      <img src={me} alt="" />
    </section>
  );
});

export default About;
