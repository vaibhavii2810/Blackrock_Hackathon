import React, { useState } from 'react'; 
import ImageButtonWithDescription from '../../components/Cards/ImageButtonWithDescription'; 
import Graduation from '../../assets/Graduation.png'
import Postgraduation from '../../assets/PostGraduation.png'
import Diploma from '../../assets/Diploma.png'
const Scholarship = () => { 
  const imageUrl = ''; 
 
  const items = [ 
    { 
      imageSrc: Graduation, 
      description: 'Merit Cum Means Scholarship for Professional and Technical Courses (CS) Minorities', 
      criteria: 'Students pursuing a technical/professional course at UG/PG level with at least 50% marks, with family income not exceeding INR 2.5 L', 
      eligibility: 'Graduation', 
      onClick: () => { 
        window.location.href = 'https://minorityaffairs.gov.in/show_content.php?lang=1&level=2&ls_id=164&lid=166'; 
      } 
    }, 
    { 
      imageSrc: Graduation, 
      description: 'Scholarships for Top Class Education for Students with Disabilities', 
      criteria: 'A person with 40% disability issued by competent medical authority, with family income not exceeding INR 6 L', 
      eligibility: 'Graduation', 
      onClick: () => { 
        window.location.href = 'https://www.myscheme.gov.in/schemes/tce-swd'; 
      } 
    }, 
    { 
      imageSrc: Graduation, 
      description: 'PM’s Scholarship Scheme for Central Armed Police Forces and Assam Rifles', 
      criteria: 'Ward/Widows of AF & CAPFs personnel who are- died in harness/ retired/ serving. Pursuing first professional degree programme in the fields of Engineering, Medicine, Dental, and Veterinary. 60% marks in MEQ', 
      eligibility: 'Graduation', 
      onClick: () => { 
        window.location.href = 'https://www.myscheme.gov.in/schemes/pmsswcapfar'; 
      } 
    }, 
    { 
      imageSrc: Postgraduation, 
      description: 'AICTE PG (GPAT/GATE) Scholarship', 
      criteria: 'GATE/GPAT qualified candidates', 
      eligibility: 'PostGraduation', 
      onClick: () => { 
        window.location.href = 'https://www.aicte-india.org/schemes/students-development-schemes/PG-Scholarship-Scheme'; 
      } 
    }, 
    { 
      imageSrc: Postgraduation, 
      description: 'Kishore Vaigyanik Protsahan Yojana Fellowship', 
      criteria: 'Students with science background wishing to pursue higher courses', 
      eligibility: 'PostGraduation', 
      onClick: () => { 
        window.location.href = 'https://www.indiascienceandtechnology.gov.in/nurturing-minds/scholarships/school/kishore-vaigyanik-protsahan-yojana-kvpy'; 
      } 
    }, 
    { 
      imageSrc: Graduation, 
      description: 'Tata Realty Scholarship for Girls', 
      criteria: 'Girl students with 50% marks in class 12 or diploma, with family income not exceeding INR 5 L', 
      eligibility: 'Graduation', 
      onClick: () => { 
        window.location.href = 'https://scholarshiparena.in/tata-realty-scholarship-for-girls/'; 
      } 
    }, 
    { 
      imageSrc: Graduation, 
      description: 'Dr. Ambedakar Centrally Sponsored Scheme of Post-Matric Scholarships for the Economically Backward Class (EBC) Students', 
      criteria: 'The scholarships will be open to Indian nationals belonging to the General Category (Other than Schedule Caste, Schedule Tribe and Other Backward Classes).', 
      eligibility: 'Graduation', 
      onClick: () => { 
        window.location.href = 'https://www.myscheme.gov.in/schemes/dacsspostmsebcs'; 
      } 
    },      
    { 
      imageSrc: Diploma, 
      description: 'AICTE – Saksham Scholarship Scheme For Specially-Abled Student (Diploma)', 
      criteria: 'The candidate should be admitted to the First year of the Diploma level course OR the Second year of the Diploma level course through lateral entry in any of the AICTE-approved institutions of the respective year.', 
      eligibility: 'Diploma', 
      onClick: () => { 
        window.location.href = 'https://www.myscheme.gov.in/schemes/sak-dip'; 
      } 
    },   
    { 
      imageSrc: Postgraduation, 
      description:'Post Graduate Indira Gandhi Scholarship For Single Girl Child', 
      criteria: "The applicant must have taken admission to regular, full-time first-year Master's Degree courses in any designated university or a post-graduate college. ", 
      eligibility: 'PostGraduation', 
      onClick: () => { 
        window.location.href = 'https://www.myscheme.gov.in/schemes/pg-igssgc'; 
      } 
    },   
  ]; 
 
  const [filters, setFilters] = useState({ 
    graduation: true, 
    postgraduation: true, 
    diploma: true, 
  }); 
 
  const handleCheckboxChange = (e) => { 
    const { name, checked } = e.target; 
    setFilters((prevFilters) => ({ 
      ...prevFilters, 
      [name]: checked, 
    })); 
  }; 
 
  const isItemVisible = (item) => { 
    return ( 
      (filters.graduation && item.eligibility === 'Graduation') || 
      (filters.postgraduation && item.eligibility === 'PostGraduation') || 
      (filters.diploma && item.eligibility === 'Diploma') 
    ); 
  }; 
 
  return ( 
    <div className="container mx-auto p-6"> 
      <div className="flex flex-col items-center space-y-2 mb-6"> 
        <h1 className="text-5xl font-bold mb-4">Scholarships</h1> 
        <div className="flex space-x-4 text-xl font-medium"> 
          <label className="flex items-center space-x-2"> 
            <input 
              type="checkbox" 
              checked={filters.graduation} 
              onChange={handleCheckboxChange} 
              name="graduation" 
              className="form-checkbox h-5 w-5 text-blue-600" 
            /> 
            <span>Graduation</span> 
          </label> 
          <label className="flex items-center space-x-2"> 
            <input 
              type="checkbox" 
              checked={filters.postgraduation} 
              onChange={handleCheckboxChange} 
              name="postgraduation" 
              className="form-checkbox h-5 w-5 text-blue-600" 
            /> 
            <span>Postgraduation</span> 
          </label> 
          <label className="flex items-center space-x-2"> 
            <input 
              type="checkbox" 
              checked={filters.diploma} 
              onChange={handleCheckboxChange} 
              name="diploma" 
              className="form-checkbox h-5 w-5 text-blue-600" 
            /> 
            <span>Diploma</span> 
          </label> 
        </div> 
      </div> 
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"> 
        {items.filter(isItemVisible).map((item, index) => ( 
          <div 
            key={index} 
            className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out" 
          > 
            <div className="overflow-hidden rounded-t-lg"> 
              <img src={item.imageSrc} alt="scholarship" className="w-full h-48 object-cover" /> 
            </div> 
            <div className="p-4"> 
              <h2 className="text-lg font-semibold">{item.description}</h2> 
              <p className="text-sm text-gray-600">{item.criteria}</p> 
              <p className="text-xs text-gray-500">{item.eligibility}</p> 
              <button 
                onClick={item.onClick} 
                className="mt-2 bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700 transition-colors duration-200" 
              > 
                Learn More 
              </button> 
            </div> 
          </div> 
        ))} 
      </div> 
    </div> 
  ); 
}; 
 
export default Scholarship;
