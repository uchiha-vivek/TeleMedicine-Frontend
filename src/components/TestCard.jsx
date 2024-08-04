




import React from 'react'


function TestCard(){
  function handleClick(){
    console.log('clicked')
  }
    return(
        <>
        <div className='flex items-center justify-center h-96 '>
            <div className="bg-white shadow-md rounded-lg p-6 max-w-sm text-center" >
                <h2 className="text-2xl font-semibold mb-4" > Depression Test </h2>
                <p className='mb-4' >Are you really Mentally fit</p>
                <button onClick={handleClick}  className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600" >Take the test</button>
            </div>
        </div>
        </>
    )
}

export default TestCard