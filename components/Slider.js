import React, { useState } from 'react';
import image1 from '../assets/qwerty.jpg';
import image2 from '../assets/scale_1200.webp';
import image3 from '../assets/scale_2400.webp';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [image1, image2, image3];

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  
  const goToNextSlide = () => {
    const nextSlide = (currentSlide + 1) % images.length;
    setCurrentSlide(nextSlide);
  };
  
  const goToPrevSlide = () => {
    const prevSlide = (currentSlide - 1 + images.length) % images.length;
    setCurrentSlide(prevSlide);
  };

  return (
    <div>
      <button onClick={goToPrevSlide}>Назад</button>
      <img style={{width: '500px', height: '500px'}} src={images[currentSlide]} alt="Slide" />
      <button onClick={goToNextSlide}>Далее</button>
      <div>
        {images.map((image, index) => (
          <button key={index} onClick={() => goToSlide(index)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );

}
export default Slider;