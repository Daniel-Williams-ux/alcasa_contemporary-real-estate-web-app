import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

function AccoladeCustomize() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const controls = useAnimation();

  const words = [
    "CUSTOMIZE YOUR ACCOLADE",
    "Tailor Accolade to Your Unique Style; Customize to Match Your Preferences and Lifestyle"
  ];
  const [index, setIndex] = useState(0);

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedOptions([...selectedOptions, value]);
    } else {
      setSelectedOptions(selectedOptions.filter(option => option !== value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected options:", selectedOptions);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      controls.start({ opacity: 0, transition: { duration: 0.2 } }).then(() => {
        setIndex((index + 1) % words.length);
        controls.start({ opacity: 1, transition: { duration: 0.2 } });
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [index, controls]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row justify-center items-center h-screen">
        <div className="w-full md:w-1/2 pr-4 ml-4 mb-8 md:mb-0">
          <img src="/eew.jpg" alt="Luxury Home" className="w-full" />
        </div>
        <div className="w-full md:w-1/2 pl-4">
          <div className="max-w-5xl mx-auto py-8 px-4">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-black text-center mb-4 font-mono"
            >
              {words[index]}
            </motion.h2>
            <form onSubmit={handleSubmit}>
              {/* Rest of your form */}
            </form>
          </div>
        </div>
      </div>
      
      {/* Separate section for luxury property details */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-8 font-serif">Ground Floor Plan Property Details</h2>
          <div className="flex justify-center mb-8">
            <img src="/ground.jpg" alt="Luxury Properties" className="w-full md:max-w-sm rounded-lg shadow-lg" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Ground floor details */}
            <div>
              <h3 className="text-xl md:text-2xl text-red-900 font-semibold mb-4 font-mono">GROUND FLOOR</h3>
              <ul className="list-disc pl-6 font-serif text-base">
                <li>Ante-room</li>
                <li>En-suite Bedroom</li>
                <li>Ensuite bedroom</li>
                <li>Garage</li>
                <li>Guest's toilet</li>
                <li>Main kitchen/gourmet chefs Kitchen</li>
                <li>Main lounge/living room</li>
                <li>Private lounge</li>
                <li>Pantry Store</li>
                <li>10 - 16 seater Dining area</li>
              </ul>
            </div>
            {/* Additional features checkboxes */}
            <div>
              <h6 className="text-base font-bold mb-4 font-mono">Please select the spaces you desire for your ground floor</h6>
              <div className="grid grid-cols-2 gap-4">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    value="Bar"
                    checked={selectedOptions.includes("Bar")}
                    onChange={handleCheckboxChange}
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />
                  <span className="ml-2 font-serif">Bar</span>
                </label>
                <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  value="Office"
                  checked={selectedOptions.includes("Office")}
                  onChange={handleCheckboxChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2 font-serif">Office</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  value="Open Kitchen"
                  checked={selectedOptions.includes("Open Kitchen")}
                  onChange={handleCheckboxChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2 font-serif">Open Kitchen</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  value="Power room"
                  checked={selectedOptions.includes("Power room")}
                  onChange={handleCheckboxChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2 font-serif">Power room</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  value="Service/boy’s quarters 1"
                  checked={selectedOptions.includes("Service/boy’s quarters 1")}
                  onChange={handleCheckboxChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2 font-serif">Service/boy’s quarters 1</span>
              </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Separate section for luxury property details */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-8 font-serif">First Floor Plan Property Details</h2>
          <div className="flex justify-center mb-8">
            <img src="/first.jpg" alt="Luxury Properties" className="w-full md:max-w-sm rounded-lg shadow-lg" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* first floor details */}
            <div>
              <h3 className="text-xl md:text-2xl text-red-900 font-semibold mb-4 font-mono">FIRST FLOOR PLAN</h3>
              <ul className="list-disc pl-6 font-serif text-base">
              <li>En-suite Bedroom </li>
              </ul>
            </div>
            {/* Additional features checkboxes */}
            <div>
              <h6 className="text-base font-bold mb-4 font-mono">Please select the spaces you desire for your first floor</h6>
              <div className="grid grid-cols-2 gap-4">
                <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  value="Box room/storage"
                  checked={selectedOptions.includes("Box room/storage")}
                  onChange={handleCheckboxChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2 font-serif">Box room/storage </span>
                </label>
                <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  value="Cinema/movie theatre"
                  checked={selectedOptions.includes("Cinema/movie theatre")}
                  onChange={handleCheckboxChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2 font-serif">Cinema/movie theatre</span>
              </label>
              <label className="inline-flex items-center">
              <input
                  type="checkbox"
                  value="Gym"
                  checked={selectedOptions.includes("Gym")}
                  onChange={handleCheckboxChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2 font-serif">Gym</span>
              </label>
              <label className="inline-flex items-center">
              <input
                  type="checkbox"
                  value="Master suite (deluxe)"
                  checked={selectedOptions.includes("Master suite (deluxe)")}
                  onChange={handleCheckboxChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2 font-serif">Master suite (deluxe)</span>
              </label>
              <label className="inline-flex items-center">
                
              <input
                  type="checkbox"
                  value="Power/utility room"
                  checked={selectedOptions.includes("Power/utility room")}
                  onChange={handleCheckboxChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2 font-serif">Power/utility room</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  value="Study room"
                  checked={selectedOptions.includes("Study room")}
                  onChange={handleCheckboxChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2 font-serif">Study room </span>
              </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Separate section for luxury property details */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-8 font-serif">Pent Floor Plan Property Details</h2>
          <div className="flex justify-center mb-8">
            <img src="/pent.jpg" alt="Luxury Properties" className="w-full md:max-w-sm rounded-lg shadow-lg" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Ground floor details */}
            <div>
              <h3 className="text-xl md:text-2xl text-red-900 font-semibold mb-4 font-mono">PENT FLOOR PLAN</h3>
              <ul className="list-disc pl-6 font-serif text-base">
              <li>Master suite (executive)</li>
              <li>Private Lounge</li>
              <li>Front terrace </li>
              <li>Rear terrace</li>
              </ul>
            </div>
            {/* Additional features checkboxes */}
            <div>
              <h6 className="text-base font-bold mb-4 font-mono">Select Additional Features</h6>
              <div className="grid grid-cols-2 gap-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  value="En-suite bedroom"
                  checked={selectedOptions.includes("En-suite bedroom")}
                  onChange={handleCheckboxChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2 font-serif">En-suite bedroom</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  value="Cinema/movie theatre2"
                  checked={selectedOptions.includes("Cinema/movie theatre2")}
                  onChange={handleCheckboxChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2 font-serif">Cinema/movie theatre</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  value="Power room"
                  checked={selectedOptions.includes("Spa")}
                  onChange={handleCheckboxChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2 font-serif">Spa</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  value="Sauna"
                  checked={selectedOptions.includes("Service/boy’s quarters 1")}
                  onChange={handleCheckboxChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2 font-serif">Sauna</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  value="Panic room"
                  checked={selectedOptions.includes("Panic room")}
                  onChange={handleCheckboxChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2 font-serif">Panic room</span>
              </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Separate section for luxury property details */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-8 font-serif">Basement Floor Plan Property Details</h2>
          <div className="flex justify-center mb-8">
            <img src="/basement.jpg" alt="Luxury Properties" className="w-full md:max-w-sm rounded-lg shadow-lg" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Ground floor details */}
            <div>
              <h3 className="text-xl md:text-2xl text-red-900 font-semibold mb-4 font-mono">BASEMENT FLOOR PLAN (OPTIONAL)</h3>
            </div>
            {/* Additional features checkboxes */}
            <div>
              <h6 className="text-base font-bold mb-4 font-mono">Additional Features</h6>
              <div className="grid grid-cols-2 gap-4">
              <label className="inline-flex items-center">
              <input
                type="checkbox"
                value="Indoor sports"
                checked={selectedOptions.includes("Indoor sports")}
                onChange={handleCheckboxChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 font-serif">Indoor sports</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                value="Sauna"
                checked={selectedOptions.includes("Sauna")}
                onChange={handleCheckboxChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 font-serif">Sauna</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                value="Power room"
                checked={selectedOptions.includes("Power room")}
                onChange={handleCheckboxChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 font-serif">Power room</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                value="Bowling alley"
                checked={selectedOptions.includes("Bowling alley")}
                onChange={handleCheckboxChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 font-serif">Bowling alley</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                value="Cinema/movie theatre3"
                checked={selectedOptions.includes("Cinema/movie theatre3")}
                onChange={handleCheckboxChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 font-serif">Cinema/movie theatre</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                value="Lounge"
                checked={selectedOptions.includes("Lounge")}
                onChange={handleCheckboxChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 font-serif">Lounge</span>
            </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Separate section for luxury property details */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-8 font-serif">Site Plan Property Details</h2>
          <div className="flex justify-center mb-8">
            <img src="/site.jpg" alt="Luxury Properties" className="w-full md:max-w-sm rounded-lg shadow-lg" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Site floor details */}
            <div>
              <h3 className="text-xl md:text-2xl text-red-900 font-semibold mb-4 font-mono">SITE PLAN</h3>
              <ul className="list-disc pl-6 font-serif text-base">
              <li>Main building</li>
              <li>Generator shed</li>
              </ul>
            </div>
            {/* Additional features checkboxes */}
            <div>
              <h6 className="text-base font-bold mb-4 font-mono">Additional Features</h6>
              <div className="grid grid-cols-2 gap-4">
              <label className="inline-flex items-center">
              <input
                type="checkbox"
                value="Gate house"
                checked={selectedOptions.includes("Gate house")}
                onChange={handleCheckboxChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 font-serif">Gate house</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                value="Swimming pool and pool area"
                checked={selectedOptions.includes("Swimming pool and pool area")}
                onChange={handleCheckboxChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 font-serif">Swimming pool and pool area</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                value="Relaxation area (garden)"
                checked={selectedOptions.includes("Relaxation area (garden)")}
                onChange={handleCheckboxChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 font-serif">Relaxation area (garden)</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                value="Outdoor sport"
                checked={selectedOptions.includes("Outdoor sport")}
                onChange={handleCheckboxChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 font-serif">Outdoor sport</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                value="Detached guest house"
                checked={selectedOptions.includes("Detached guest house")}
                onChange={handleCheckboxChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 font-serif">Detached guest house</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                value="Pool house "
                checked={selectedOptions.includes("Pool house ")}
                onChange={handleCheckboxChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 font-serif">Pool house </span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                value="Detached Service/boy’s quarters"
                checked={selectedOptions.includes("Detached Service/boy’s quarters")}
                onChange={handleCheckboxChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 font-serif">Detached Service/boy’s quarters</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                value="Water Treatment plant"
                checked={selectedOptions.includes("Water Treatment plant")}
                onChange={handleCheckboxChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 font-serif">Water Treatment plant</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                value="Underground Water storage"
                checked={selectedOptions.includes("Underground Water storage")}
                onChange={handleCheckboxChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 font-serif">Underground Water storage</span>
            </label>
              </div>
            </div>
          </div>
        </div>
        <div className='text-center mt-16'>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded font-serif transition delay-150 duration-300 ease-in-out">Submit</button>
        </div>
      </div>
      </form>
    </div>
  );
}

export default AccoladeCustomize;
