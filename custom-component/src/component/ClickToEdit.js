import React, { useEffect, useRef, useState } from 'react';

const EditForm = ({ type, value, setValue }) => {
  const editRef = useRef(null);
  const [isShow, setIsShow] = useState(false);
  const [newValue, setNewValue] = useState(value);

  useEffect(() => {
    if (isShow) editRef.current.focus();
  }, [isShow]);

  const showInput = () => {
    setIsShow(true);
  };

  const handleNewValue = (e) => {
    setNewValue(e.target.value);
  };

  const changeValue = () => {
    setValue(newValue);
    setIsShow(false);
  };

  return (
    <>
      <div className='edit-container'>
        <span>{type}</span>
        {isShow ? (
          <input
            ref={editRef}
            type='text'
            value={newValue}
            onChange={handleNewValue}
            onBlur={changeValue}
            onKeyUp={(e) => {
              if (e.key === 'Enter') {
                changeValue();
              }
            }}
          />
        ) : (
          <span onClick={showInput}>{value}</span>
        )}
      </div>
    </>
  );
};

const ClickToEdit = () => {
  const [name, setName] = useState('김코딩');
  const [age, setAge] = useState('40');

  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
      <div className='flex flex-col'>
        <EditForm
          type='이름'
          value={name}
          setValue={(value) => setName(value)}
        />
        <EditForm type='나이' value={age} setValue={(value) => setAge(value)} />
      </div>
      <div>
        <span>이름 {name}</span> <span>나이 {age}</span>
      </div>
    </div>
  );
};

export default ClickToEdit;
