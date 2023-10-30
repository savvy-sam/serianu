import React from 'react'

const WhirlSpinner = () => {
  return (
    <div className='w-full h-full flex items-center justify-center'>
    <div className='w-[5em] h-[5em] relative rounded-[50%] animate-outer-spin border-t-[#ff2281] border-t-[4px]'>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-t-[4px] animate-middle-spin rounded-[50%] w-[80%] h-[80%] border-t-[#75d5fd] border-solid delay-[250ms]">
             <div className="absolute rounded-[50%] animate-inner-spin duration-[2s] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                w-[50%] h-[50%]  border-t-[4px] border-t-[#7fff00] border-solid  delay-[500ms]">
                </div>
        </div>
    </div>
    </div>
  )
}

export default WhirlSpinner