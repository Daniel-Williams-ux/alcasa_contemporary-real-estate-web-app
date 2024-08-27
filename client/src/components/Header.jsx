import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <header className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-black p-4">
            <nav className="container mx-auto flex justify-between items-center">
                <div>
                    <Link to="/">
                        {/* Use a more optimized format like WebP */}
                        <img 
                            src="/logo.webp" 
                            alt="Alcasa-contemporary Logo" 
                            className="h-16 md:h-10 lg:h-16 max-w-full transform transition-transform duration-300 hover:scale-110" 
                            loading="lazy" // Lazy-load the logo for better performance
                        />
                    </Link>
                </div>
                <div className="hidden md:flex space-x-4">
                    <Link to="/" className="relative hover:text-gray-200 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all after:duration-300">Home</Link>
                    <Link to="/residences" className="relative hover:text-gray-200 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all after:duration-300">Residences</Link>
                    <Link to="/about" className="relative hover:text-gray-200 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all after:duration-300">About</Link>
                    <Link to="/experience-o2" className="relative hover:text-gray-200 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all after:duration-300">ExperienceO2</Link>
                    <Link to="/contact" className="relative hover:text-gray-200 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all after:duration-300">Contact</Link>
                </div>
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="focus:outline-none focus:ring-2 focus:ring-white transform transition-transform duration-300">
                        <svg 
                            className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}  
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24" 
                            xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}/>
                        </svg>
                    </button>
                </div>
            </nav>
            {isOpen && (
                <div className={`md:hidden flex flex-col space-y-2 p-4 transform transition-all duration-300 ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
                    <Link to="/" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/courses" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Courses</Link>
                    <Link to="/about" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>About</Link>
                    <Link to="/contact" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Contact</Link>
                </div>
            )}
        </header>
    );
}

export default Header;