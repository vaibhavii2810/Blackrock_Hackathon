import React from 'react';
import './InstructorBio.css';

const InstructorBio = (props) => {
  const { name, imageSrc, description } = props;

  return (
    <div className="instructor-bio">
      <h2><b>Instructor</b></h2>
      <div className="instructor-info">
        <img src={imageSrc} alt="Instructor Avatar" />
        <div className="instructor-details">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default InstructorBio;
