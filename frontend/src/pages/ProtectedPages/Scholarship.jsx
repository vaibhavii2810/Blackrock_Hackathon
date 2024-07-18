import React, { useState } from 'react';
import ImageButtonWithDescription from '../../components/Cards/ImageButtonWithDescription';

const Scholarship = () => {
  const imageUrl = 'https://via.placeholder.com/250';

  const items = [
    {
      imageSrc: imageUrl,
      description: 'Description 1',
      criteria: 'Criteria 1: Lorem ipsum dolor sit amet.',
      eligibility: 'Graduated',
      onClick: () => alert('Button 1 clicked!'),
    },
    {
      imageSrc: imageUrl,
      description: 'Description 2',
      criteria: 'Criteria 2: Consectetur adipiscing elit.',
      eligibility: 'Post-Graduated',
      onClick: () => alert('Button 2 clicked!'),
    },
    {
      imageSrc: imageUrl,
      description: 'Description 3',
      criteria: 'Criteria 3: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      eligibility: 'Graduated',
      onClick: () => alert('Button 3 clicked!'),
    },
    {
      imageSrc: imageUrl,
      description: 'Description 4',
      criteria: 'Criteria 4: Lorem ipsum dolor sit amet.',
      eligibility: 'Post-Graduated',
      onClick: () => alert('Button 4 clicked!'),
    },
    {
      imageSrc: imageUrl,
      description: 'Description 5',
      criteria: 'Criteria 5: Consectetur adipiscing elit.',
      eligibility: 'Graduated Diploma',
      onClick: () => alert('Button 5 clicked!'),
    },
    {
      imageSrc: imageUrl,
      description: 'Description 6',
      criteria: 'Criteria 6: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      eligibility: 'Post-Graduated',
      onClick: () => alert('Button 6 clicked!'),
    },
  ];

  const [filters, setFilters] = useState({
    graduation: true,
    postgraduation: true,
    postgradDiploma: true,
  });

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked,
    }));
  };

  const isItemVisible = (item) => {
    return (
      (filters.graduation && item.eligibility === 'Graduated') ||
      (filters.postgraduation && item.eligibility === 'Post-Graduated') ||
      (filters.postgradDiploma && item.eligibility === 'Graduated Diploma')
    );
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col items-center space-y-2 mb-6">
            <h1 className="text-5xl font-bold mb-4">Scholarships</h1>
        <div className="flex space-x-4 text-xl font-medium">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={filters.graduation}
              onChange={handleCheckboxChange}
              name="graduation"
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span>Graduation</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={filters.postgraduation}
              onChange={handleCheckboxChange}
              name="postgraduation"
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span>Postgraduation</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={filters.postgradDiploma}
              onChange={handleCheckboxChange}
              name="postgradDiploma"
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span>Postgraduation - Diploma</span>
          </label>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.filter(isItemVisible).map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <div className="overflow-hidden rounded-t-lg">
              <img src={item.imageSrc} alt="scholarship" className="w-full h-48 object-cover" />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold">{item.description}</h2>
              <p className="              text-sm text-gray-600">{item.criteria}</p>
              <p className="text-xs text-gray-500">{item.eligibility}</p>
              <button
                onClick={item.onClick}
                className="mt-2 bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700 transition-colors duration-200"
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scholarship;

