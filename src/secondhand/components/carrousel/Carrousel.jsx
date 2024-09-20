import { useState } from 'react';
import styles from './Carrousel.module.css'; 
import ProductCard from '@components/cards/productCard/ProductCard';

const Carrusel = ({ prendas, visibleItems = 3 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? prendas.length - visibleItems : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= prendas.length - visibleItems ? 0 : prevIndex + 1
    );
  };

  // Slice the prendas array to get the visible items
  const visiblePrendas = prendas.slice(currentIndex, currentIndex + visibleItems);

  return (
    <div className={styles.main}>
    <h2 className={styles.title}>Recomendados</h2>
    <div className={styles.carruselContainer}>
      <button className={styles.navButton} onClick={handlePrev}>‹</button>
      <div className={styles.sliderContainer}>
        {visiblePrendas.map((prenda) => (
          <ProductCard
            key={prenda.id}
            className={styles.sliderItem}
            product={prenda}
          />
        ))}
      </div>
      <button className={styles.navButton} onClick={handleNext}>›</button>
    </div>
    </div>
  );
};

export default Carrusel;
