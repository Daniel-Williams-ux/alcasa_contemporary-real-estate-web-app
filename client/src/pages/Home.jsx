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
    <div>
      {/* Video Section */}
      <div className="relative h-screen" >
        <video
          className="absolute top-0 left-0 w-full h-full object-cover opacity-opacityConf"
          src="/ACCOLADE FINAL.mp4"
          autoPlay
          loop
          muted
        />
        <div className="absolute inset-0  opacity-50" />
        <div className="absolute bottom-0 left-0 w-full text-center pb-8">
        <h2 className="text-4xl font-black mb-4 text-white font-mono">ACCOLADE</h2>
          <h1 className="text-white text-4xl font-black font-serif">A legacy of triumph</h1>
          <p className="text-white text-2xl font-black font-serif">8 bedrooms | 8 ½ bath | L29 x W16.5</p>
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
      <div className="absolute inset-0 " />
        <div className="absolute bottom-0 left-0 w-full text-center pb-8 bg-opacity-50">
          <h2 className="text-4xl font-bold mb-4 text-white font-mono">DAWN</h2>
          <p className="text-white text-4xl font-bold font-serif">An emblem of prestige and class</p>
          <p className="text-white font-black text-2xl font-serif">7 bedrooms | 7 ½ bath | L29 x W16.5</p>
          <Link to="/explore2">
          <button className="bg-formColor text-black border-4 font-semibold py-2 px-4 mr-4" aria-label="Explore Accolade">Explore Accolade</button>
          </Link>
          <Link to="/customize2">
          <button className="bg-black border-4 border-white text-white font-semibold py-2 px-4" aria-label="Customize Yours">Customize Yours</button>
          </Link>
        </div>
      </div>

      {/* Image Section 2 */}
      <div className="relative bg-cover bg-center h-screen " style={{ backgroundImage: `url(${"/specter.jpg"})` }}>
        <div className="absolute bottom-0 left-0 w-full text-center pb-8 opacity-75 bg-opacity-50">
        <h2 className="text-4xl font-bold mb-4 text-white font-mono">SPECTER</h2>
          <p className="text-white text-4xl font-bold font-serif">The aura of splendor; Inspiring exceptional living</p>
          <p className="text-white font-extrabold text-lg font-serif">8 bedrooms | 8 ½ bath | L27 x W17</p>
          <button className="bg-formColor border-4 border-white  text-black font-semibold py-2 px-4 mr-4" aria-label="Explore Accolade">Explore Accolade</button>
          <button className="bg-black border-4 border-white text-white font-semibold py-2 px-4" aria-label="Customize Yours">Customize Yours</button>
        </div>
      </div>

      <footer className="bg-white text-black py-12">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
          <div className="text-center lg:text-left mb-8 lg:mb-0">
            <h3 className="text-2xl font-semibold mb-4">Discover Alcasa Contemporary</h3>
            <Link to="/about">
              <button className="bg-gray-800 text-white border border-gray-800 rounded-full px-6 py-3 hover:bg-gray-700 hover:text-white transition duration-300" aria-label="Learn More">
                Learn More
              </button>
            </Link>
          </div>
          <div className="flex justify-center lg:justify-end items-center mb-8 lg:mb-0">
            <span className="mr-4">Follow Us:</span>
            <div className="flex">
              <a href="https://facebook.com/your-facebook-handle" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-3xl text-gray-800 hover:text-gray-600 mr-4 "><FaFacebook /></a>
              <a href="https://twitter.com/your-twitter-handle" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-3xl text-gray-800 hover:text-gray-600 mr-4"><FaXTwitter /></a>
              <a href="https://instagram.com/your-instagram-handle" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-3xl text-gray-800 hover:text-gray-600 mr-4"><FaInstagram /></a>
              <a href="https://youtube.com/your-youtube-handle" target="_blank" rel="noopener noreferrer" aria-label="Youtube" className="text-3xl text-gray-800 hover:text-gray-600"><FaYoutube /></a>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-8 text-lg text-center lg:text-right">
          <ul>
          <Link>
            <li className="mb-4 mouse-pointer" onClick={handleOpenModal}>Contact</li>
          </Link>
            <Link to="/privacy">
              <li className="mb-4 mouse-pointer">Privacy</li>
            </Link>
            {/* Add more quick links as needed */}
          </ul>
        </div>
      </footer>
      <ContactInfo isOpen={isModalOpen} onClose={handleCloseModal} /> {/* Render the ContactModal component */}
    </div>
    
  );
}

export default Home;
