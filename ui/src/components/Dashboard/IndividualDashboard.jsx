import React from 'react'
import {Cards, LineChart} from "./"
const IndividualDashboard = () => {
  return (
    <div className='text-secondary py-5 md:py-10 px-5 border-t border-l border-dashboardMain-seperator mx-1'>
        <h2 className='text-xl md:text-3xl xl:text-5xl font-medium pb-5 md:pb-8'>Dashboard</h2>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 mb-2 md:mb-4'>
            <Cards />
        </div>
        <div className='hidden md:flex items-center justify-center w-full '>
          <LineChart />
        </div>
    </div>
  )
}

export default IndividualDashboard;