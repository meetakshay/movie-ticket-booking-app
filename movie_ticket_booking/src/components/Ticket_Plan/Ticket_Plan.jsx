import React from 'react'
import { ticketPlanData } from '../../data/Data'
import { Link } from 'react-router-dom'

const Ticket_Plan = () => {
  return (
    <>
      <section>
      <div className="flex flex-col items-center md:mt-24 mt-[120px]">
      <h1 className="mb-6 text-3xl font-bold">Select Your Show Timing</h1>
      <div className="w-full max-w-4xl">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead>
            <tr className="text-left text-gray-700 bg-gray-200">
              <th className="px-6 py-3 whitespace-nowrap">Cinema Hall</th>
              <th className="px-6 py-3">Show Timings</th>
            </tr>
          </thead>
          <tbody>
            {ticketPlanData.map((plan) => (
              <tr key={plan.id} className="border-b">
                <td className="px-6 py-4 font-semibold">{plan.cinemaHall}</td>
                <td className="px-6 py-4">
                  <div className="flex gap-4">
                    {plan.timings.map((time, index) => (
                      
                      <Link key={index} to='/seats' state={{ time: time, cinemaHall: plan.cinemaHall }} >   
                      <button
                        className="px-4 py-2 text-white bg-red-500 rounded-lg shadow-md hover:bg-red-600"
                      >
                        {time}
                      </button>
                      </Link>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
      </section>
    </>
  )
}

export default Ticket_Plan
