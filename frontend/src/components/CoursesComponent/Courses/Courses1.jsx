import React ,{useState} from 'react'
import CourseDetailsPage from "../../CoursesComponent/CourseDetailPage/CourseDetailPage"
const Courses1 = () => {
    const [count, setCount] = useState(0) 
 
  // Define modules array 
  const modules = ['Module 1: Introduction', 'Module 2: Advanced Topics']; 
 
  // Define lessons corresponding to each module 
  const lessons = { 
    'Module 1: Introduction': [ 
      'Lesson 1: Getting Started', 
      'Lesson 2: Overview of Topic', 
    ], 
    'Module 2: Advanced Topics': [ 
      'Lesson 3: Deep Dive', 
      'Lesson 4: Case Studies', 
    ], 
  }; 
 
  // Define video links corresponding to each lesson 
  const videoLinks = { 
    'Lesson 1: Getting Started': 'https://www.youtube.com/embed/bo1t-Px_Quc?si=nC7t5FsyU7kXI1JW', 
    'Lesson 2: Overview of Topic': 'https://www.youtube.com/embed/85nJMcW0E_E?si=NuH6A3VP26oS0xqr', 
    'Lesson 3: Deep Dive': 'https://www.youtube.com/embed/your_youtube_video_id_3', 
    'Lesson 4: Case Studies': 'https://www.youtube.com/embed/your_youtube_video_id_4', 
  }; 
 
  const instructorDetails = { 
    name: "Atharva Khairnar", 
    imageSrc: "https://images.vexels.com/media/users/3/145908/raw/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg", 
    description: "The instructor is known for their deep passion for education and a strong commitment to fostering student growth. With extensive experience in their field, they combine profound subject knowledge with engaging teaching methods. Their approach includes interactive lectures, practical demonstrations, and personalized guidance, aimed at empowering each student to achieve their full potential and cultivate a lasting curiosity for the subject matter." 
  }; 
 
  const courseDetails = { 
    title: "RBI FINANCE COURSE", 
    instructor: instructorDetails.name, 
    rating: "4.5⭐", 
    enrollment: "10,000+", 
    description: "The RBI (Reserve Bank of India) finance course is a specialized educational program designed to provide comprehensive knowledge and understanding of the financial systems, monetary policies, and banking regulations in India.", 
    imageUrl: "https://www.aandmedu.in/wp-content/uploads/2021/03/Finance-and-Accounting.jpg" 
  }; 
 
  // Define reviews array 
  const reviews = [ 
    { userName: "Abhishek Patil", rating: "4.5 ⭐", text: "Great course, highly recommended!" }, 
    { userName: "Samuel D'souza", rating: "5 ⭐", text: "Excellent content and well-structured." }, 
    { userName: "Tushar Maurya", rating: "5 ⭐", text: "Good explanations, learned a lot." } 
  ]; 
 
  const [enrolled, setEnrolled] = useState(false); 
 
  const handleEnroll = () => { 
    setEnrolled(!enrolled); 
  }; 
  return (
    <div>
        <CourseDetailsPage  
        courseDetails={courseDetails} 
        instructorDetails={instructorDetails} 
        modules={modules} 
        lessons={lessons} 
        videoLinks={videoLinks} 
        reviews={reviews} 
        enrolled={enrolled} 
        handleEnroll={handleEnroll} 
      /> 
    </div>
    
 
  )
}

export default Courses1