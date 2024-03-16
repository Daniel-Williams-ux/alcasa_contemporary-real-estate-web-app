import React from 'react';

const ContactInfo = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed inset-0 flex items-center justify-center ${isOpen ? 'visible' : 'hidden'}`}>
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-white text-blue-600 p-6 rounded-lg z-10">
        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
        <p className="text-black mb-2">Phone: +234 8063508095</p>
        <p className="text-black mb-2">Instagram: @alcasacontemporary</p>
        <p className="text-black mb-2">Address: Ikoyi, Lagos state</p>
        <button onClick={onClose} className="bg-gray-800 text-white border border-gray-800 rounded px-6 py-3 hover:bg-gray-700 hover:text-white transition duration-300">
          Close
        </button>
      </div>
    </div>
  );
};

export default ContactInfo;
