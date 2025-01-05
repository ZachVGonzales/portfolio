"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./projects.module.css";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projectData"

export default function Projects() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [columns, setColumns] = useState(4); // Default to 4 columns
  const [deckPosition, setDeckPosition] = useState({ top: 0, left: 0 });
  const deckRef = useRef<HTMLDivElement>(null);

  const toggleView = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const updateColumns = () => {
      const cardWidth = 300; // Width of a card in pixels
      const viewportWidth = window.innerWidth;
      const cols = Math.floor(viewportWidth / cardWidth); // Calculate columns based on viewport width
      setColumns(cols);
    };

    const updateDeckPosition = () => {
      if (deckRef.current) {
        const rect = deckRef.current.getBoundingClientRect();
        setDeckPosition({ top: rect.top, left: rect.left });
      }
    };

    updateColumns(); // Initial column calculation
    updateDeckPosition(); // Initial deck position calculation

    window.addEventListener("resize", () => {
      updateColumns();
      updateDeckPosition();
    });

    return () =>
      window.removeEventListener("resize", () => {
        updateColumns();
        updateDeckPosition();
      });
  }, []);

  return (
    <div className={styles.container}>
      <div
        className={`${styles.deckPlaceholder}`}
        onClick={isExpanded ? toggleView : undefined}
      >
        <div
          className={styles.deck}
          onClick={!isExpanded ? toggleView : undefined}
          ref={deckRef} // Reference to the deck DOM element
        >
          {projects.map((project, i, array) => {
            const index = isExpanded ? array.length - 1 - i : i; // Reverse order for grid layout
            const column = isExpanded ? index % columns : 0; // Columns for grid layout
            const row = isExpanded ? Math.floor(index / columns) : 0; // Rows for grid layout
            return (
              <ProjectCard
                key={i}
                index={index}
                isExpanded={isExpanded}
                column={column}
                row={row}
                deckLeftOffset={`${deckPosition.left - 155}px`}
                deckTopOffset={`${deckPosition.top + 275}px`}
                title={project.title}
                icon={project.icon}
                suit={project.suit}
                description={project.description}
                link={project.link}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}