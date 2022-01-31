import React, { useState } from 'react';

const Toggle = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className='w-full h-full flex items-center justify-center flex-col'>
      <div
        onClick={handleToggle}
        className={`relative h-9 w-20 mb-3 shadow-inner bg-gray-300 rounded-3xl flex items-center cursor-pointer overflow-hidden`}
      >
        <div
          className={`absolute h-full w-full ${
            toggle ? 'left-0' : '-left-20'
          } bg-violet-800 transition-all`}
        ></div>
        <div
          className={`absolute ${
            toggle ? 'left-11' : 'left-0'
          } transition-all h-7 w-7 ml-1 bg-white rounded-full shadow-sm`}
        ></div>
      </div>
      <div>Toggle Switch {toggle ? 'ON' : 'OFF'}</div>
    </div>
  );
};

export default Toggle;

// const Back = styled.div`
//   background: #c5c5c5;
//   width: 5rem;
//   height: 2.4rem;
//   border-radius: 1.2rem;
//   margin-bottom: 0.5rem;
// `;
