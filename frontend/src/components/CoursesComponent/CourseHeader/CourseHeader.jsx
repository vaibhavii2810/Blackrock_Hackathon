import React from 'react';
import './CourseHeader.css';

const CourseHeader = (props) => {
  const { title, instructor, rating, enrollment, description, imageUrl } = props;

  return (
    <div className="course-header">
      <div className="course-header-info">
        <h1><b>{title}</b></h1>
        <p><b>{instructor}</b></p>
        <div className="course-header-meta">
          <span>{rating} Rating</span>
          {/* Example stars for demonstration */}
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star-half-alt"></i>
        </div>
        <span>Enrolled {enrollment}</span>
        <p>{description}</p>
      </div>
      <div className="course-header-image">
        <img src={imageUrl} alt="Course Thumbnail" />
      </div>
    </div>
  );
};

export default CourseHeader;
