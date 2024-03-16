import React from 'react';
import { motion } from 'framer-motion';

const Experience02 = () => {
  return (
    <motion.div 
      className="max-w-7xl mx-auto px-4 py-8 mt-14"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* EXPERIENCE Section */}
      <section className="mb-12">
        <h2 className="text-4xl font-bold mb-8">EXPERIENCE</h2>

        {/* Signature Craft Section */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Signature Craft</h3>
          <p className="mb-4 text-gray-700">"Unleash your vision; craft your signature residence"</p>
          <p className="mb-8 text-gray-700">"Signature Craft" by Alcasa Contemporary beckons discerning individuals of refined taste to own a peerless contemporary residence in their preferred Nigerian locale. Choose from our selection of signature residences and collaborate with our expert team to customize every detail to your unique preferences.</p>
          {/* Image or Video */}
          <motion.img 
            src="/craft.jpg" 
            alt="Signature Craft" 
            className="w-full mb-8 rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
          <p className="mb-8 text-gray-700">Experience the epitome of luxury living, expertly built on your land within a reasonable timeframe.</p>
        </section>

        {/* Absolute Bespoke Section */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Absolute Bespoke</h3>
          <p className="mb-4 text-gray-700">One-of-one; exclusively yours</p>
          <p className="mb-8 text-gray-700">For those who value true rarity, Alcasa Contemporary introduces Absolute bespoke—an invitation to those who cherish absolute exclusivity to craft their dream residence from scratch.</p>
          {/* Image or Video */}
          <motion.img 
            src="/absolute1.jpg" 
            alt="Absolute Bespoke" 
            className="w-full mb-8 rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
          <p className="mb-8 text-gray-700">With meticulous attention to detail, our expert architects and designers collaborate closely with clients to manifest a residence that reflects their unique taste, lifestyle, and desires.</p>
          {/* Image or Video */}
          <motion.img 
            src="/absolute2.jpg" 
            alt="Absolute Bespoke 2" 
            className="w-full mb-8 rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
          <p className="mb-8 text-gray-700">Experience the unparalleled satisfaction of creating a home that is truly one-of-a-kind.</p>
          {/* Contact our Architect Button */}
          <button className="bg-blue700 text-white px-4 py-2 rounded hover:bg-blue-600">Contact our Architect</button>
        </section>

       

        {/* Absolute Bespoke Project Gallery */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Absolute Bespoke Project Gallery</h3>
          {/* Grid Layout for Project Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Project 1 */}
            <motion.div 
              className="bg-gray-100 p-4 rounded-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src="/project1.jpg" alt="Project 1" className="w-full rounded-lg mb-2" />
              <h4 className="text-lg font-bold mb-2">Project 1</h4>
              <p className="text-sm mb-1 text-gray-700">Description: Description of Project 1</p>
              <p className="text-sm mb-1 text-gray-700">Year of Design: 2023</p>
              <p className="text-sm text-gray-700">Location: Lagos, Nigeria</p>
            </motion.div>

            {/* Project 2 */}
            <motion.div 
              className="bg-gray-100 p-4 rounded-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src="/project2.jpg" alt="Project 2" className="w-full rounded-lg mb-2" />
              <h4 className="text-lg font-bold mb-2">Project 2</h4>
              <p className="text-sm mb-1 text-gray-700">Description: Description of Project 2</p>
              <p className="text-sm mb-1 text-gray-700">Year of Design: 2022</p>
              <p className="text-sm text-gray-700">Location: Abuja, Nigeria</p>
            </motion.div>

            {/* Project 3 */}
            <motion.div 
              className="bg-gray-100 p-4 rounded-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src="/project3.jpg" alt="Project 3" className="w-full rounded-lg mb-2" />
              <h4 className="text-lg font-bold mb-2">Project 3</h4>
              <p className="text-sm mb-1 text-gray-700">Description: Description of Project 3</p>
              <p className="text-sm mb-1 text-gray-700">Year of Design: 2024</p>
              <p className="text-sm text-gray-700">Location: Lagos, Nigeria</p>
            </motion.div>

            {/* Project 4 */}
            <motion.div 
              className="bg-gray-100 p-4 rounded-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src="/project4.jpg" alt="Project 4" className="w-full rounded-lg mb-2" />
              <h4 className="text-lg font-bold mb-2">Project 4</h4>
              <p className="text-sm mb-1 text-gray-700">Description: Description of Project 4</p>
              <p className="text-sm mb-1 text-gray-700">Year of Design: 2021</p>
              <p className="text-sm text-gray-700">Location: Abuja, Nigeria</p>
            </motion.div>

            {/* Project 5 */}
            <motion.div 
              className="bg-gray-100 p-4 rounded-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src="/project5.jpg" alt="Project 5" className="w-full rounded-lg mb-2" />
              <h4 className="text-lg font-bold mb-2">Project 5</h4>
              <p className="text-sm mb-1 text-gray-700">Description: Description of Project 5</p>
              <p className="text-sm mb-1 text-gray-700">Year of Design: 2022</p>
              <p className="text-sm text-gray-700">Location: Lagos, Nigeria</p>
            </motion.div>

            {/* Project 6 */}
            <motion.div 
              className="bg-gray-100 p-4 rounded-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src="/project6.jpg" alt="Project 6" className="w-full rounded-lg mb-2" />
              <h4 className="text-lg font-bold mb-2">Project 6</h4>
              <p className="text-sm mb-1 text-gray-700">Description: Description of Project 6</p>
              <p className="text-sm mb-1 text-gray-700">Year of Design: 2023</p>
              <p className="text-sm text-gray-700">Location: Lagos, Nigeria</p>
            </motion.div>

            {/* Project 7 */}
            <motion.div 
              className="bg-gray-100 p-4 rounded-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src="/project7.jpg" alt="Project 7" className="w-full rounded-lg mb-2" />
              <h4 className="text-lg font-bold mb-2">Project 7</h4>
              <p className="text-sm mb-1 text-gray-700">Description: Description of Project 7</p>
              <p className="text-sm mb-1 text-gray-700">Year of Design: 2024</p>
              <p className="text-sm text-gray-700">Location: Abuja, Nigeria</p>
            </motion.div>

            {/* Project 8 */}
            <motion.div 
              className="bg-gray-100 p-4 rounded-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src="/project8.jpg" alt="Project 8" className="w-full rounded-lg mb-2" />
              <h4 className="text-lg font-bold mb-2">Project 8</h4>
              <p className="text-sm mb-1 text-gray-700">Description: Description of Project 8</p>
              <p className="text-sm mb-1 text-gray-700">Year of Design: 2021</p>
              <p className="text-sm text-gray-700">Location: Abuja, Nigeria</p>
            </motion.div>

            {/* Project 9 */}
            <motion.div 
              className="bg-gray-100 p-4 rounded-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src="/project9.jpg" alt="Project 9" className="w-full rounded-lg mb-2" />
              <h4 className="text-lg font-bold mb-2">Project 9</h4>
              <p className="text-sm mb-1 text-gray-700">Description: Description of Project 9</p>
              <p className="text-sm mb-1 text-gray-700">Year of Design: 2022</p>
              <p className="text-sm text-gray-700">Location: Abuja, Nigeria</p>
            </motion.div>
          </div>
        </section>

        <section className="mb-12">
  <h3 className="text-2xl font-bold mb-4">Ownership</h3>
  {/* Steps */}
  <ol className="list-decimal pl-6 mb-8">
    <li className="mb-4">
      <h4 className="font-bold mb-2">Explore Signature Craft Residences</h4>
      <p className="mb-2 text-gray-700">Dive into our exclusive collection of meticulously crafted Signature Craft residences, each offering unparalleled luxury and sophistication. Choose the residence that resonates with your unique style and vision, setting the stage for a truly exceptional living experience.</p>
    </li>
    <li className="mb-4">
      <h4 className="font-bold mb-2">Consultation with our Architect</h4>
      <p className="mb-2 text-gray-700">Embark on a personalized journey with our architects and designers as you discuss your aspirations and preferences. Benefit from expert guidance and insights to bring your dream home to life, tailored precisely to your desires and requirements.</p>
    </li>
    <li className="mb-4">
      <h4 className="font-bold mb-2">Secure Your Signature Craft Unit with a Reservation Fee</h4>
      <p className="mb-2 text-gray-700">Confirm your interest and Secure one of our limited units for development on your land by paying a reservation fee equivalent to 3% of the base price (N450,000,000). This fee also grants access to our pre-development services, including full customization, site visitation and analysis, and the production of essential construction drawings, among many others.</p>
    </li>
    <li className="mb-4">
      <h4 className="font-bold mb-2">Customize and Confirm Your Residence</h4>
      <p className="mb-2 text-gray-700">Participate in the customization journey as we tailor the design to your unique preferences and plot requirements, ensuring a bespoke home that reflects your individuality and harmonizes with your property.</p>
    </li>
    <li className="mb-4">
      <h4 className="font-bold mb-2">Seal the Deal</h4>
      <p className="mb-2 text-gray-700">With terms clarified and agreements reached, finalize your commitment by signing the construction contract. Secure your place in the journey to your dream home by making an initial deposit as outlined in the contract, marking the beginning of the construction phase.</p>
    </li>
    <li className="mb-4">
      <h4 className="font-bold mb-2">Contact our Architect</h4>
      <p className="mb-2 text-gray-700">To start your journey towards owning a luxurious bespoke residence, contact our architect today.</p>
      <button className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Contact Now
      </button>
    </li>
    <li className="mb-4">
      <h4 className="font-bold mb-2">Witness Your Vision Come to Life</h4>
      <p className="mb-2 text-gray-700">Experience the excitement of seeing your vision materialize as our dedicated team transforms plans into reality. From groundbreaking to completion, stay informed and engaged at every stage, culminating in the unforgettable moment when you step into your customized Accolade luxury residence.</p>
    </li>
  </ol>
</section>


      </section>
    </motion.div>
  );
};

export default Experience02;
