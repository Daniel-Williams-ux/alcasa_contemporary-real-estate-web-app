import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Residences = () => {
  const residences = [
    {
      name: "Accolade",
      images: [
        "/alcasa1.jpg",
        "/alcasa2.jpg",
        "/alcasa3.jpg",
        "/alcasa4.jpg",
        "/alcasa6.jpg",
        "/alcasa7.jpg",
        "/alcasa8.jpg",
      ],
      description:
        "Experience unparalleled luxury and sophistication in the heart of Lagos with Accolade residences. Each residence is meticulously crafted to reflect timeless elegance and contemporary design, offering a sanctuary for discerning homeowners.",
    },
    {
      name: "Dawn",
      images: ["/dawn-res.jpg", "/dawn.jpg", "/dawn2.jpg"],
      description:
        "Embrace the dawn of a new era in luxury living with Dawn residences. Nestled amidst lush landscapes and serene surroundings, Dawn residences offer a harmonious blend of nature and modern architecture, creating an idyllic retreat for those seeking tranquility.",
    },
    {
      name: "Spectre",
      images: ["/specter.jpg", "/specter.jpg", "/specter.jpg"],
      description:
        "Indulge in the extraordinary with Spectre residences. Designed to captivate the senses and inspire awe, each Spectre residence boasts innovative features and unparalleled craftsmanship, setting new standards for luxury living.",
    },
  ];

  const [currentResidenceIndex, setCurrentResidenceIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextResidence = () => {
    setCurrentResidenceIndex(
      (prevIndex) => (prevIndex + 1) % residences.length
    );
    setCurrentImageIndex(0);
  };

  const handlePrevResidence = () => {
    setCurrentResidenceIndex(
      (prevIndex) => (prevIndex - 1 + residences.length) % residences.length
    );
    setCurrentImageIndex(0);
  };

  const handleNextImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex + 1) % residences[currentResidenceIndex].images.length
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + residences[currentResidenceIndex].images.length) %
        residences[currentResidenceIndex].images.length
    );
  };

  const currentResidence = residences[currentResidenceIndex];
  const currentImage = currentResidence.images[currentImageIndex];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black-800 via-white to-black">
      <motion.div
        className="w-full max-w-4xl px-6 py-12 bg-white bg-opacity-80 rounded-lg shadow-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-8"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {currentResidence.name}
        </motion.h1>

        <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden shadow-lg">
          <motion.img
            src={currentImage}
            alt={currentResidence.name}
            className="w-full h-full object-cover"
            key={currentImageIndex}
            initial={{ opacity: 0.7, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
          <div className="absolute inset-0 flex justify-between items-center">
            <button
              onClick={handlePrevImage}
              className="text-white p-3 bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full transition duration-300 ml-4"
            >
              <FiChevronLeft size={30} />
            </button>
            <button
              onClick={handleNextImage}
              className="text-white p-3 bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full transition duration-300 mr-4"
            >
              <FiChevronRight size={30} />
            </button>
          </div>
        </div>

        <motion.div
          className="bg-gray-100 bg-opacity-90 p-6 rounded-lg shadow-inner"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-lg text-gray-700 leading-relaxed">
            {currentResidence.description}
          </p>
        </motion.div>

        <motion.div
          className="mt-8 flex justify-center space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {currentResidenceIndex > 0 && (
            <button
              onClick={handlePrevResidence}
              className="text-white py-2 px-4 rounded-full bg-indigo-500 hover:bg-indigo-600 transition duration-300"
            >
              Previous Residence
            </button>
          )}
          {currentResidenceIndex < residences.length - 1 && (
            <button
              onClick={handleNextResidence}
              className="text-white py-2 px-4 rounded-full bg-indigo-500 hover:bg-indigo-600 transition duration-300"
            >
              Next Residence
            </button>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Residences;