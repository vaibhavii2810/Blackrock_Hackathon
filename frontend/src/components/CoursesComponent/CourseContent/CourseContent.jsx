import React, { useState } from 'react';
import './CourseContent.css';

const CourseContent = ({ enrolled, modules, lessons, videoLinks }) => {
  const [selectedLesson, setSelectedLesson] = useState('');

  const handleLessonClick = (lesson) => {
    setSelectedLesson(lesson);
  };

  const closeVideo = () => {
    setSelectedLesson('');
  };

  return (
    <div className="course-content">
      <h2>Course Content</h2>
      <div className="module-list">
        {modules.map((module, moduleIndex) => (
          <div className="module" key={moduleIndex}>
            <h3>{module}</h3>
            {enrolled && (
              <ul className="lesson-list">
                {lessons[module].map((lesson, lessonIndex) => (
                  <li key={lessonIndex} onClick={() => handleLessonClick(lesson)}>
                    {lesson}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      
      {selectedLesson && (
        <div className="fullscreen-overlay" onClick={closeVideo}>
          <div className="fullscreen-content">
            <button className="back-button" onClick={closeVideo}>Back</button>
            <iframe
              title={selectedLesson}
              width="100%"
              height="100%"
              src={videoLinks[selectedLesson]}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseContent;
