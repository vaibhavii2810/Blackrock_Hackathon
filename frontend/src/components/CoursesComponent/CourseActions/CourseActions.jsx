import React, { useState } from 'react';
import './CourseActions.css';

const CourseActions = ({ handleEnroll, enrolled }) => {
  const [enrollmentClicked, setEnrollmentClicked] = useState(false);

  const handleEnrollClick = () => {
    handleEnroll();
    setEnrollmentClicked(true);
  };

  return (
    <div className="course-actions">
      <button
        className={`enroll-button ${enrolled ? 'enrolled' : ''}`}
        onClick={handleEnrollClick}
        disabled={enrolled || enrollmentClicked}
      >
        {enrolled ? 'Enrolled' : 'Enroll Now'}
      </button>
    </div>
  );
};

export default CourseActions;
