import React, { useState } from 'react';
import './CourseTabs.css';

const CourseTabs = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="course-tabs">
      <ul className="tab-list">
        <li className={activeTab === 'overview' ? 'active' : ''} onClick={() => handleTabChange('overview')}>Overview</li>
      </ul>
      <div className="tab-content">
        <div className={`tab-pane ${activeTab === 'overview' ? 'active' : ''}`}>
          <p>The RBI finance course is a prestigious program offered by the Reserve Bank of India, focusing on in-depth exploration of monetary economics, financial stability, and regulatory practices within India's banking sector. Participants gain a thorough understanding of central banking principles, macroeconomic policies, financial markets, and the role of RBI in shaping economic policies and financial stability. It combines theoretical insights with practical applications, preparing professionals for roles in banking supervision, policy formulation, and financial regulation. The course is highly regarded for its rigorous curriculum and contribution to shaping the financial landscape of India.</p>
        </div>
      </div>
    </div>
  );
};

export default CourseTabs;
