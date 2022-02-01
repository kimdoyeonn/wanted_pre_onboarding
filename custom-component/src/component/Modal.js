import React, { useState } from 'react';

const Modal = () => {
  const [isShow, setIsShow] = useState(false);

  const showModal = () => {
    setIsShow(true);
  };

  const hideModal = () => {
    setIsShow(false);
  };

  return (
    <div className='w-full h-full relative flex justify-center items-center'>
      <button
        className='h-16 w-36 font-bold shadow-inner rounded-full text-white bg-violet-800'
        onClick={showModal}
      >
        Open Modal
      </button>
      <div
        className={`${
          isShow ? '' : 'hidden'
        } absolute w-full h-full bg-gray-400 bg-opacity-70`}
      >
        <div className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 bg-white w-72 h-32 rounded-xl'>
          <div className='mt-1 flex justify-center'>
            <button
              className='cursor-pointer font-bold text-center'
              onClick={hideModal}
            >
              X
            </button>
          </div>
          <div className='h-20 flex items-center justify-center'>
            <div className='text-center font-semibold text-violet-700 text-xl'>
              HELLO CODESTATES!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
