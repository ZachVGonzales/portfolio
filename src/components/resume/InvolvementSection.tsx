import React from 'react';
import { Involvement } from '../../data/involvementData';
import styles from '../../app/resume/resume.module.css';

const InvolvementSection: React.FC<{ involvements: Involvement[] }> = ({ involvements }) => (
  <section className={styles.section}>
    <h2 className={styles.sectionTitle}>Involvement</h2>
    {involvements.map((involvement, index) => (
      <div key={index}>
        <h3>{involvement.name}</h3>
        <ul>
          {involvement.responsibilities.map((responsibility, idx) => (
            <li key={idx}>{responsibility}</li>
          ))}
        </ul>
      </div>
    ))}
  </section>
);

export default InvolvementSection;