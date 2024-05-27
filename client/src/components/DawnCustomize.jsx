import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

function DawnCustomize() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const controls = useAnimation();
  const words = [
    "CUSTOMIZE YOUR DAWN",
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

  const FloorSection = ({ title, image, details, checkboxes }) => (
    <div className="bg-gray-100 py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-8 font-serif">{title}</h2>
        <div className="flex justify-center mb-8">
          <img src={image} alt="Luxury Properties" className="w-full md:max-w-sm rounded-lg shadow-lg" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl md:text-2xl text-red-900 font-semibold mb-4 font-mono">{title.split(' ')[0]} PLAN</h3>
            <ul className="list-disc pl-6 font-serif text-base">
              {details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
          <div>
            <h6 className="text-base font-bold mb-4 font-mono">Please select the spaces you desire for your {title.split(' ')[0].toLowerCase()} floor</h6>
            <div className="grid grid-cols-2 gap-4">
              {checkboxes.map((checkbox, i) => (
                <label key={i} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    value={checkbox}
                    checked={selectedOptions.includes(checkbox)}
                    onChange={handleCheckboxChange}
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />
                  <span className="ml-2 font-serif">{checkbox}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row justify-center items-center h-screen">
          <div className="w-full md:w-1/2 pr-4 ml-4 mb-8 md:mb-0">
            <img src="/dawn-cus.jpg" alt="Luxury Home" className="w-full" />
          </div>
          <div className="w-full md:w-1/2 pl-4">
            <div className="max-w-5xl mx-auto py-8 px-4">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-red-900 text-center mb-4 font-serif"
              >
                {words[index]}
              </motion.h2>
            </div>
          </div>
        </div>

        <FloorSection
          title="Ground Floor Plan Property Details"
          image="/dawn-ground.jpg"
          details={[
            "Ante-room", "En-suite Bedroom", "Ensuite bedroom", "Garage", 
            "Guest's toilet", "Main kitchen/gourmet chefs Kitchen", 
            "Main lounge/living room", "Private lounge", "Pantry Store", 
            "10 - 16 seater Dining area"
          ]}
          checkboxes={[
            "Bar", "Office", "Open Kitchen", "Power room", 
            "Service/boy’s quarters 1"
          ]}
        />

        <FloorSection
          title="First Floor Plan Property Details"
          image="/dawn-first.jpg"
          details={[
            "En-suite Bedroom", "En-suite Bedroom", 
            "En-suite Bedroom", "Family lounge"
          ]}
          checkboxes={[
            "Box room/storage", "Cinema/movie theatre", "Gym", 
            "Master suite (deluxe)", "Power/utility room", "Study room"
          ]}
        />

        <FloorSection
          title="Pent Floor Plan Property Details"
          image="/pent.jpg"
          details={[
            "Master suite (executive)", "Private Lounge", 
            "Front terrace", "Rear terrace"
          ]}
          checkboxes={[
            "En-suite bedroom", "Cinema/movie theatre2", "Spa", 
            "Sauna", "Panic room"
          ]}
        />

        <FloorSection
          title="Basement Floor Plan Property Details"
          image="/dawn-base.jpg"
          details={[
            "Indoor sports", "Sauna", "Bowling alley", 
            "Cinema/movie theatre3", "Lounge"
          ]}
          checkboxes={[
            "Indoor sports", "Sauna", "Bowling alley", 
            "Cinema/movie theatre3", "Lounge"
          ]}
        />

        <FloorSection
          title="Site Plan Property Details"
          image="/site.jpg"
          details={[
            "Main building", "Generator shed"
          ]}
          checkboxes={[
            "Gate house", "Swimming pool and pool area", "Relaxation area (garden)", 
            "Outdoor sport", "Detached guest house", "Pool house", 
            "Detached Service/boy’s quarters", "Water Treatment plant", 
            "Underground Water storage"
          ]}
        />

        <div className="text-center mt-16">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded font-serif transition delay-150 duration-300 ease-in-out">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default DawnCustomize;
