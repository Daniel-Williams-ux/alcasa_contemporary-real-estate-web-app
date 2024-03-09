import React, { useState, useEffect } from 'react';

function AccoladeExplore() {

  const [typedTexts, setTypedTexts] = useState([
    '', // Initial text for section 1
    '', // Initial text for section 2
    '', // Initial text for section 3
    '', // Initial text for section 4
    '', // Initial text for section 5
    '', // Initial text for section 6
    '', // Initial text for section 7
    '', // Initial text for section 8
  ]);

  const textToType = [
   `
   It's about crafting an enduring legacy—a sanctuary of warmth and intimacy for loved ones, a timeless gift that the next generation will cherish and take pride in. Welcome to Accolade where luxury knows no compromise, tailored for the 1% who seek not just a home but an unparalleled legacy.
   `,
  `Cheers to the visionary trailblazers, the pace-setters, the game changers, narrative-shifters, the industry disruptors, and shakers. Here’s to the titans, legacy creators, global movers, conquerors, and architects of change who, against all odds, stood resilient and emerged triumphant. Here's to those who redefine success. Cheers to the relentless spirit of achievement. A timeless gift that the next generation will cherish and take pride in. Accolade was meticulously crafted to meet the aspirations of a discerning few—individuals in pursuit of a world-class residence that serves as a living testament to their success and triumph.`,
    `A testament to Prestigious, timeless elegance that is unphased by the passing of time`,
    `Resilience of top-grade materials and fittings Complemented by cutting-edge construction methods`,
    `A nest of enduring warmth, intimate moments, and personalized comfort for cherished family and loved ones.`,
    `Seamless Living and heightened convenience through purposeful, refined cutting-edge technology`,
    `Indoor and outdoor spaces that exude class, elegance, and absolute luxury, ensuring a lifestyle beyond compare`,
    `Timeless - We handle everything on your behalf. Kick back, relax, and stay informed with real-time updates on your project from anywhere`
  ];

  useEffect(() => {
    const typingIntervals = textToType.map((text, index) => {
      let currentText = '';
      const interval = setInterval(() => {
        currentText += text[currentText.length];
        setTypedTexts(prevTypedTexts => {
          const newTypedTexts = [...prevTypedTexts];
          newTypedTexts[index] = currentText;
          return newTypedTexts;
        });
        if (currentText === text) clearInterval(interval);
      }, 20);
      return interval;
    });
    return () => {
      typingIntervals.forEach(interval => clearInterval(interval));
    };
  }, []); // empty dependency array ensures useEffect runs only once

  return (
    <div className="accolade-explore">
      {/* Section 1: Accolade */}
      <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${"/alcasa1.jpg"})` }}>
        <div className="absolute inset-0 flex flex-col justify-end items-center text-white bg-black bg-opacity-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-4 text-center font-mono">
              ACCOLADE
            </h2>
            <p className="text-white text-lg font-serif leading-relaxed mb-8 text-center">
              {typedTexts[0]}
            </p>
          </div>
        </div>
      </div>

      {/* Section : cheers */}
      <div className="relative bg-white bg-center h-screen">
        <div className="relative flex flex-col sm:flex-row justify-center items-center h-full">
          <div className="w-full sm:w-1/2 mb-8 sm:mb-0 order-2 sm:order-1">
            <img src="/cheers.jpg" alt="Timeless, world-class Architecture" className="object-cover w-full h-full" />
          </div>
          <div className="w-full sm:w-1/2 text-black bg-opacity-90 my-8 sm:my-0 order-1 sm:order-2">
            <div className="max-w-lg mx-auto px-6 text-center">
              <h2 className="text-4xl font-bold mb-4 font-mono">Timeless, world-class Architecture</h2>
              <p className="text-lg font-serif leading-relaxed mb-8">
                {typedTexts[1]}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Timeless, world-class Architecture */}
      <div className="relative bg-black bg-center h-screen">
        <div className="relative flex flex-col sm:flex-row justify-center items-center h-full">
          <div className="w-full sm:w-1/2 mb-8 sm:mb-0 order-2 sm:order-1">
            <img src="/timeless.jpg" alt="Timeless, world-class Architecture" className="object-cover w-full h-full" />
          </div>
          <div className="w-full sm:w-1/2 text-white bg-opacity-90 my-8 sm:my-0 order-1 sm:order-2">
            <div className="max-w-lg mx-auto px-6 text-center">
              <h2 className="text-4xl text-red-600 font-bold mb-4 font-mono">Timeless, world-class Architecture</h2>
              <p className="text-lg font-serif leading-relaxed mb-8">
                {typedTexts[2]}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Climate Resilience */}
      <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${"/climate.jpg"})` }}>
        <div className="absolute inset-0 flex flex-col justify-end items-center text-white bg-black bg-opacity-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-4 text-center font-mono">
              Climate Resilience
            </h2>
            <p className="text-white text-lg font-serif leading-relaxed mb-8 text-center">
              {typedTexts[3]}
            </p>
          </div>
        </div>
      </div>

      {/* Section 4: Family Oasis */}
      <div className="relative bg-gradient-to-r from-green-600 via-green-700 to-teal-800 bg-center h-screen">
        <div className="relative flex flex-col sm:flex-row justify-center items-center h-full">
          <div className="w-full sm:w-1/2 mb-8 sm:mb-0 order-2">
            <img src="/oasis.jpg" alt="Family Oasis" className="object-cover w-full h-full" />
          </div>
          <div className="w-full sm:w-1/2 text-white bg-opacity-90 my-8 sm:my-0 order-1">
            <div className="max-w-lg mx-auto px-6 text-center">
              <h2 className="text-4xl text-red-600 font-bold mb-4 font-mono">Family Oasis</h2>
              <p className="text-lg font-serif leading-relaxed mb-8">
                {typedTexts[4]}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 5: Convenience through Smart Technology */}
      <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${"/smart.jpg"})` }}>
        <div className="absolute inset-0 flex flex-col justify-end items-center text-white bg-black bg-opacity-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-4 text-center font-mono">
              Convenience through Smart Technology
            </h2>
            <p className="text-white text-lg font-serif leading-relaxed mb-8 text-center">
              {typedTexts[5]}
            </p>
          </div>
        </div>
      </div>

      {/* Section 6: Refined Luxury living Stress-free */}
      <div className="relative bg-gradient-to-r from-yellow-600 via-yellow-700 to-orange-800 bg-center h-screen">
        <div className="relative flex flex-col sm:flex-row justify-center items-center h-full">
          <div className="w-full sm:w-1/2 mb-8 sm:mb-0 order-2 sm:order-1">
            <img src="/alcasa6.jpg" alt="Refined Luxury living Stress-free" className="object-cover w-full h-full" />
          </div>
          <div className="w-full sm:w-1/2 text-white bg-opacity-90 my-8 sm:my-0 order-1 sm:order-2">
            <div className="max-w-lg mx-auto px-6 text-center">
              <h2 className="text-4xl text-black font-bold mb-4 font-mono">Refined Luxury living Stress-free</h2>
              <p className="text-lg font-serif leading-relaxed mb-8">
                {typedTexts[6]}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 7: Worry-free development */}
      <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${"/alcasa7.jpg"})` }}>
        <div className="absolute inset-0 flex flex-col justify-end items-center text-white bg-black bg-opacity-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-4 text-center font-mono">
              Worry-free development
            </h2>
            <p className="text-white text-lg font-serif leading-relaxed mb-8 text-center">
              {typedTexts[7]}
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default AccoladeExplore;
