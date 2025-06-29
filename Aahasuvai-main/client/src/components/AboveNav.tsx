// import React from "react";
// import { Link } from "react-router-dom";

// const AboveNav: React.FC = () => {
//   return (
//     <div className="bg-[#004d3d] text-white text-sm px-4 py-2">
//       <div className="max-w-screen-xl mx-auto flex justify-between items-center">
//         {/* Left Side Text */}
//         <p className="text-xs sm:text-sm">FREE COD DELIVERY ACROSS INDIA</p>

//         {/* Right Side Links */}
//         <div className="space-x-4 text-xs sm:text-sm">
//           <Link to="/about" className="hover:underline">
//             ABOUT US
//           </Link>
//           <Link to="/partner"className="text-white hover:text-beige px-4 py-2 transition-colors duration-300">
//            PARTNER WITH US
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboveNav;


import React from "react";
import { Link } from "react-router-dom";

const AboveNav: React.FC = () => {
  return (
      <div className="bg-[#004d3d] text-white text-sm px-4 py-2 sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Left Text */}
        <p className="text-xs sm:text-sm">FREE COD DELIVERY ACROSS INDIA</p>

        {/* Right Links */}
        <div className="space-x-4 text-xs sm:text-sm">
          <Link to="/about" className="hover:underline">
            ABOUT US
          </Link>
          <Link to="/partner" className="hover:text-beige transition">
            PARTNER WITH US
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboveNav;

