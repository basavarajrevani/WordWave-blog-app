import React from 'react'

function Notfound() {
  return (
    <div className='flex flex-col h-screen items-center justify-center'>
        <h1 className='text-2xl font-semibold'>404</h1>
        <span className='text-xl text-gray-700'>The Page You Are Looking For Does Not Exist</span>
    </div>
  )
}

export default Notfound;