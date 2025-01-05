export interface Project {
  icon: string;
  suit: string;
  title: string;
  description: string;
  link: string;
}

export const projects: Project[] = [
  {
    icon: "/construction.png",
    suit: "/spade.svg",
    title: "AI Assistant",
    description: "Current development for the FOCUS learning AI assistant",
    link: "https://github.com/ZachVGonzales/VISION-chatbot"
  },

  {
    icon: "/portfolio.png",
    suit: "/heart.svg",
    title: "Web Portfolio",
    description: "A web portfolio for my resume, projects and other ideas.",
    link: "https://github.com/ZachVGonzales/portfolio"
  },

  {
    icon: "/MLP.png",
    suit: "/club.svg",
    title: "MLP NN",
    description: "high school research project: created a neural network in java from scratch.",
    link: "https://github.com/ZachVGonzales/MLP_NN_ResearchProj"
  },

  {
    icon: "/stewart.png",
    suit: "/club.svg",
    title: "Stewart Platform",
    description: "arduino code utilizing inverse kinematics in the form of a PID equation to make a stewart platform balance a ball.",
    link: "https://github.com/ZachVGonzales/Stewart_Platform"
  },

  {
    icon: "/world.png",
    suit: "/diamond.svg",
    title: "Virtual World",
    description: "Java virtual world used to learn and demonstrate ability for OOP techniques.",
    link: "https://github.com/ZachVGonzales/Virtual_World"
  },

  {
    icon: "/tar.jpg",
    suit: "/heart.svg",
    title: "My Tar",
    description: "my own implementation of the program tar in ANSI C.",
    link: "https://github.com/ZachVGonzales/myTar"
  },

  {
    icon: "/recipe.png",
    suit: "/spade.svg",
    title: "Fridge To Fork",
    description: "A java app that recommends recipes based on what ingredients users have.",
    link: "https://github.com/ZachVGonzales/Recipe-Recomender"
  },


  {
    icon: "/MCU.png",
    suit: "/diamond.svg",
    title: "OTTER MCU",
    description: "My implementation / design for the OTTER MCU",
    link: "https://github.com/ZachVGonzales/OTTER"
  },

  {
    icon: "/puzzle.png",
    suit: "/spade.svg",
    title: "AI Train Module",
    description: "Interactive UI for annotation of PDF/Word documents specifically for training HuggingFace transformer models.",
    link: "https://github.com/ZachVGonzales/Integrated-AI-Training-Module"
  },
]