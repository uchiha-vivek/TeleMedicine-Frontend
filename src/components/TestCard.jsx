




import React from 'react'
import { Link } from 'react-router-dom'


function TestCard() {
  function handleClick() {
    console.log('clicked')
  }
  return (
    <>
      <div className='flex items-center justify-center h-96 '>
        <div className="bg-white shadow-md rounded-lg p-6 max-w-sm text-center" >
          <h2 className="text-2xl font-semibold mb-4" > Depression Test </h2>
          <p className='mb-4' >Are you really Mentally fit</p>
          <Link to='/test-form'>
            <button onClick={handleClick} className="bg-black text-white font-semibold py-2 px-4 rounded hover:bg-blue-600" >Take the test</button></Link>

        </div>
      </div>
    </>
  )
}

export default TestCard