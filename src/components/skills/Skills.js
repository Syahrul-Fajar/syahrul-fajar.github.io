// src/components/Skills/Skills.js

import React, { useContext } from 'react'; // <-- PASTIKAN useContext DIIMPOR
import Marquee from 'react-fast-marquee';
import { skillsData } from '../../utils/data/skills';
import { skillsImage } from '../../utils/skill-image';
import { ThemeContext } from "../theme/ThemeProvider";
import './Skills.css';

function Skills() {
  const { theme } = useContext(ThemeContext); // <-- PASTIKAN BARIS INI ADA

  return (
    // PASTIKAN ANDA MENERAPKAN {theme} DI CLASSNAME
    <section id="skills" className={`skills-section ${theme}`}>
      <div className="skills-title-container">
        <span className="line"></span>
        <span className="title-text">Skills</span>
        <span className="line"></span>
      </div>

      <div className="marquee-container">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => (
            <div className="skill-card" key={id}>
              <div className="skill-card-inner">
                <div className="skill-icon-wrapper">
                  <img
                    src={skillsImage(skill)}
                    alt={skill}
                    className="skill-icon"
                  />
                </div>
                <p className="skill-name">{skill}</p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Skills;