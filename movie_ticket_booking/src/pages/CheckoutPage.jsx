// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const CheckoutPage = () => {
//   const navigate = useNavigate();

//   const handleGoHome = () => {
//     navigate('/');
//   };



//   return (
    
//     <div className="flex flex-col items-center justify-center h-screen p-6 bg-green-200" style={{ backgroundImage: "url('/path/to/your/image.jpg')" }} >
//       <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
//         <h2 className="mb-4 text-2xl font-bold text-center text-green-500">Thank You!</h2>
//         <p className="mb-4 text-lg text-center">
//           Your movie ticket has been successfully booked.
//         </p>
//         <p className="mb-6 text-center">
//           We hope you enjoy your movie. Have a great time!
//         </p>
//         <button
//           className="w-full px-6 py-2 text-white bg-blue-500 rounded primary-btn hover:bg-blue-600"
//           onClick={handleGoHome}
//         >
//           Go to Homepage
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;




import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/checkout.jpg'

const CheckoutPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div 
      className="flex flex-col items-center justify-center h-screen p-6 bg-center bg-cover"
      style={{ backgroundImage: `url(${backgroundImage})` }} 
    >
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md bg-opacity-90">
        <h2 className="mb-4 text-2xl font-bold text-center text-green-500">Thank You!</h2>
        <p className="mb-4 text-lg text-center">
          Your movie ticket has been successfully booked.
        </p>
        <p className="mb-6 text-center">
          We hope you enjoy your movie. Have a great time!
        </p>
        <button
          className="w-full px-6 py-2 text-white bg-blue-500 rounded primary-btn hover:bg-blue-600"
          onClick={handleGoHome}
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
