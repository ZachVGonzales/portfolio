import React from 'react';
import { Education } from '../../data/eductationData';
import styles from '../../app/resume/resume.module.css';

const EducationSection: React.FC<{ education: Education }> = ({ education }) => (
  <section className={styles.section}>
    <h2 className={styles.sectionTitle}>Education</h2>
    <h3>{education.degree}</h3>
    <p>{education.institution}</p>
    <p>{education.gpa}</p>
    <p>{education.duration}</p>
    <ul>
      {education.coursework.map((course, index) => (
        <li key={index}>{course}</li>
      ))}
    </ul>
  </section>
);

export default EducationSection;