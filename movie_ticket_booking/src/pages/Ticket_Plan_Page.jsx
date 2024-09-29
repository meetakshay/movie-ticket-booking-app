import React from 'react'
import Ticket_Plan from '../components/Ticket_Plan/Ticket_Plan'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const Ticket_Plan_Page = () => {
  return (
    <>
      <section>
      <Navbar/>
       <Ticket_Plan />
       <Footer/>
      </section>
    </>
  )
}

export default Ticket_Plan_Page
