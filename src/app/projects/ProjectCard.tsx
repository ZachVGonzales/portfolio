"use client";

import React, { useState } from "react";
import styles from "./projectcard.module.css";

type ProjectCardProps = {
  index: number;
  isExpanded: boolean;
  column: number;
  row: number;
  deckLeftOffset: string;
  deckTopOffset: string;
  title: string;
  icon: string;
  suit: string;
  description: string;
  link: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  index,
  isExpanded,
  column,
  row,
  deckLeftOffset,
  deckTopOffset,
  title,
  icon,
  suit,
  description,
  link,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isExpanded) {
      event.stopPropagation();
      setIsFlipped(!isFlipped)
    }
  }

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
      onClick={handleClick}
    >
      <div
        className={`${styles.cardInner} ${isFlipped ? styles.isFlipped : ""}`}
      >
        <div className={styles.cardFront}>
          <div className={styles.cardInfoContainer}>
            <img
              className={styles.cardIcon}
              src={icon}
              alt="Icon"
            />
            <h1 className={styles.cardTitle}>{title}</h1>
          </div>
          <img
            className={styles.suitTopLeft}
            src={suit}
            alt="Icon"
          />
          <img
            className={styles.suitBottomRight}
            src={suit}
            alt="Icon"
          />
        </div>
        <div className={styles.cardBack}>
          <p className={styles.cardDescription}>
            {description}
            <a href={link} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
              Github
            </a>
          </p>
          <img
            className={styles.suitTopLeft}
            src={suit}
            alt="Icon"
          />
          <img
            className={styles.suitBottomRight}
            src={suit}
            alt="Icon"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;