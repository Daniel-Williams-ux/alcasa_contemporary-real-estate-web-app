import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <motion.div
    className="max-w-screen overflow-hidden"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
      {/* Our Company Section */}
<section className="h-screen flex items-center justify-center relative" style={{ backgroundImage: "url('/company.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.6 }}>
  <div className="text-center text-black absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <h2 className="text-6xl font-bold mb-4 decoration-4">OUR COMPANY</h2>
  </div>
</section>
<div className="text-center text-black bg-formColor bg-opacity-50 p-8 relative z-10">
    <p className="text-lg mb-8">In the bustling heart of Lagos, a passionate Nigerian graduate architect dared to dream. Fueled by a desire to craft contemporary masterpieces that rivaled those across the globe, Alcasa Contemporary was born. Since 2019, our dedication has touched the lives of over 30 discerning homeowners directly and hundreds indirectly through our partnerships, serving over 40 residential real estate developers. Today, we stand poised to elevate our vision, committed to serving our audience with even greater refinement and distinction. Welcome to a new chapter of Alcasa Contemporary.</p>
  </div>



      {/* Leadership Section */}
      <section className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl text-formColor font-bold mb-6">Leadership</h3>
          <p className="text-lg text-custom mb-8">At Alcasa Contemporary, innovation, expertise, and a commitment to excellence define our leadership. With a diverse blend of backgrounds and extensive experience spanning architecture, engineering, project management, interior design and decoration, marketing, and technology, our team is poised to drive forward-thinking solutions in luxury real estate development. With a shared passion for pushing boundaries and creating extraordinary spaces, we are dedicated to shaping the future of modern living.</p>
          <img src="/leadership.jpg" alt="Leadership" className="w-full max-w-md mx-auto rounded-lg" />
        </div>
      </section>

      {/* Looking Forward / Vision Section */}
      <section className=" bg-black py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl text-formColor font-bold mb-6">Looking Forward / Vision</h3>
          <p className="text-lg text-custom mb-8">At Alcasa Contemporary, we aspire to play a pivotal role in the innovation and technology-driven evolution of human habitation. We envision a future where our contributions redefine the standards of modern living, shaping spaces that inspire and empower individuals to thrive.</p>
          <img src="/vision.jpg" alt="Vision" className="w-full max-w-md mx-auto rounded-lg" />
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl text-formColor font-bold mb-6">Core Values</h3>
          <ul className="list-disc ml-2 text-lg text-custom list-outside">
            <li className="mb-4">Diligence: We uphold the highest standards of craftsmanship and attention to detail in every project.</li>
            <li className="mb-4">Excellence: We strive for perfection, consistently delivering residences that redefine luxury living.</li>
            <li className="mb-4">Integrity: We conduct ourselves with honesty and transparency, fostering trust in our relationships.</li>
            <li className="mb-4">Continuous Learning: We embrace ongoing development to stay ahead of industry trends and refine our skills.</li>
            <li>Innovation: We push the boundaries of design and construction, constantly seeking new ideas and technologies.</li>
          </ul>
          <img src="/values.jpg" alt="Core Values" className="w-full max-w-md mx-auto rounded-lg mt-6" />
        </div>
      </section>

      {/* Our People Section */}
      <section className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl text-formColor font-bold mb-6">Our People</h3>
          <p className="text-lg text-custom mb-8">We are steadfast in our commitment to delivering the most sought-after residential experiences. To achieve this, we cultivate a multi-disciplinary and cross-functional team of professionals who operate within a system that promotes collaboration, independent thinking, innovation, and creativity. The result is the birth of outstanding projects.</p>
          <img src="/people.jpg" alt="Our People" className="w-full max-w-md mx-auto rounded-lg" />
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-black py-16 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl text-formColor font-bold mb-6">CONTACT</h3>
          <p className="text-lg text-custom mb-6">Ikoyi, Lagos state.</p>
          <p className="text-lg text-custom mb-6">+234 8063508095</p>
          <a href="www.alcasacontemporary.com" className="text-lg text-custom mb-8 inline-block">www.alcasacontemporary.com</a>
          <p className="mb-8 text-custom">@alcasacontemporary</p>
          <button className="bg-formColor hover:bg-blue-600 hover:text-white text-black font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline">Contact Now</button>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutUs;