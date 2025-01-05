export interface Education {
  institution: string;
  degree: string;
  gpa: string;
  duration: string;
  coursework: string[];
}

export const educationData: Education = {
  institution: "California Polytechnic State University - San Luis Obispo",
  degree: "B.S - Computer Engineering",
  gpa: "GPA: 3.9",
  duration: "09-23-2022  //  06-15-2026",
  coursework: [
    "Data Structures",
    "OOP",
    "Discrete Structures",
    "Algorithms",
    "Systems Programming",
    "Software Engineering",
  ],
};