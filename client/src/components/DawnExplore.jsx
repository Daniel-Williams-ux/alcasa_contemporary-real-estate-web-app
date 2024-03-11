import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function DawnExplore() {
  const [typedTexts, setTypedTexts] = useState([
    '', '', '', '', '', '', '', ''
  ]);

  const textToType = [
    `
    Dawn transcends the mere notion of a residence; it embodies an emblem of prestige and class, personified in an unparalleled edifice
    An architectural masterpiece designed to leave a lasting impression on all who encounter it
    A timeless gift that the next generation will cherish and take pride in
    A sanctuary of warmth and intimacy for your loved ones
    Beyond just another asset in your portfolio, Accolade presents an opportunity to sculpt a lasting legacy
.
    `,
   ` Dawn's appearance and facade are a testament to boldness, elegance, and exquisite aesthetics. Its captivating presence instantly draws the eye, setting it apart in any neighborhood`,
     `Resilience of top-grade materials and fittings Complemented by cuttingedge construction methods`,
     `An architectural masterpiece designed to leave a lasting impression on all who encounter it.`,
     `Escape to a haven of outdoor bliss within the meticulously designed outdoor spaces of Dawn. The swimming pool area; terraces/balconies; a jacuzzi, kids play area and garden area create a seamless fusion of entertainment, relaxation, and play`,
     `Indoor and outdoor spaces that exude class, elegance, and absolute luxury, ensuring a lifestyle beyond compare`,
     `We handle everything on your behalf. Kick back, relax, and stay informed with real-time updates on your project from anywhere`,
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
  }, []); 

  return (
    <div className="luxury-home-explorer">
      {/* Section 1: Accolade */}
      <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url("/dawn.jpg")` }}>
        <div className="absolute inset-0 flex flex-col justify-end items-center text-white bg-black bg-opacity-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-4 text-center font-serif">
             DAWN
            </h2>
            <p className="text-white text-lg font-serif leading-relaxed mb-8 text-center">
              {typedTexts[0]}
            </p>
          </div>
        </div>
      </div>

      <div className="relative bg-white bg-center h-screen">
        <div className="relative flex flex-col sm:flex-row justify-center items-center h-full">
          <div className="w-full sm:w-1/2 mb-8 sm:mb-0 order-2 sm:order-1">
            <img src="/unmatched.jpg" alt="Sophisticated Architecture" className="rounded-lg shadow-lg object-cover w-full hfull z-230" />
          </div>
          <div className="w-full sm:w-1/2 text-black bg-opacity-90 my-8 sm:my-0 order-1 sm:order-2">
            <div className="max-w-lg mx-auto px-6 text-center">
              <h2 className="text-4xl font-bold mb-4 font-serif">UNMATCHED ARCHITECTURAL AESTHETICS</h2>
              <p className="text-lg font-serif leading-relaxed mb-8">
                {typedTexts[1]}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Sophisticated Architecture */}
      {/* <div className="relative bg-white bg-center h-screen">
        <div className="relative flex flex-col sm:flex-row justify-center items-center h-full">
          <div className="w-full sm:w-1/2 mb-8 sm:mb-0 order-2 sm:order-1">
            <img src="/sophisticated.jpg" alt="Sophisticated Architecture" className="rounded-lg shadow-lg object-cover w-full hfull z-230" />
          </div>
          <div className="w-full sm:w-1/2 text-black bg-opacity-90 my-8 sm:my-0 order-1 sm:order-2">
            <div className="max-w-lg mx-auto px-6 text-center">
              <h2 className="text-4xl font-bold mb-4 font-serif">Sophisticated Architecture</h2>
              <p className="text-lg font-serif leading-relaxed mb-8">
                {typedTexts[1]}
              </p>
            </div>
          </div>
        </div>
      </div> */}

      {/* Section 3: Timeless Elegance */}
      <div className="relative bg-black bg-center h-screen">
        <div className="relative flex flex-col sm:flex-row justify-center items-center h-full">
          <div className="w-full sm:w-1/2 mb-8 sm:mb-0 order-2 sm:order-1">
            <img src="/dawn-res.jpg" alt="Timeless Elegance" className="rounded-lg shadow-lg object-cover w-full h-full" />
          </div>
          <div className="w-full sm:w-1/2 text-white bg-opacity-90 my-8 sm:my-0 order-1 sm:order-2">
            <div className="max-w-lg mx-auto px-6 text-center">
              <h2 className="text-4xl text-red-600 font-bold mb-4 font-serif"> Climate Resilience</h2>
              <p className="text-lg font-serif leading-relaxed mb-8">
                {typedTexts[2]}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      
      {/* Section 4: Family Oasis */}
      <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url("/dawn-int.jpg")` }}>
        <div className="absolute inset-0 flex flex-col justify-end items-center text-white bg-black bg-opacity-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-4 text-center font-serif">
            ELEGANT AND FUNCTIONAL INTERIOR SPACES
            </h2>
            <p className="text-white text-lg font-serif leading-relaxed mb-8 text-center">
              {typedTexts[3]}
            </p>
          </div>
        </div>
      </div>

      {/* Section 5: Modern Amenities */}
      <div className="relative bg-white bg-center h-screen">
        <div className="relative flex flex-col sm:flex-row justify-center items-center h-full">
          <div className="w-full sm:w-1/2 mb-8 sm:mb-0 order-2 sm:order-1">
            <img src="/outdoor.jpg" alt="Modern Amenities" className="rounded-lg shadow-lg object-cover w-full h-full" />
          </div>
          <div className="w-full sm:w-1/2 text-black bg-opacity-90 my-8 sm:my-0 order-1 sm:order-2">
            <div className="max-w-lg mx-auto px-6 text-center">
              <h2 className="text-4xl font-bold mb-4 font-serif"> Incredible outdoor spaces</h2>
              <p className="text-lg font-serif leading-relaxed mb-8">
                {typedTexts[4]}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 6: Smart Living */}
      <div className="relative bg-black bg-center h-screen">
        <div className="relative flex flex-col sm:flex-row justify-center items-center h-full">
          <div className="w-full sm:w-1/2 mb-8 sm:mb-0 order-2 sm:order-1">
            <img src="/kitchen.jpg" alt="Smart Living" className="rounded-lg shadow-lg object-cover w-full  h-full" />
          </div>
          <div className="w-full sm:w-1/2 text-white bg-opacity-90 my-8 sm:my-0 order-1 sm:order-2">
            <div className="max-w-lg mx-auto px-6 text-center">
              <h2 className="text-4xl text-red-600 font-bold mb-4 font-serif">Refined Luxury living Stress-free</h2>
              <p className="text-lg font-serif leading-relaxed mb-8">
                {typedTexts[5]}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 7: Tranquil Retreat */}
      {/* <div className="relative bg-gradient-to-r from-yellow-600 via-yellow-700 to-orange-800 bg-center h-screen">
        <div className="relative flex flex-col sm:flex-row justify-center items-center h-full">
          <div className="w-full sm:w-1/2 mb-8 sm:mb-0 order-2 sm:order-1">
            <img src="/alcasa9.jpg" alt="Tranquil Retreat" className="rounded-lg shadow-lg object-cover w-full h-full" />
          </div>
          <div className="w-full sm:w-1/2 text-white bg-opacity-90 my-8 sm:my-0 order-1 sm:order-2">
            <div className="max-w-lg mx-auto px-6 text-center">
              <h2 className="text-4xl text-black font-bold mb-4 font-serif">Refined Luxury living Stress-free</h2>
              <p className="text-lg font-serif leading-relaxed mb-8">
                {typedTexts[6]}
              </p>
            </div>
          </div>
        </div>
      </div> */}

      {/* Section 8: Seamless Development */}
      <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url("/dawn-free.jpg")` }}>
        <div className="absolute inset-0 flex flex-col justify-end items-center text-white bg-black bg-opacity-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-4 text-center font-serif">
            Worry free development Timeless
            </h2>
            <p className="text-white text-lg font-serif leading-relaxed mb-8 text-center">
              {typedTexts[7]}
            </p>
          </div>
        </div>
      </div>

 {/* Specifications Section */}
<div className="mb-12 font-serif ml-1 mt-4">
  <motion.h2
    className="text-4xl font-bold text-gray-800 mb-4 text-center"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 1 }}
  >
    SPECIFICATIONS
  </motion.h2>
  <Tabs>
    <TabList className="flex flex-wrap justify-center">
      <Tab className="text-gray-700 text-lg font-bold p-3 cursor-pointer" selectedClassName="text-red-600 border-b-2 border-red-600">General</Tab>
      <Tab className="text-gray-700 text-lg font-bold p-3 cursor-pointer" selectedClassName="text-red-600 border-b-2 border-red-600">Indoor</Tab>
      <Tab className="text-gray-700 text-lg font-bold p-3 cursor-pointer" selectedClassName="text-red-600 border-b-2 border-red-600">Outdoor</Tab>
      <Tab className="text-gray-700 text-lg font-bold p-3 cursor-pointer" selectedClassName="text-red-600 border-b-2 border-red-600">Development Duration</Tab>
    </TabList>

    <TabPanel>
      <ul className="list-disc list-inside text-gray-700">
        <li>Total land size of actual residence - 1200sm (4 plots)</li>
        <li>Dimensions of actual residence - 27m x 15.5</li>
        <li>Architecture style - Contemporary modern architecture</li>
        <li>Development stage - Concept</li>
        <li>Power system - Hybrid</li>
        <li>Smart home technology - Room/Area specific automation</li>
      </ul>
    </TabPanel>
    <TabPanel>
      <ul className="list-disc list-inside text-gray-700">
        <li>Total number of bedrooms - 7 nos</li>
        <li>Total number of bathrooms - 7 ½ nos</li>
        <li>Master suite 1/ executive suite 1 - Bedroom, bath and walk-in-closet</li>
        <li>Master suite 2/ executive suite 2 - Bedroom, bath and walk-in-closet</li>
        <li>Total number of Lounges - 3 nos</li>
        <li>Kitchen 1 - Back end/ gourmet Chef’s kitchen</li>
        <li>Kitchen 2 - Open kitchen/dry kitchen</li>
        <li>Open floor concept - Yes</li>
        <li>Double volume/void over spaces - Yes</li>
      </ul>
    </TabPanel>
    <TabPanel>
      <ul className="list-disc list-inside text-gray-700">
        <li>Outdoor recreation (Adult and kids) - Yes</li>
        <li>Outdoor Relaxation and garden - Yes</li>
        <li>Total carparks - 6+</li>
        <li>Ancillary facilities (gate house, gen. house etc.) - Yes</li>
        <li>Swimming pool - Yes</li>
        <li>Total ground floor area - 450sqm</li>
        <li>Total first floor area - 600sqm</li>
        <li>Total pent floor area - 600sqm</li>
      </ul>
    </TabPanel>
    <TabPanel>
      <ul className="list-disc list-inside text-gray-700">
        <li>Pre-development/preliminaries - 1 month</li>
        <li>Development (carcass) - 2-3 months</li>
        <li>Development Finishes - 3 - 4 months</li>
        <li>Total Duration - 7 – 8 months</li>
      </ul>
    </TabPanel>
  </Tabs>
</div>

    </div>
  );
}

export default DawnExplore;