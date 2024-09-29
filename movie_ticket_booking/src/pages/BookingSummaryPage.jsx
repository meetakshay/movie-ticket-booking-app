
import React from 'react'
import Booking_Summary from '../components/Booking_Summary/Booking_Summary'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const BookingSummaryPage = () => {
  return (
    <>
     <section>
     <Navbar/>
        <Booking_Summary  />
      <Footer/>
     </section> 
    </>
  )
}

export default BookingSummaryPage

