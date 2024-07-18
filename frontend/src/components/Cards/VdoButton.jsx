

import React from 'react';

const VdoButton = ({ imageSrc, description, onClick }) => {
  return (
    <div className="flex flex-col items-center m-5">
      <button className="border-none bg-none cursor-pointer p-0" onClick={onClick}>
        <div 
          className="w-full h-full bg-cover bg-center rounded-lg overflow-hidden"
          style={{ 
            backgroundImage: `url('${imageSrc}')`,
          }}
        />
      </button>
      <p className="mt-2 text-sm text-gray-800 text-center">{description}</p>
    </div>
  );
};

export default VdoButton;











// import React from 'react';

// const VdoButton = ({ imageSrc, description, onClick }) => {
//   return (
//     <div className="flex flex-col items-center m-5">
//       <button className="border-none bg-none cursor-pointer p-0" onClick={onClick}>
//         <div 
//           className="w-48 h-48 bg-cover bg-center"
//           style={{ 
//             backgroundImage: `url('${imageSrc}')`,
//           }}
//         />
//       </button>
//       <p className="mt-2 text-sm text-gray-800 text-center">{description}</p>
//     </div>
//   );
// };

// export default VdoButton;
