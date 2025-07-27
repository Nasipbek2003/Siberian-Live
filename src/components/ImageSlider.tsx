import React, { useEffect, useState } from 'react';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';
import image6 from '../assets/image6.png';

const slides = [
  {
    title: 'Спорт и ЗОЖ',
    image: image1,
  },
  {
    title: 'Наука и производство',
    image: image2,
  },
  {
    title: 'Мы из Сибири',
    image: image3,
  },
  {
    title: 'Помощь природе',
    image: image4,
  },
  {
    title: 'Экоподход',
    image: image5,
  },
  {
    title: 'Корпоративное обучение',
    image: image6,
  },
];

const ImageSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleTabClick = (idx: number) => {
    setCurrent(idx);
  };

  return (
    <div className="w-full flex flex-col items-center my-8">
      {/* Заголовки (табы) */}
      <div className="flex flex-wrap justify-center mb-6 gap-2">
        {slides.map((slide, idx) => (
          <button
            key={slide.title}
            onClick={() => handleTabClick(idx)}
            className={`px-5 py-2 rounded-full font-medium transition-colors ${
              idx === current
                ? 'bg-emerald-100 text-emerald-700 shadow'
                : 'bg-gray-100 text-gray-600 hover:bg-emerald-50'
            }`}
          >
            {slide.title}
          </button>
        ))}
      </div>
      {/* Слайд */}
      <div className="relative w-full max-w-6xl h-[420px] rounded-lg overflow-hidden shadow-lg">
        <img
          src={slides[current].image}
          alt={slides[current].title}
          className="w-full h-full object-cover transition-all duration-700"
        />
        {/* Индикаторы */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, idx) => (
            <span
              key={idx}
              className={`w-3 h-3 rounded-full ${idx === current ? 'bg-emerald-600' : 'bg-gray-300'} block`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider; 