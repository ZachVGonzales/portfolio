import React from 'react';
import EducationSection from '../../components/resume/EducationSection';
import ExperienceSection from '../../components/resume/ExperienceSection';
import SkillsSection from '../../components/resume/SkillSection';
import InvolvementSection from '../../components/resume/InvolvementSection';
import { educationData } from '@/data/eductationData';
import { experienceData } from '@/data/experienceData';
import { skills } from '@/data/skillsData';
import { involvements } from '@/data/involvementData';
import styles from './resume.module.css';

const ResumePage: React.FC = () => (
  <div className={styles.resumeContainer}>
    <h1 className={styles.pageTitle}>Resume</h1>
    <EducationSection education={educationData} />
    <ExperienceSection experiences={experienceData} />
    <SkillsSection skills={skills.skills} />
    <InvolvementSection involvements={involvements} />
  </div>
);

export default ResumePage;