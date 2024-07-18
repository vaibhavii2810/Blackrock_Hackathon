import React from 'react';
import CourseCard from '../../components/Cards/CourseCard';
import course1 from "../../assets/course1.jpg"
const Courses = () => {
  
  const courses = [
    {
      imageSrc: course1,
      courseName: 'RBI FINANCE COURSE',
      author: 'Atharva Khairnar',
      description: "The RBI finance course offers in-depth training on monetary economics, financial stability, and regulatory practices in India.",
      coursePageUrl: '/dashboard/education/courses/course-1',
    },
 
    // Add more courses as needed
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Our Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            imageSrc={course.imageSrc}
            courseName={course.courseName}
            author={course.author}
            description={course.description}
            coursePageUrl={course.coursePageUrl}
          />
          
        ))}
      </div>
    </div>
  );
};

export default Courses;


