import React from 'react';
import styles from './filmroll.module.css';

interface FilmRollProps {
  images: string[]; // Array of image URLs
  side: 'left' | 'right'; // Side of the screen
}

const FilmRoll: React.FC<FilmRollProps> = ({ images, side }) => {
  const generateSprocketHoles = (count: number) => {
    return Array.from({ length: count }).map((_, index) => (
      <div key={index} className={styles.sprocketHole}></div>
    ));
  };

  return (
    <div className={`${styles.filmRoll} ${styles[side]}`}>
      <div className={styles.imageContainer}>
        {images.map((image, index) => (
          <div className={styles.imageWithHoles} key={image}>
            <div className={styles.sprocketHoles}>{generateSprocketHoles(4)}</div>
            <img src={image} alt={`Film Roll Image ${index + 1}`} className={styles.image} key={index} />
            <div className={styles.sprocketHoles}>{generateSprocketHoles(4)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilmRoll;