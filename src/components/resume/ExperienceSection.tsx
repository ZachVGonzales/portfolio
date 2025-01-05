import React from 'react';
import { Experience } from '../../data/experienceData';
import styles from '../../app/resume/resume.module.css';

const ExperienceSection: React.FC<{ experiences: Experience[] }> = ({ experiences }) => (
  <section className={styles.section}>
    <h2 className={styles.sectionTitle}>Professional Experience</h2>
    {experiences.map((exp, index) => (
      <div key={index}>
        <h3>{exp.position} at {exp.company}</h3>
        <p>{exp.duration}</p>
        <ul>
          {exp.responsibilities.map((responsibility, idx) => (
            <li key={idx}>{responsibility}</li>
          ))}
        </ul>
      </div>
    ))}
  </section>
);

export default ExperienceSection;