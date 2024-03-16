import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Residences = () => {
  const residences = [
    {
      name: "Accolade",
      images: ["/alcasa1.jpg", "/alcasa2.jpg", "/alcasa3.jpg", "/alcasa4.jpg", "/alcasa6.jpg", "/alcasa7.jpg", "/alcasa8.jpg"],
      description: "Experience unparalleled luxury and sophistication in the heart of Lagos with Accolade residences. Each residence is meticulously crafted to reflect timeless elegance and contemporary design, offering a sanctuary for discerning homeowners.",
    },
    {
      name: "Dawn",
      images: ["/dawn1.jpg", "/dawn2.jpg", "/dawn3.jpg"],
      description: "Embrace the dawn of a new era in luxury living with Dawn residences. Nestled amidst lush landscapes and serene surroundings, Dawn residences offer a harmonious blend of nature and modern architecture, creating an idyllic retreat for those seeking tranquility.",
    },
    {
      name: "Spectre",
      images: ["/spectre1.jpg", "/spectre2.jpg", "/spectre3.jpg"],
      description: "Indulge in the extraordinary with Spectre residences. Designed to captivate the senses and inspire awe, each Spectre residence boasts innovative features and unparalleled craftsmanship, setting new standards for luxury living.",
    },
  ];

  const [currentResidenceIndex, setCurrentResidenceIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextResidence = () => {
    setCurrentResidenceIndex((prevIndex) => (prevIndex + 1) % residences.length);
    setCurrentImageIndex(0);
  };

  const handlePrevResidence = () => {
    setCurrentResidenceIndex((prevIndex) => (prevIndex - 1 + residences.length) % residences.length);
    setCurrentImageIndex(0);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % residences[currentResidenceIndex].images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + residences[currentResidenceIndex].images.length) % residences[currentResidenceIndex].images.length);
  };

  const currentResidence = residences[currentResidenceIndex];
  const currentImage = currentResidence.images[currentImageIndex];

  return (
    <div className="w-screen h-screen flex justify-center items-center overflow-hidden">
      <div className="max-w-screen-xl w-full px-8 py-12 rounded-lg shadow-xl bg-black">
        <h1 className="text-4xl font-bold mb-8 text-formColor text-center">{currentResidence.name}</h1>
        <div className="relative w-full h-96 mb-6">
          <img src={currentImage} alt={currentResidence.name} className="w-full h-full object-cover rounded-t-lg" />
          <div className="absolute top-0 right-0 flex justify-between items-center h-full">
            {currentImageIndex > 0 && (
              <button onClick={handlePrevImage} className="text-white ml-4 p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75">
                <FiChevronLeft />
              </button>
            )}
            {currentImageIndex < currentResidence.images.length - 1 && (
              <button onClick={handleNextImage} className="text-white mr-4 p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75">
                <FiChevronRight />
              </button>
            )}
          </div>
        </div>
        <div className="p-6 bg-white rounded-lg mb-6">
          <p className="text-gray-700 mb-6">{currentResidence.description}</p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center"
        >
          {currentResidenceIndex > 0 && (
            <button onClick={handlePrevResidence} className="text-white py-2 px-6 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-300 mr-auto">
              Previous Residence
            </button>
          )}
          {currentResidenceIndex < residences.length - 1 && (
            <button onClick={handleNextResidence} className="text-white py-2 px-6 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-300 ml-auto">
              Next Residence
            </button>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Residences;
