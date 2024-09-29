import React from 'react'
import Seat_Selection from '../components/Seat_Selection/Seat_Selection'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

const SeatSelectionPage = () => {
  return (
    <>
     <div className="">
        <Navbar />
        <Seat_Selection  />
        <Footer/>
     </div> 
    </>
  )
}

export default SeatSelectionPage
