export interface Experience {
  company: string;
  position: string;
  duration: string;
  responsibilities: string[];
}

export const experienceData: Experience[] =  [
  {
    company: "Focus Learning Corporation",
    position: "Software Engineering Intern",
    duration: "04~17~2024  //  present",
    responsibilities: [
      "Designed and implemented training/evaluation units for LayoutLMv3 architecture",
      "Trained LayoutLMv3 model for named entity recognition on PDF and Word documents",
      "Trained and Implemented BERT and T5 models for various NLP tasks such as text analysis and sequence generation",
      "Designed and implemented post processing of data for storage in a MySQL based system",
      "Collaborated with team members to gather feedback and improve an Internal tool of my creation",
      "Participated in Agile style team standups and sprints",
      "Gained experience using/working with Python, React, MySQL",
    ]
  }
  
]