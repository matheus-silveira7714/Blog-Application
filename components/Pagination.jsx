import React from 'react'

const Pagination = () => {
  return (
    <div className=' mt-4 lg:mt-7 flex justify-between text-white'>
      <button className='w-24 p-2 lg:p-3 bg-rose-600 cursor-pointer'>Previous</button>
      <button className='w-24 p-2 lg:p-3 bg-rose-600 cursor-pointer'>Next</button>
    </div>
  )
}

export default Pagination