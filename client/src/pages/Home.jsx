import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ContactInfo from './contactInfo';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const footerRef = useRef(null); // Create a ref for the footer
    
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
    
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    // Focus on the footer when modal is opened
    if (isModalOpen && footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isModalOpen]);

  return (
    <div className="min-h-screen bg-gray-100 font-serif">
      {/* Video Section */}
      <div className="relative h-screen">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover opacity-opacityConf"
          src="/ACCOLADE FINAL.mp4"
          autoPlay
          loop
          muted
        />
        <div className="absolute inset-0 opacity-50 bg-black" />
        <div className="absolute bottom-0 left-0 w-full text-center pb-8 text-white">
          <h2 className="text-3xl md:text-5xl font-black mb-4 font-mono">ACCOLADE</h2>
          <h1 className="text-3xl md:text-4xl font-black">A legacy of triumph</h1>
          <p className="text-lg md:text-xl">8 bedrooms | 8 ½ bath | L29 x W16.5</p>
          <div className="mt-4">
            <Link to="/explore">
              <button className="bg-formColor text-black border-4 font-semibold py-2 px-4 mr-4" aria-label="Explore Accolade">Explore Accolade</button>
            </Link>
            <Link to="/customize">
              <button className="bg-black border-white border-4 text-white font-semibold py-2 px-4" aria-label="Customize Yours">Customize Yours</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${"/dawn.jpg"})` }}>
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="absolute bottom-0 left-0 w-full text-center pb-8 bg-opacity-75 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">DAWN</h2>
          <p className="text-2xl md:text-3xl font-bold">An emblem of prestige and class</p>
          <p className="text-lg md:text-xl">7 bedrooms | 7 ½ bath | L29 x W16.5</p>
          <Link to="/explore2">
            <button className="bg-formColor text-black border-4 font-semibold py-2 px-4 mr-4" aria-label="Explore Accolade">Explore Accolade</button>
          </Link>
          <Link to="/customize2">
            <button className="bg-black border-4 border-white text-white font-semibold py-2 px-4" aria-label="Customize Yours">Customize Yours</button>
          </Link>
        </div>
      </div>

      {/* Image Section 2 */}
      <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${"/specter.jpg"})` }}>
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="absolute bottom-0 left-0 w-full text-center pb-8 bg-opacity-75 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">SPECTER</h2>
          <p className="text-2xl md:text-3xl font-bold">The aura of splendor; Inspiring exceptional living</p>
          <p className="text-lg md:text-xl">8 bedrooms | 8 ½ bath | L27 x W17</p>
          <Link to="/explore3">
          <button className="bg-formColor border-4 border-white text-black font-semibold py-2 px-4 mr-4" aria-label="Explore Accolade">Explore Accolade</button>
          </Link>
          <Link to="/customize3">
          <button className="bg-black border-4 border-white text-white font-semibold py-2 px-4" aria-label="Customize Yours">Customize Yours</button>
          </Link>
        </div>
      </div>

      <footer className="bg-white text-black py-12">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="text-center lg:text-left">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">Discover Alcasa Contemporary</h3>
          <Link to="/about">
            <button className="bg-black hover:bg-gray-600 text-white border border-gray-700 rounded-full px-6 py-3 transition duration-300" aria-label="Learn More">Learn More</button>
          </Link>
        </div>

        <div className="flex flex-col items-center lg:items-start space-y-4">
          <div className="flex space-x-4">
            <span>Follow Us:</span>
            <a href="https://facebook.com/your-facebook-handle" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-3xl hover:text-gray-300"><FaFacebook /></a>
            <a href="https://twitter.com/your-twitter-handle" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-3xl hover:text-gray-300"><FaXTwitter /></a>
            <a href="https://instagram.com/your-instagram-handle" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-3xl hover:text-gray-300"><FaInstagram /></a>
            <a href="https://youtube.com/your-youtube-handle" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-3xl hover:text-gray-300"><FaYoutube /></a>
          </div>
          <p className="text-center lg:text-left">Subscribe to our newsletter for updates.</p>
          <form className="flex flex-col sm:flex-row">
            <input type="email" placeholder="Enter your email" className="border border-gray-300 rounded-l-full px-4 py-2 focus:outline-none" />
            <button type="submit" className="bg-black hover:bg-gray-600 text-white rounded-r-full px-4 py-2 transition duration-300">Subscribe</button>
          </form>
        </div>

        <div className="flex flex-col items-center lg:items-start space-y-4">
          <h4 className="font-semibold text-lg">Quick Links</h4>
          <ul className="flex flex-col space-y-2 text-lg text-center lg:text-left">
            <li className="cursor-pointer" onClick={handleOpenModal}>Contact</li>
            <li><Link to="/privacy">Privacy</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto mt-8 text-center lg:text-right">
        <p className="text-sm text-gray-500">© 2024 Alcasa Contemporary. All rights reserved.</p>
      </div>
    </footer>
      <ContactInfo isOpen={isModalOpen} onClose={handleCloseModal} /> {/* Render the ContactModal component */}
    </div>
  );
}

export default Home;
