import React, { useRef, useState } from 'react';

const Modal = ({ openerMessage = '', modalMessage = '' }) => {
  const [isShow, setIsShow] = useState(false);
  const modal = useRef(null);

  const showModal = () => {
    setIsShow(true);
  };

  const hideModal = () => {
    setIsShow(false);
  };

  const closeModal = (e) => {
    if (!modal.current.contains(e.target)) {
      hideModal();
    }
  };

  if (!openerMessage || !modalMessage) return <></>;

  return (
    <div className='w-full h-full relative flex justify-center items-center'>
      <button
        className='h-16 w-36 font-bold shadow-inner rounded-full text-white bg-violet-800'
        onClick={showModal}
      >
        {openerMessage}
      </button>
      {isShow ? (
        <div
          onClick={closeModal}
          className='absolute w-full h-full bg-gray-400 bg-opacity-70'
        >
          <div
            ref={modal}
            className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 bg-white w-72 h-32 rounded-xl'
          >
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
                {modalMessage}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Modal;
