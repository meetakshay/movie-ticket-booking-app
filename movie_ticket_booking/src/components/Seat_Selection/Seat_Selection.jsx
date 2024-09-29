
import React, { useState } from 'react';
// import Navbar from '../components/Navbar/Navbar';
import { Link, useLocation } from 'react-router-dom';




const Seat_Selection = () => {

      // Access the selectedSeats from the route state
  const location = useLocation();
  const { time,cinemaHall} = location.state || { time,cinemaHall: [] };
console.log(time,cinemaHall)
    
  // Initialize state for selected seats
  const [selectedSeats, setSelectedSeats] = useState([]);

  // Seat configuration
  const rows = 7; // Number of rows
  const seatsPerRow = 5; // Number of seats per row on each side

  // Function to handle seat selection
  const toggleSeatSelection = (seatId) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatId)); // Deselect if already selected
    } else {
      setSelectedSeats([...selectedSeats, seatId]); // Select seat
    }
  };

  
  // Function to generate seat rows (both left and right sides)
  const generateSeats = (side) => {
    return Array.from({ length: rows }, (_, rowIndex) => (
      <div className="flex justify-center mb-2 space-x-2 border" key={`${side}-${rowIndex}`}>
        {Array.from({ length: seatsPerRow }, (_, seatIndex) => {
          const seatId = `${side}${rowIndex + 1}-${seatIndex + 1}`; // Unique seat identifier
          const isSelected = selectedSeats.includes(seatId); // Check if seat is selected
          return (
            <div
              key={seatId}
              className={`w-8  border border-black h-8 bg-${isSelected ? 'green-500' : 'gray-300'} cursor-pointer rounded-md`}
              onClick={() => toggleSeatSelection(seatId)}
            />
          );
        })}
      </div>
    ));
  };

  

  return (
    <>
   
    
 
    <div className="flex flex-col items-center p-6 mt-[115px] md:mt-[65px]">
      {/* Screen */}
      <div className="w-full py-2 mb-6 text-center text-white bg-gray-800 rounded-lg">Screen</div>

      {/* Seats Section */}
      <div className="flex justify-between w-full max-w-4xl">
        {/* Left Side Seats */}
        <div className="flex flex-col">
          {generateSeats('L')}
        </div>

        {/* Spacer between left and right seats */}
        <div className="w-24"></div>

        {/* Right Side Seats */}
        <div className="flex flex-col">
          {generateSeats('R')}
        </div>
      </div>
      
        {/* Time & Venue  */}
      <div className="flex gap-4">
      <h1>{cinemaHall}</h1> 
        <h1>{time}</h1>
    </div>
    
      {/* Selected Seats Information */}
      <div className="mt-8">
        <h2 className="text-xl font-bold">Selected Seats:</h2>
        <p>{selectedSeats.length > 0 ? selectedSeats.join(', ') : 'No seats selected'}</p>
        <Link to="/booking_summary" state={{ selectedSeats }}>
          <button className='w-full mt-4 primary-btn'>Confirm</button>
        </Link>
      </div>
    </div>
    </>

  );
};

export default Seat_Selection;
