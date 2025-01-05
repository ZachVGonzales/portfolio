import React from 'react';
import styles from '../../app/resume/resume.module.css';

const SkillsSection: React.FC<{ skills: string[] }> = ({ skills }) => (
  <section className={styles.section}>
    <h2 className={styles.sectionTitle}>Skills</h2>
    <ul>
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  </section>
);

export default SkillsSection;