import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <motion.div
      className="max-w-screen overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Our Company Section */}
      <section
        className="h-screen flex items-center justify-center relative"
        style={{
          backgroundImage: "url('/company.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black bg-opacity-60 w-full h-full absolute top-0 left-0"></div>
        <div className="text-center text-white absolute z-10">
          <h2 className="text-6xl font-bold mb-4">OUR COMPANY</h2>
        </div>
      </section>

      <div className="text-center text-white bg-gray-900 bg-opacity-80 p-8 relative z-10">
        <p className="text-lg mb-8 leading-relaxed">
          In the bustling heart of Lagos, a passionate Nigerian graduate
          architect dared to dream. Fueled by a desire to craft contemporary
          masterpieces that rivaled those across the globe, Alcasa Contemporary
          was born. Since 2019, our dedication has touched the lives of over 30
          discerning homeowners directly and hundreds indirectly through our
          partnerships, serving over 40 residential real estate developers.
          Today, we stand poised to elevate our vision, committed to serving our
          audience with even greater refinement and distinction. Welcome to a
          new chapter of Alcasa Contemporary.
        </p>
      </div>

      {/* Leadership Section */}
      <section className="bg-gradient-to-r from-gray-900 via-black to-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-4xl text-white font-bold mb-6">Leadership</h3>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            At Alcasa Contemporary, innovation, expertise, and a commitment to
            excellence define our leadership. With a diverse blend of
            backgrounds and extensive experience spanning architecture,
            engineering, project management, interior design and decoration,
            marketing, and technology, our team is poised to drive
            forward-thinking solutions in luxury real estate development. With
            a shared passion for pushing boundaries and creating extraordinary
            spaces, we are dedicated to shaping the future of modern living.
          </p>
          <img
            src="/leadership.jpg"
            alt="Leadership team"
            className="w-full max-w-md mx-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Looking Forward / Vision Section */}
      <section className="bg-gradient-to-r from-gray-900 via-black to-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-4xl text-white font-bold mb-6">
            Looking Forward / Vision
          </h3>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            At Alcasa Contemporary, we aspire to play a pivotal role in the
            innovation and technology-driven evolution of human habitation. We
            envision a future where our contributions redefine the standards of
            modern living, shaping spaces that inspire and empower individuals
            to thrive.
          </p>
          <img
            src="/vision.jpg"
            alt="Vision of the future"
            className="w-full max-w-md mx-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-gradient-to-r from-gray-900 via-black to-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-4xl text-white font-bold mb-6">Core Values</h3>
          <ul className="list-disc list-inside text-lg text-gray-300 leading-relaxed">
            <li className="mb-4">
              <strong>Diligence:</strong> We uphold the highest standards of
              craftsmanship and attention to detail in every project.
            </li>
            <li className="mb-4">
              <strong>Excellence:</strong> We strive for perfection,
              consistently delivering residences that redefine luxury living.
            </li>
            <li className="mb-4">
              <strong>Integrity:</strong> We conduct ourselves with honesty and
              transparency, fostering trust in our relationships.
            </li>
            <li className="mb-4">
              <strong>Continuous Learning:</strong> We embrace ongoing
              development to stay ahead of industry trends and refine our
              skills.
            </li>
            <li>
              <strong>Innovation:</strong> We push the boundaries of design and
              construction, constantly seeking new ideas and technologies.
            </li>
          </ul>
          <img
            src="/values.jpg"
            alt="Our core values"
            className="w-full max-w-md mx-auto rounded-lg shadow-lg mt-6"
          />
        </div>
      </section>

      {/* Our People Section */}
      <section className="bg-gradient-to-r from-gray-900 via-black to-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-4xl text-white font-bold mb-6">Our People</h3>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            We are steadfast in our commitment to delivering the most
            sought-after residential experiences. To achieve this, we cultivate
            a multi-disciplinary and cross-functional team of professionals who
            operate within a system that promotes collaboration, independent
            thinking, innovation, and creativity. The result is the birth of
            outstanding projects.
          </p>
          <img
            src="/people.jpg"
            alt="Our dedicated team"
            className="w-full max-w-md mx-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-r from-gray-900 via-black to-gray-900 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-6">CONTACT</h3>
          <p className="text-lg mb-4">Ikoyi, Lagos state.</p>
          <p className="text-lg mb-4">+234 8063508095</p>
          <a
            href="https://www.alcasacontemporary.com"
            className="text-lg mb-4 inline-block text-indigo-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.alcasacontemporary.com
          </a>
          <p className="text-lg mb-8">@alcasacontemporary</p>
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition duration-300">
            Contact Now
          </button>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutUs;