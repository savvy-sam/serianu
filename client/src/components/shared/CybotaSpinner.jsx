import React from 'react'

const CybotaSpinner = () => {
  return (
    <div className='w-full h-full flex items-center justify-center'>
    <div className='w-[5em] h-[5em] relative rounded-[50%] animate-outer-spin  border-t-[4px] border-t-[#C1292E]'>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-t-[#1A2857] border-t-[4px] animate-middle-spin rounded-[50%] w-[80%] h-[80%] border-solid delay-[250ms]">
             <div className="absolute rounded-[50%] animate-inner-spin duration-[2s] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                w-[50%] h-[50%]  border-t-[4px] border-t-[#808080] border-solid  delay-[500ms]">
                </div>
        </div>
    </div>
    </div>
  )
}

export default CybotaSpinner
