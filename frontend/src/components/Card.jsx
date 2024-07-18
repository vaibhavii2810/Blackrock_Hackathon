import React from 'react'; 
import feature1 from '../assets/feature1.png'; 
 
const Card = () => { 
  return ( 
    <div className="mx-auto my-24 flex flex-col items-center justify-between w-11/12 lg:flex-row"> 
      <div className="lg:flex-1 relative mb-6 lg:mb-0"> 
        <img className="w-full rounded-lg" src={feature1} alt="" /> 
      </div> 
      <div className="lg:flex-1"> 
        <h3 className="font-semibold text-lg text-green-700">FARM INSIGHTS DASHBOARD</h3> 
        <h2 className="text-4xl text-black my-3 max-w-xl">Real-Time Data Visualization and Decision Support for Modern Farming</h2> 
        <p className="text-gray-500 mb-4">The Farm Insights Dashboard serves as a comprehensive tool for farmers,  
          providing real-time visualization of crucial agricultural data. By integrating data from various sources such as  
          soil sensors, weather forecasts, and crop monitoring systems, the dashboard offers farmers valuable insights into  
          their farming operations.</p> 
        <p className="text-gray-500 mb-4"> 
          Through intuitive graphs, charts, and maps, farmers can easily track soil moisture levels,  
          temperature trends, crop growth stages, and weather conditions. This empowers them to make informed decisions  
          regarding irrigation scheduling, fertilization strategies, pest management, and crop planning. 
        </p> 
      </div> 
    </div> 
  ); 
} 
 
export default Card;