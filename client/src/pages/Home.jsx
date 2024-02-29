import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      {/* Video Section */}
      <div className="relative h-screen">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/ACCOLADE FINAL.mp4"
          autoPlay
          loop
          muted
        />
        <div className="absolute inset-0  opacity-50" />
        <div className="absolute bottom-0 left-0 w-full text-center pb-8">
        <h2 className="text-4xl font-black mb-4 text-white font-mono">ACCOLADE</h2>
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
      <div className="relative bg-cover bg-center h-screen " style={{ backgroundImage: `url(${"/dawn.jpg"})` }}>
      <div className="absolute inset-0 opacity-50" />
        <div className="absolute bottom-0 left-0 w-full text-center pb-8">
          <h2 className="text-4xl font-bold mb-4 text-white font-mono">DAWN</h2>
          <p className="text-white text-4xl font-bold font-serif">An emblem of prestige and class</p>
          <p className="text-white font-black text-2xl font-serif">Key specifications: 7 bedrooms | 7 ½ bath | L29 x W16.5</p>
          <button className="bg-formColor text-black border-4 font-semibold py-2 px-4 mr-4">Explore Accolade</button>
          <button className="bg-black border-4 border-white text-white font-semibold py-2 px-4">Customize Yours</button>
        </div>
      </div>

      {/* Image Section 2 */}
      <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${"/specter.jpg"})` }}>
        <div className="absolute bottom-0 left-0 w-full text-center pb-8">
        <h2 className="text-4xl font-bold mb-4 text-white font-mono">SPECTER</h2>
          <p className="text-white text-4xl font-bold font-serif">The aura of splendor; Inspiring exceptional living</p>
          <p className="text-white font-extrabold text-lg font-serif">8 bedrooms | 8 ½ bath | L27 x W17</p>
          <button className="bg-formColor border-4  text-black font-semibold py-2 px-4 mr-4">Explore Accolade</button>
          <button className="bg-black border-4 border-white text-white font-semibold py-2 px-4">Customize Yours</button>
        </div>
      </div>

    </div>

    
  );
}

export default Home;
