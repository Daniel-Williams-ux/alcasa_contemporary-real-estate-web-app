import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import ContactInfo from '../components/ContactInfo';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const footerRef = useRef(null);

  const handleOpenModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  useEffect(() => {
    if (isModalOpen && footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isModalOpen]);

  return (
    <div className="min-h-screen bg-gray-100 font-serif">
      {/* Video Section */}
      <section className="relative h-screen">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/ACCOLADE_FINAL.mp4"
          autoPlay
          loop
          muted
          aria-label="Promotional video for Accolade"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="absolute bottom-0 left-0 w-full text-center pb-8 text-white">
          <h2 className="text-3xl md:text-5xl font-black mb-4 font-mono">ACCOLADE</h2>
          <h1 className="text-3xl md:text-4xl font-black">A Legacy of Triumph</h1>
          <p className="text-lg md:text-xl">8 bedrooms | 8 ½ bath | L29 x W16.5</p>
          <div className="mt-4 flex justify-center">
            <Link to="/explore">
              <button className="bg-white text-black border-4 border-transparent font-semibold py-2 px-4 mr-4 hover:bg-gray-200 transition duration-300" aria-label="Explore Accolade">
                Explore Accolade
              </button>
            </Link>
            <Link to="/customize">
              <button className="bg-black text-white border-4 border-transparent font-semibold py-2 px-4 hover:bg-gray-800 transition duration-300" aria-label="Customize Your Accolade">
                Customize Yours
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Image Sections */}
      <ImageSection
        title="DAWN"
        description="An Emblem of Prestige and Class"
        details="7 bedrooms | 7 ½ bath | L29 x W16.5"
        backgroundUrl="/dawn.webp"
        exploreLink="/explore2"
        customizeLink="/customize2"
        loading="lazy"
      />
      <ImageSection
        title="SPECTER"
        description="The Aura of Splendor; Inspiring Exceptional Living"
        details="8 bedrooms | 8 ½ bath | L27 x W17"
        backgroundUrl="/specter.webp"
        exploreLink="/explore3"
        customizeLink="/customize3"
        loading="lazy"
      />

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-200 py-16" ref={footerRef}>
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0 lg:space-x-8 px-6">
          {/* Company Info & Call to Action */}
          <div className="lg:flex-1 text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Discover Alcasa Contemporary</h3>
            <Link to="/about">
              <button
                className="bg-indigo-600 hover:bg-indigo-700 text-white border border-transparent rounded-full px-6 py-3 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                aria-label="Learn More About Alcasa Contemporary"
              >
                Learn More
              </button>
            </Link>
          </div>

          {/* Social Links & Newsletter Subscription */}
          <div className="lg:flex-1 flex flex-col items-center lg:items-start">
            <div className="flex space-x-4 mb-6">
              <a href="https://facebook.com/your-facebook-handle" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-2xl text-gray-400 hover:text-indigo-500 transition duration-300">
                <FaFacebook />
              </a>
              <a href="https://twitter.com/your-twitter-handle" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-2xl text-gray-400 hover:text-indigo-500 transition duration-300">
                <FaTwitter />
              </a>
              <a href="https://instagram.com/your-instagram-handle" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-2xl text-gray-400 hover:text-indigo-500 transition duration-300">
                <FaInstagram />
              </a>
              <a href="https://youtube.com/your-youtube-handle" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-2xl text-gray-400 hover:text-indigo-500 transition duration-300">
                <FaYoutube />
              </a>
            </div>
            <p className="text-sm text-gray-400 mb-4">Subscribe to our newsletter for updates.</p>
            <form className="flex flex-col sm:flex-row w-full sm:max-w-sm">
              <input
                type="email"
                placeholder="Enter your email"
                className="border border-gray-600 bg-gray-800 rounded-l-full px-4 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label="Email Address"
                required
              />
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-r-full px-4 py-2 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                aria-label="Subscribe"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Quick Links */}
          <QuickLinks handleOpenModal={handleOpenModal} />
        </div>

        {/* Footer Bottom */}
        <div className="container mx-auto mt-8 text-center lg:text-right px-6">
          <p className="text-sm text-gray-500">© 2024 Alcasa Contemporary. All rights reserved.</p>
        </div>
      </footer>

      <ContactInfo isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

function ImageSection({ title, description, details, backgroundUrl, exploreLink, customizeLink }) {
  return (
    <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${backgroundUrl})` }}>
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="absolute bottom-0 left-0 w-full text-center pb-8 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">{title}</h2>
        <p className="text-2xl md:text-3xl font-bold">{description}</p>
        <p className="text-lg md:text-xl">{details}</p>
        <div className="mt-4 flex justify-center">
          <Link to={exploreLink}>
            <button className="bg-white text-black border-4 border-transparent font-semibold py-2 px-4 mr-4 hover:bg-gray-200 transition duration-300" aria-label={`Explore ${title}`}>
              Explore {title}
            </button>
          </Link>
          <Link to={customizeLink}>
            <button className="bg-black text-white border-4 border-transparent font-semibold py-2 px-4 hover:bg-gray-800 transition duration-300" aria-label={`Customize ${title}`}>
              Customize Yours
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function SocialLinks() {
  return (
    <div className="flex flex-col items-center lg:items-start space-y-4">
      <div className="flex space-x-4">
        <span>Follow Us:</span>
        <a href="https://facebook.com/your-facebook-handle" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-3xl hover:text-gray-300">
          <FaFacebook />
        </a>
        <a href="https://twitter.com/your-twitter-handle" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-3xl hover:text-gray-300">
          <FaTwitter />
        </a>
        <a href="https://instagram.com/your-instagram-handle" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-3xl hover:text-gray-300">
          <FaInstagram />
        </a>
        <a href="https://youtube.com/your-youtube-handle" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-3xl hover:text-gray-300">
          <FaYoutube />
        </a>
      </div>
      <p className="text-center lg:text-left">Subscribe to our newsletter for updates.</p>
      <form className="flex flex-col sm:flex-row">
        <input type="email" placeholder="Enter your email" className="border border-gray-300 rounded-l-full px-4 py-2 focus:outline-none" aria-label="Email Address" />
        <button type="submit" className="bg-black hover:bg-gray-600 text-white rounded-r-full px-4 py-2 transition duration-300" aria-label="Subscribe">
          Subscribe
        </button>
      </form>
    </div>
  );
}

function QuickLinks({ handleOpenModal }) {
  return (
    <div className="flex flex-col items-center lg:items-start space-y-4">
      <h4 className="font-semibold text-lg">Quick Links</h4>
      <ul className="flex flex-col space-y-2 text-lg text-center lg:text-left">
        <li className="cursor-pointer" onClick={handleOpenModal} aria-label="Contact">
          Contact
        </li>
        <li>
          <Link to="/privacy" aria-label="Privacy Policy">Privacy</Link>
        </li>
        <li>
          <Link to="/terms" aria-label="Terms of Service">Terms of Service</Link>
        </li>
        <li>
          <Link to="/faq" aria-label="Frequently Asked Questions">FAQ</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;