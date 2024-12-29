"use client";

import React from "react";
import styles from "./projectcard.module.css";

type ProjectCardProps = {
  index: number;
  isExpanded: boolean;
  column: number;
  row: number;
  deckLeftOffset: string;
  deckTopOffset: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  index,
  isExpanded,
  column,
  row,
  deckLeftOffset,
  deckTopOffset,
}) => {
  return (
    <div
      className={`${styles.card} ${
        isExpanded ? styles.cardGrid : styles.cardDeck
      }`}
      style={{
        "--index": index,
        "--column": column,
        "--row": row,
        "--deck-left-offset": deckLeftOffset,
        "--deck-top-offset": deckTopOffset,
      } as React.CSSProperties}
    >
      <p>Project {index + 1}</p>
    </div>
  );
};

export default ProjectCard;