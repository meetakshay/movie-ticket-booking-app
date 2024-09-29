import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import backgroundImage from '../../assets/bookingSummary.jpg'; 

const BookingSummaryPage = () => {
  
  const location = useLocation();
  const { selectedSeats } = location.state || { selectedSeats: [] };

  const ticketPrice = 10; 
  const totalAmount = selectedSeats.length * ticketPrice;

  return (
    <div 
      className="flex items-center justify-center h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${backgroundImage})` }} 
    >
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg bg-opacity-90">
        <h2 className="mb-6 text-3xl font-bold text-center text-gray-700">Booking Summary</h2>

        {/* Selected Seats Section */}
        <div className="p-4 mb-4 bg-gray-100 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-600">Selected Seats</h3>
          <p className="mt-2 text-gray-800">{selectedSeats.length > 0 ? selectedSeats.join(', ') : 'No seats selected'}</p>
        </div>

        {/* Total Amount Section */}
        <div className="p-4 mb-6 bg-gray-100 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-600">Total Amount</h3>
          <p className="mt-2 text-gray-800">${totalAmount.toFixed(2)}</p>
        </div>

        {/* Confirm Button */}
        <Link to={'/checkout'}>
          <button className="w-full py-3 text-lg font-bold text-white transition duration-200 ease-in-out bg-green-500 rounded-md hover:bg-green-600">
            Confirm Booking
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BookingSummaryPage;
