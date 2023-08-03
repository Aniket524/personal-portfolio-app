import React from 'react';
import { projectData } from '../../common/data/projects';
import Separator from '../../common/separater/Separator';
import ProjectCard from './ProjectCard';
import "./projects.css"

const Projects = () => {
  const data=projectData;
  return <div className='projects'>
    <Separator />
    <label className='section-title'>projects</label>
    <div>
      {data.map((project)=>{
        return <ProjectCard project={project}/>;
      })}
    </div>
  </div>;
};

export default Projects;
