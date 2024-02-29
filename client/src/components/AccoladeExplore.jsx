import React from 'react';
import { motion } from 'framer-motion';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'; // Import styles for react-tabs

function AccoladeExplore() {
    
  return (
    <div className="container mx-auto py-12 mt-16">
      {/* ACCOLADE */}
      <section className="mb-12">
      <motion.h1
          className="text-4xl font-bold text-center text-red-600 mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          ACCOLADE
        </motion.h1>
        <motion.p
          className="text-lg text-center text-gray-700 mb-8 font-light font-serif"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* TAGLINES */}
          <br />
          <span className="italic">
            Cheers to the visionary trailblazers, the pace-setters, the game changers, narrative-shifters, the industry disruptors, and shakers. Here’s to the titans, legacy creators, global movers, conquerors, and architects of change who, against all odds, stood resilient and emerged triumphant. Here's to those who redefine success. Cheers to the relentless spirit of achievement.
          </span>
          <br /><br />
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.img
              src="alcasa3.jpg"
              alt="Accolade"
              className="w-full md:max-w-lg rounded-lg shadow-md"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          <span className="text-red-600">A legacy of triumph</span>
          <br />
          <span className="text-blue-600">A timeless gift that the next generation will cherish and take pride in</span>
          <br />
          <span className="text-green-600">A sanctuary of warmth and intimacy for your loved ones</span>
          <p className="text-purple-800 font-extrabold font-serif">Beyond just another asset in your portfolio, Accolade presents an opportunity to sculpt a lasting legacy</p>
        </motion.p>
      </section>

      {/* MAIN BODY */}
      <section className="mb-12 ml-1">
        <p className="text-lg text-gray-700 mb-8 font-serif">
          Accolade was meticulously crafted to meet the aspirations of a discerning few—individuals in pursuit of a world-class residence that serves as a living testament to their success and triumph.
        </p>
      </section>

      {/* FEATURES/ BENEFITS */}
      <section className="mb-12 ml-1">
      <motion.h2
          className="text-3xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          FEATURES/ BENEFITS
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
            className="font-serif"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="text-xl font-semibold text-gray-700 mb-2 font-serif">Timeless, world-class Architecture</h3>
            <p className="text-gray-700 mb-6 font-serif">A testament to Prestigious, timeless elegance that is unphased by the passing of time</p>

            <h3 className="text-xl font-semibold text-gray-700 mb-2 font-serif">Climate resilience</h3>
            <p className="text-gray-700 mb-6 font-serif">Resilience of top-grade materials and fittings Complemented by cutting-edge construction methods</p>

            <h3 className="text-xl font-semibold text-gray-700 mb-2 font-serif">Family oasis</h3>
            <p className="text-gray-700 mb-6 font-serif">A nest of enduring warmth, intimate moments, and personalized comfort for cherished family and loved ones.</p>
            </motion.div>
            <motion.div
            className="font-serif"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <h3 className="text-xl font-semibold text-gray-700 mb-2 font-serif">Convenience through Smart Technology</h3>
            <p className="text-gray-700 mb-6 font-serif">Seamless Living and heightened convenience through purposeful, refined cutting-edge technology</p>

            <h3 className="text-xl font-semibold text-gray-700 mb-2 font-serif">Refined Luxury living Stress-free</h3>
            <p className="text-gray-700 mb-6 font-serif">Indoor and outdoor spaces that exude class, elegance, and absolute luxury, ensuring a lifestyle beyond compare.</p>

            <h3 className="text-xl font-semibold text-gray-700 mb-2 font-serif">Worry-free development</h3>
            <p className="text-gray-700 mb-6 font-serif">Timeless - We handle everything on your behalf. Kick back, relax, and stay informed with real-time updates on your project from anywhere</p>
            </motion.div>
        </div>
      </section>

      <section className="mb-12 font-serif ml-1">
        <motion.h2
          className="text-3xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          SPECIFICATIONS
        </motion.h2>
        <Tabs>
          <TabList>
            <Tab>General</Tab>
            <Tab>Indoor</Tab>
            <Tab>Outdoor</Tab>
            <Tab>Development Duration</Tab>
          </TabList>

          <TabPanel>
            <ul className="list-disc list-inside text-gray-700">
              <li>Total land size of actual residence - 2400sm (4 plots)</li>
              <li>Dimensions of actual residence - 29m x 16.4m</li>
              <li>Architecture style - Contemporary modern architecture</li>
              <li>Development stage - Concept</li>
              <li>Power system - Hybrid</li>
              <li>Smart home technology - Room/Area specific automation</li>
            </ul>
          </TabPanel>
          <TabPanel>
            <ul className="list-disc list-inside text-gray-700">
              <li>Total number of bedrooms - 8 nos</li>
              <li>Total number of bathrooms - 8 ½ nos</li>
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
      </section>
    </div>
  );
}

export default AccoladeExplore;