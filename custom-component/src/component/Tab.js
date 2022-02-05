import React, { useState } from 'react';

const Tab = () => {
  const [select, setSelect] = useState(0);
  const contents = [
    { name: 'Tab1', message: 'Tab menu ONE' },
    { name: 'Tab2', message: 'Tab menu TWO' },
    { name: 'Tab3', message: 'Tab menu THREE' },
  ];

  const handleTab = (idx) => {
    setSelect(idx);
  };

  return (
    <div className='w-full h-full pt-4'>
      <div className='w-11/12 h-12 ml-16 bg-zinc-200 flex'>
        {contents.map((con, idx) => (
          <div
            key={idx}
            className={`tab ${select === idx ? 'select' : ''}`}
            onClick={() => {
              handleTab(idx);
            }}
          >
            {con.name}
          </div>
        ))}
      </div>
      <div className='h-60 w-full font-semibold text-2xl flex justify-center items-center'>
        <div>{contents[select].message}</div>
      </div>
    </div>
  );
};

export default Tab;
