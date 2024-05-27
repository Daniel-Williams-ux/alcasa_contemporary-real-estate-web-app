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
    <div className="min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="max-w-7xl mx-auto p-4">
        <div className="flex flex-col md:flex-row items-center justify-center mb-16">
          <div className="w-full md:w-1/2 p-4">
            <img src="/eew.jpg" alt="Luxury Home" className="w-full rounded-lg shadow-lg" />
          </div>
          <div className="w-full md:w-1/2 p-4 text-center">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-4xl md:text-5xl font-bold text-black mb-4"
            >
              {words[index]}
            </motion.h2>
          </div>
        </div>

        {/* Ground Floor Details */}
        <FloorSection
          title="Ground Floor Plan Property Details"
          imgSrc="/ground.jpg"
          imgAlt="Ground Floor"
          descriptionTitle="GROUND FLOOR"
          descriptionItems={[
            "Ante-room",
            "En-suite Bedroom",
            "Ensuite bedroom",
            "Garage",
            "Guest's toilet",
            "Main kitchen/gourmet chefs Kitchen",
            "Main lounge/living room",
            "Private lounge",
            "Pantry Store",
            "10 - 16 seater Dining area",
          ]}
          checkboxes={[
            { label: "Bar", value: "Bar" },
            { label: "Office", value: "Office" },
            { label: "Open Kitchen", value: "Open Kitchen" },
            { label: "Power room", value: "Power room" },
            { label: "Service/boy’s quarters 1", value: "Service/boy’s quarters 1" },
          ]}
          selectedOptions={selectedOptions}
          handleCheckboxChange={handleCheckboxChange}
        />

        {/* First Floor Details */}
        <FloorSection
          title="First Floor Plan Property Details"
          imgSrc="/first.jpg"
          imgAlt="First Floor"
          descriptionTitle="FIRST FLOOR PLAN"
          descriptionItems={[
            "En-suite Bedroom",
          ]}
          checkboxes={[
            { label: "Box room/storage", value: "Box room/storage" },
            { label: "Cinema/movie theatre", value: "Cinema/movie theatre" },
            { label: "Gym", value: "Gym" },
            { label: "Master suite (deluxe)", value: "Master suite (deluxe)" },
            { label: "Power/utility room", value: "Power/utility room" },
            { label: "Study room", value: "Study room" },
          ]}
          selectedOptions={selectedOptions}
          handleCheckboxChange={handleCheckboxChange}
        />

        {/* Pent Floor Details */}
        <FloorSection
          title="Pent Floor Plan Property Details"
          imgSrc="/pent.jpg"
          imgAlt="Pent Floor"
          descriptionTitle="PENT FLOOR PLAN"
          descriptionItems={[
            "Master suite (executive)",
            "Private Lounge",
            "Front terrace",
            "Rear terrace",
          ]}
          checkboxes={[
            { label: "En-suite bedroom", value: "En-suite bedroom" },
            { label: "Cinema/movie theatre", value: "Cinema/movie theatre2" },
            { label: "Spa", value: "Spa" },
            { label: "Sauna", value: "Sauna" },
            { label: "Panic room", value: "Panic room" },
          ]}
          selectedOptions={selectedOptions}
          handleCheckboxChange={handleCheckboxChange}
        />

        {/* Basement Floor Details */}
        <FloorSection
          title="Basement Floor Plan Property Details"
          imgSrc="/basement.jpg"
          imgAlt="Basement Floor"
          descriptionTitle="BASEMENT FLOOR PLAN (OPTIONAL)"
          descriptionItems={[]}
          checkboxes={[
            { label: "Indoor sports", value: "Indoor sports" },
            { label: "Sauna", value: "Sauna" },
            { label: "Power room", value: "Power room" },
            { label: "Bowling alley", value: "Bowling alley" },
            { label: "Cinema/movie theatre", value: "Cinema/movie theatre3" },
            { label: "Lounge", value: "Lounge" },
          ]}
          selectedOptions={selectedOptions}
          handleCheckboxChange={handleCheckboxChange}
        />

        {/* Site Plan Details */}
        <FloorSection
          title="Site Plan Property Details"
          imgSrc="/site.jpg"
          imgAlt="Site Plan"
          descriptionTitle="SITE PLAN"
          descriptionItems={[
            "Main building",
            "Generator shed",
          ]}
          checkboxes={[
            { label: "Gate house", value: "Gate house" },
            { label: "Swimming pool and pool area", value: "Swimming pool and pool area" },
            { label: "Relaxation area (garden)", value: "Relaxation area (garden)" },
            { label: "Outdoor sport", value: "Outdoor sport" },
            { label: "Detached guest house", value: "Detached guest house" },
            { label: "Pool house", value: "Pool house" },
            { label: "Detached Service/boy’s quarters", value: "Detached Service/boy’s quarters" },
            { label: "Water Treatment plant", value: "Water Treatment plant" },
            { label: "Underground Water storage", value: "Underground Water storage" },
          ]}
          selectedOptions={selectedOptions}
          handleCheckboxChange={handleCheckboxChange}
        />

        <div className="text-center mt-16">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition delay-150 duration-300 ease-in-out">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

const FloorSection = ({ title, imgSrc, imgAlt, descriptionTitle, descriptionItems, checkboxes, selectedOptions, handleCheckboxChange }) => (
  <div className="bg-white py-12">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-8">{title}</h2>
      <div className="flex justify-center mb-8">
        <img src={imgSrc} alt={imgAlt} className="w-full md:max-w-sm rounded-lg shadow-lg" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl md:text-2xl text-red-900 font-semibold mb-4">{descriptionTitle}</h3>
          <ul className="list-disc pl-6">
            {descriptionItems.map(item => <li key={item} className="text-base">{item}</li>)}
          </ul>
        </div>
        <div>
          <h6 className="text-base font-bold mb-4">Additional Features</h6>
          <div className="grid grid-cols-2 gap-4">
            {checkboxes.map(checkbox => (
              <label key={checkbox.value} className="inline-flex items-center">
                <input
                  type="checkbox"
                  value={checkbox.value}
                  checked={selectedOptions.includes(checkbox.value)}
                  onChange={handleCheckboxChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2">{checkbox.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AccoladeCustomize;