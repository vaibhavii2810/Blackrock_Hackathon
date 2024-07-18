import React from 'react';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ imageSrc, courseName, author, description, coursePageUrl }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(coursePageUrl);
  };

  return (
    <div
      className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer"
      onClick={handleClick}
    >
      <div className="overflow-hidden rounded-t-lg">
        <img src={imageSrc} alt={courseName} className="w-full h-48 object-cover" />
      </div>
      <div className="p-4">
        <h2 className="text-2xl font-semibold">{courseName}</h2>
        <p className="text-lg text-[#F87171] font-bold bg-[#8BE4B1] inline-block rounded-md p-2">{author}</p>
        <p className="text-base text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default CourseCard;
