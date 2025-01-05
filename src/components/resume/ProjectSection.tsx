import React from 'react';
import { Project } from '../../data/projectData';
import styles from '../../app/resume/resume.module.css';

const ProjectsSection: React.FC<{ projects: Project[] }> = ({ projects }) => (
  <section className={styles.section}>
    <h2 className={styles.sectionTitle}>Projects</h2>
    {projects.map((project, index) => (
      <div key={index}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
      </div>
    ))}
  </section>
);

export default ProjectsSection;