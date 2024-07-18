import React from 'react';
import CourseHeader from '../CourseHeader/CourseHeader.jsx';
import CourseTabs from '../CourseTabs/CourseTabs.jsx';
import CourseContent from '../CourseContent/CourseContent.jsx';
import InstructorBio from '../IntructorBio/InstructorBio.jsx';
import ReviewsSection from '../ReviewsSection/ReviewsSection.jsx';
import CourseActions from '../CourseActions/CourseActions.jsx';
import './CourseDetailPage.css';

const CourseDetailsPage = ({
  courseDetails,
  instructorDetails,
  modules,
  lessons,
  videoLinks,
  reviews,
  enrolled,
  handleEnroll
}) => {
  return (
    <div className="course-details-page">
      <CourseHeader {...courseDetails} />
      <div className="course-details-container">
        <CourseTabs />
        <div className="course-details-content">
          <CourseContent enrolled={enrolled} modules={modules} lessons={lessons} videoLinks={videoLinks} />
          <InstructorBio {...instructorDetails} />
          <ReviewsSection reviews={reviews} /> {/* Pass reviews array as props */}
        </div>
      </div>
      <CourseActions handleEnroll={handleEnroll} enrolled={enrolled} />
    </div>
  );
};

export default CourseDetailsPage;
