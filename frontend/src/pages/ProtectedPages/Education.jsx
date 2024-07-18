import React from 'react';
import { Link } from 'react-router-dom';
import financearticle from '../../assets/financearticle.jpg'
import Video from "../../assets/video.jpg"
import Courses from "../../assets/courses.jpg"


const Education = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Personal Finance <span className='bg-[#8BE4B1] inline-block rounded-md p-2 '>Learning Materials</span></h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Courses Section */}
        <Link to="/dashboard/education/courses">
          <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <img
              className="w-full h-40 object-fill"
              src={Courses}
              alt="Courses"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Courses</h3>
              <p>Explore various courses to enhance your financial knowledge.</p>
            </div>
          </div>
        </Link>

        {/* Videos Section */}
        <Link to="/dashboard/education/videos">
          <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <img
              className="w-full content-fill h-40 "
              src={Video}
              alt="Videos"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Videos</h3>
              <p>Watch informative videos on financial management and planning.</p>
            </div>
          </div>
        </Link>

        {/* Articles Section */}
        <Link to="/dashboard/education/articles">
          <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <img
              className="w-full h-40 object-cover"
              src={financearticle}
              alt="Articles"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Articles and News</h3>
              <p>Read articles to stay updated with the latest financial trends.</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Education;
