import { useEffect, useState } from 'react';
import './homeimg.css';

const HomeImg = () => {
  const Cards = [
    { image: 'home6.jpg' },
    { video: 'home video.mp4' },
    { image: 'home img.jpg' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % Cards.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [Cards.length]);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Cards.length) % Cards.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Cards.length);
  };

  const currentItem = Cards[currentIndex];

  return (
    <div className="heroimg-container">
      <div className="home-wallpaper fade">
        {currentItem.video ? (
          <video
            key={currentItem.video}
            src={`/${currentItem.video}`}
            autoPlay
            loop
            muted
            playsInline
            className="home-element fade-in"
            onContextMenu={(e) => e.preventDefault()}
          />
        ) : (
          <img
            key={currentItem.image}
            src={`/${currentItem.image}`}
            alt="Slide"
            className="home-element fade-in"
          />
        )}

        {/* Arrow Buttons */}
        <button className="arrow-btn left" onClick={goToPrev}>&#10094;</button>
        <button className="arrow-btn right" onClick={goToNext}>&#10095;</button>
      </div>
    </div>
  );
};

export default HomeImg;
