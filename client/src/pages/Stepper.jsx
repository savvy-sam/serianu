import React from 'react'
const steps = [
    {
      label: 'Address',
      step: 1,
    },
    {
      label: 'Shipping',
      step: 2,
    },
    {
      label: 'Payment',
      step: 3,
    },
    {
      label: 'Summary',
      step: 4,
    },
  ]

const Stepper = () => {
  return (
    <div className=' w-full max-w-[600px] py-0 px-[15px]'>
    <div className="flex relative justify-between flex-row mt-[50px] before:content-[''] before:w-full before:absolute before:h-[4px] before:top-1/2 before:left-0 before-h-[4px] before:bg-[#f3e7f3] before:-translate-y-1/2
    after:content-[''] after:bg-[#4a154b] after:h-[4px] after:top-1/2 after:transition duration-[400] ease-linear after:left-0 after:-translate-y-1/2 after:w-[33%] after:absolute">
    {
    steps.map(({label, step}, index)=>(
        <div className="relative z-[1]" key={index}>
        <div className='flex items-center justify-center'>
        <div className='w-[40px] h-[40px]  rounded-[50%] bg-[#ffffff] border-[3px] border-solid border-[#f3e7f3]
        flex justify-center items-center transition duration-[0.4] ease-in '>
            <div className='text-[19px] text-[#f3e7f3]'>
                {step}
            </div>
        </div>
        </div>
        <div className='absolute top-[66px] left-[50%] transform -translate-x-1/2 -translate-y-1/2'>
            <div className='text-[19px] text-[#f3e7f3]'>
                {label}
            </div>
        </div>
    </div>
    ))}
    </div>
</div>
  )
}

export default Stepper