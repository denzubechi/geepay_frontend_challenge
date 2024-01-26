import React from 'react'

const SalesTrend = () => {
  return (
    <div className='bg-white text-gray-800 dark:bg-black dark:text-gray-200 p-4 m-4 rounded-lg'>
        <div className="flex justify-between mx-auto items-center mb-4">
        <p className="text-lg font-medium">
            Sales Trends
        </p>
        <p className="text-md font-light text-gray-500 sm:block">
            Sort by:
            <span className='p-2 mx-2 px-4 border rounded-full'>
                weekly
            </span>
        </p>
    </div>
</div>
  )
}

export default SalesTrend