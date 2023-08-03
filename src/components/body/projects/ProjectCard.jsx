import React from 'react';
import './project-card.css'


const ProjectCard = ({ project }) => {
  return <div className='project-card'>
    <div className="project-info">
      <label className='project-title'>{project.title}</label>
      <div className="project-links">
        {project.demo && (<a className='project-link' href={project.demo}>
          <div className='link-button'>
            <i class="fi fi-rr-globe"></i>Link
          </div>
        </a>)}
        {project.github && (<a className='project-link' href={project.github}>
          <div className='link-button'>
            <i class="devicon-github-original"></i>github
          </div>
        </a>)}
      </div>
      <div className="project-about">
        <p>{project.about}</p>
      </div>
      <div className="project-tags">
        {project.tags.map((tag) => {
          return (
            <label className='tag'>{tag}</label>
          )
        })}
      </div>
    </div>
    <img src={project.ima} alt='project-card image' className='project-photo' />
  </div>;
};
export default ProjectCard;
