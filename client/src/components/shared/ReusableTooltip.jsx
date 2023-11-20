// src/components/Tooltip.js
import React from 'react';

const ReusableTooltip = ({ text, children }) => {
  return (
  <div className='group relative'>
  <div className="inline-block">
    {children}
  </div>
  <div className="hidden group-hover:flex text-[#1A2857] text-xs rounded-[20px] p-1 absolute transform -translate-x-1/2 opacity-0 group-hover:opacity-90 transition-opacity duration-200 w-[500px] h-[100px] py-[15px] px-[50px] items-center justify-center bg-[#FFFFFF]">
    <p className='font-sans text-[16px] font-semibold'>{text}</p>
  </div>
</div>
  );
};

export default ReusableTooltip;
