import React from 'react';

const ImageButtonWithDescription = ({ item }) => {
  const { imageSrc, description, eligibility, onClick } = item;
  
  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out p-4">
      <button className="border-none bg-none cursor-pointer" onClick={onClick}>
        <img src={imageSrc} alt="button" className="w-48 h-48 object-cover rounded-md" />
      </button>
      <p className="mt-3 text-lg font-bold text-gray-800 text-center">{description}</p>
      <p className="mt-1 text-sm text-gray-600 italic text-center">{eligibility}</p>
    </div>
  );
};

export default ImageButtonWithDescription;
