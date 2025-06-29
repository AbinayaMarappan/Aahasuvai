import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import slider1 from '@/assets/Slider1.jpg';
import slider2 from '@/assets/Slider4.jpg';
import slider3 from '@/assets/Slider5.jpg';

import leaf1 from '@/assets/leaf1.jpg';
import leaf2 from '@/assets/leaf2.avif';
import leaf3 from '@/assets/leaf3.jpeg';


const images = [slider1, slider2, slider3];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirst = currentIndex === 0;
    const newIndex = isFirst ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLast = currentIndex === images.length - 1;
    const newIndex = isLast ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
      />

      {/* Overlay */}
      <div className="w-full h-full object-cover"></div>

      {/* Arrows */}
      <div className="absolute z-20 inset-0 flex items-center justify-between px-6">
        <button
          onClick={goToPrevious}
          className="text-white text-3xl p-3 bg-black bg-opacity-0 rounded-full hover:bg-opacity-60 transition"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={goToNext}
          className="text-white text-3xl p-3 bg-black bg-opacity-0 rounded-full hover:bg-opacity-60 transition"
        >
          <FaArrowRight />
        </button>
      </div>

     {/* Animated Floating Leaves */}
     {/*
      <div className="absolute top-24 left-10 animate-float">
        <img
          src="leaf1"
          alt="Leaf 1"
          className="w-12 h-12 opacity-20"30
        />
      </div>
      <div className="absolute bottom-28 right-12 animate-float delay-1000">
        <img
          src="leaf2"
          alt="Leaf 2"
          className="w-16 h-16 opacity-20"
        />
      </div>
      <div className="absolute top-40 right-40 animate-float delay-2000">
        <img
          src="leaf3"
          alt="Leaf 3"
          className="w-10 h-10 opacity-20"
        />
      </div> */}
    </section>
  );
}
