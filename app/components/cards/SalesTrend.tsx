import React from 'react'
import BarChart from '../charts/BarChat'
import { barChartDataDailyTraffic } from '../charts/variables/charts'
import { barChartOptionsDailyTraffic } from '../charts/variables/charts'
const SalesTrend = () => {
  return (
    <div className='bg-white text-gray-800 dark:bg-black dark:text-gray-200 p-4 m-2 ml-0 rounded-lg cards dark:border-0'>
        <div className="flex justify-between mx-auto items-center mb-4">
        <p className="whitespace-nowrap mr-2 text-lg font-medium">
            Sales Trends
        </p>
        <p className="whitespace-nowrap text-sm lg:text-md font-light text-gray-500 sm:block">
            Sort by:
            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-gray-700 dark:text-gray-300  font-medium  border border-gray-500 rounded-full text-sm px-4 mx-2 py-2 text-center inline-flex items-center " type="button">Weekly<svg className="w-2 h-2 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
          </svg>
          </button>
        </p>
    </div>
    <div className="max-w-screen-xl  mx-auto ">
         <div className="mt-4 border-0 overflow-x-auto">
        
          </div>
    </div>
</div>
  )
}

export default SalesTrend