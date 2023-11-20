import React, { useState } from 'react';

const IconButton = ({ handleClick, icon, message }) => {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <button onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className='relative inline-flex group items-center p-2 text-gray-500 transition duration-300 ease-in-out transform rounded-full'>
        <div>{icon}</div>
        {isHovered && (
        <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 p-2 bg-gray-800 text-white text-sm rounded-lg opacity-100">
          {message}
        </span>
      )}
    </button>
  );
};

export default IconButton;
