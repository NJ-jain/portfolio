import React from 'react';
import './SkillsCircle.css';

const SkillsCircle = () => {
  const skills = [
    'HTML', 'CSS', 'JavaScript', 'ReactJS', 'Redux', 'MongoDB',
    'Express', 'Node.js', 'Angular', 'Next.js'
  ];

  const radius = 120; // Adjust the radius of the circle
  const angleStep = 360 / skills.length; // Angle between each skill

  return (
    <div className="skills-circle-container">
      <ul className="skills-circle" type="none">
        {skills.map((skill, index) => {

          return (
            <li>
                {skill}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SkillsCircle;
