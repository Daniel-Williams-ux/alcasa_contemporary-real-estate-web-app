import React, { useState } from 'react';
import ImageSlider from './ImageSlider';

function AccoladeCustomize() {
  // State for the selected options in the dropdown menu
  const [selectedOptions, setSelectedOptions] = useState([]);

  // Function to handle checkbox change
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedOptions([...selectedOptions, value]);
    } else {
      setSelectedOptions(selectedOptions.filter(option => option !== value));
    }
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected options:", selectedOptions);
    // Perform any other actions with the selected options here
  };

  return (
    <div className="flex flex-col md:flex-row justify-center mt-20 ">
      <div className="w--full md:w-1/2 pr-4 ml-4 mb-8 md:mb-0 ">
      <div style={{ position: 'sticky', top: '28%' }}>
          <ImageSlider /> 
        </div>
      </div>
      <div className="w-full md:w-1/2 pl-4">
    <div className="max-w-5xl mx-auto py-8px-4 ">
      <h2 className="text-3xl font-bold text-red-600 text-center mb-4 font-mono subpixel-antialiased ">CUSTOMIZE YOUR ACCOLADE</h2>
      <p className="text-lg text-center mb-4 font-serif italic font-medium tracking-tight">Tailor Accolade to Your Unique Style; Customize to Match Your Preferences and Lifestyle</p>

      <form onSubmit={handleSubmit}>
        <div className="mb-8">
          <h3 className="text-2xl text-formColor font-black mb-4 font-mono">GROUND FLOOR</h3>
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

        <div className="mb-8">
          <h6 className="text-base font-bold mb-4 font-mono">Additional Features</h6>
          <div className="flex flex-col">
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

        <div className="mb-8">
          <h3 className="text-2xl text-formColor font-black mb-4 font-mono">FIRST FLOOR PLAN</h3>
          <ul className="list-disc pl-6 font-serif">
            <li>En-suite Bedroom </li>
          </ul>
          <br />

          <div className="mb-8">
            <h6 className="text-base font-bold mb-4 font-mono">Please select the spaces you desire for your first floor</h6>
            <div className="flex flex-col">
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

        <div className="mb-8">
          <h3 className="text-2xl text-formColor font-black mb-4 font-mono">PENT FLOOR PLAN </h3>
          <ul className="list-disc pl-6 font-serif">
            <li>Master suite (executive)</li>
            <li>Private Lounge</li>
            <li>Front terrace </li>
            <li>Rear terrace</li>
          </ul>
          <br />

          <div className="mb-8">
            <h6 className="text-base font-bold mb-4 font-mono">Please select the spaces you desire for your first floor</h6>
            <div className="flex flex-col">
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

        <div className="mb-8">
          <h3 className="text-2xl text-formColor font-black mb-4 font-mono">BASEMENT FLOOR PLAN (OPTIONAL)</h3>
        </div>

        <div className="mb-8">
          <h6 className="text-base font-bold mb-4 font-mono">Please select the spaces you desire for your basement floor</h6>
          <div className="flex flex-col">
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

        <div className="mb-8">
          <h3 className="text-2xl text-formColor font-black mb-4 font-mono">SITE PLAN </h3>
          <ul className="list-disc pl-6 font-serif">
            <li>Main building</li>
            <li>Generator shed</li>
          </ul>
        </div>

        <div className="mb-8">
          <h6 className="text-base font-bold mb-4 font-mono">Please select the spaces you desire for your Site</h6>
          <div className="flex flex-col">
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
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded font-serif transition delay-150 duration-300 ease-in-out">Submit</button>
      </form>
    </div>
    </div>
    </div>
  );
}

export default AccoladeCustomize;


