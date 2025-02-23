"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Arrow icons

const images = ["/image1.png", "/image2.jpg", "/image3.jpg"]; // Add your image paths here

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the previous image
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Function to go to the next image
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="flex flex-col md:flex-row items-center justify-between mx-auto px-8 pt-2 ">
      {/* Left Side - Text Content */}
      <div className="md:w-1/2 text-center md:text-left space-y-4">
        <h1 className="text-4xl font-bold text-blue-600">Welcome to SLCR</h1>
        <p className="text-gray-700 text-lg text-justify">
          Smart Laboratory on Clean Rivers in Varanasi (SLCR) is the joint
          initiative by the Hon’ble Prime Minister of India, H.E. Shri. Narendra
          Modi and the Prime Minister of Denmark, H.E. Ms Mette Frederiksen. A
          Memorandum of Understanding (MoU) was signed between the Ministry of
          Jal Shakti and the Danish Environment Ministry as a broad-based
          framework in the field of Water Resources Development and Management
          including the SLCR initiative.
        </p>
      </div>

      {/* Right Side - Image Slider */}
      <div className="md:w-1/2 flex items-center justify-center mt-6 md:mt-0 p-4">
        {/* Image Display */}
        <div className="w-[800px] h-[400px] rounded-lg shadow-lg relative">
          <Image
            src={images[currentIndex]}
            alt="SLCR College"
            width={800}
            height={400}
            className="w-full h-full object-cover transition-all duration-500 rounded-lg"
          />

          {/* Previous Button (Left) */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full shadow-md hover:bg-black/70 transition"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Next Button (Right) */}
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full shadow-md hover:bg-black/70 transition"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
