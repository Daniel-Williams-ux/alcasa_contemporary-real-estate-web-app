import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

function Home() {
  return (
    <div>
      {/* Video Section */}
      <div className="relative h-screen" >
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/ACCOLADE FINAL.mp4"
          autoPlay
          loop
          muted
        />
        <div className="absolute inset-0  opacity-50" />
        <div className="absolute bottom-0 left-0 w-full text-center pb-8 opacity-75 bg-">
        <h2 className="text-4xl font-black mb-4 text-red-600 font-mono">ACCOLADE</h2>
          <h1 className="text-white text-4xl font-black font-serif">A legacy of triumph</h1>
          <p className="text-white text-2xl font-black font-serif">Key specifications: 8 bedrooms | 8 ½ bath | L29 x W16.5</p>
          <div className="mt-4">
          <Link to="/explore">
              <button className="bg-formColor text-black border-4 font-semibold py-2 px-4 mr-4">Explore Accolade</button>
              </Link>
            <Link to="/customize">
              <button className="bg-black border-white border-4 text-white font-semibold py-2 px-4">Customize Yours</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${"/dawn.jpg"})` }}>
      <div className="absolute inset-0 opacity-50" />
        <div className="absolute bottom-0 left-0 w-full text-center pb-8 opacity-75 bg-black">
          <h2 className="text-4xl font-bold mb-4 text-white font-mono">DAWN</h2>
          <p className="text-white text-4xl font-bold font-serif">An emblem of prestige and class</p>
          <p className="text-white font-black text-2xl font-serif">Key specifications: 7 bedrooms | 7 ½ bath | L29 x W16.5</p>
          <Link to="/explore2">
          <button className="bg-formColor text-black border-4 font-semibold py-2 px-4 mr-4">Explore Accolade</button>
          </Link>
          <Link to="/customize2">
          <button className="bg-black border-4 border-white text-white font-semibold py-2 px-4">Customize Yours</button>
          </Link>
        </div>
      </div>

      {/* Image Section 2 */}
      <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${"/specter.jpg"})` }}>
        <div className="absolute bottom-0 left-0 w-full text-center pb-8 opacity-75 bg-black">
        <h2 className="text-4xl font-bold mb-4 text-white font-mono">SPECTER</h2>
          <p className="text-white text-4xl font-bold font-serif">The aura of splendor; Inspiring exceptional living</p>
          <p className="text-white font-extrabold text-lg font-serif">8 bedrooms | 8 ½ bath | L27 x W17</p>
          <button className="bg-formColor border-4 border-white  text-black font-semibold py-2 px-4 mr-4">Explore Accolade</button>
          <button className="bg-black border-4 border-white text-white font-semibold py-2 px-4">Customize Yours</button>
        </div>
      </div>

      <footer className="bg-white text-black py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center md:justify-between">
        <div className="mb-8 md:mb-0 text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4">Learn about Alcasa Contemporary</h3>
          <button className="bg-gray-800 text-white border border-gray-800 rounded px-6 py-3 hover:bg-gray-700 hover:text-white transition duration-300">
            Learn More
          </button>
        </div>
        <div className="flex items-center flex-wrap">
          <span className="mr-4 mb-4 md:mb-0">Follow Alcasa Contemporary</span>
          <div className="flex mb-4 md:mb-0">
            <a href="https://facebook.com/your-facebook-handle" target="_blank" rel="noopener noreferrer"><FaFacebook className="mr-2" /></a>
            <a href="https://twitter.com/your-twitter-handle" target="_blank" rel="noopener noreferrer"><FaXTwitter className="mr-2" /></a>
            <a href="https://instagram.com/your-instagram-handle" target="_blank" rel="noopener noreferrer"><FaInstagram className="mr-2" /></a>
            <a href="https://youtube.com/your-youtube-handle" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </div>
        </div>

      </div>
      <div className="container mx-auto mt-8 text-lg text-center md:text-right">
        <ul>
          <li className="mb-4"><a href="#" className="hover:text-gray-700">Contact</a></li>
          <li className="mb-4"><a href="#" className="hover:text-gray-700">Privacy</a></li>
          {/* Add more quick links as needed */}
        </ul>
      </div>
    </footer>
    </div>
    
  );
}

export default Home;
