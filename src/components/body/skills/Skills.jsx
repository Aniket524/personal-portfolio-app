import React from 'react';
import "./skills.css"
import Separator from '../../common/separater/Separator'
import { SkillData } from '../../common/data/skills';
import SkillCard from './SkillCard';

const Skills = () => {
  const data = SkillData;
  return <div className='skills'>
    <Separator />
    <label className='section-title'>Skills</label>
    <div className="skills-container">
      {data.map((item)=>{
        return(
          <div className="skills-section">
            <label className='skills-section-title'>{item.type}</label>
            <div className="skills-list">
              {item.list.map((skill)=>{
                return(
                  <SkillCard skill={skill}/>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  </div>;
};

export default Skills;
