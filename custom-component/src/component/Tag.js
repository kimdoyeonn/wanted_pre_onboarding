import React, { useState } from 'react';

const Tag = () => {
  const [text, setText] = useState('');
  const [tagList, setTagList] = useState([]);

  const changeText = (e) => {
    setText(e.target.value);
  };

  const addTag = () => {
    if (text !== '' && !tagList.includes(text)) {
      setTagList([...tagList, text]);
      setText('');
    }
  };

  const removeTag = (idx) => {
    const tags = [...tagList];
    tags.splice(idx, 1);
    setTagList(tags);
  };

  return (
    <div className='w-full h-full flex items-center justify-center'>
      <div className='w-10/12 border-2 rounded-lg flex items-center flex-wrap px-2 py-1 focus-within:border-violet-800 focus-within:shadow-md'>
        <ul className='flex flex-wrap items-center'>
          {tagList.map((tag, idx) => (
            <li
              key={idx}
              className='flex items-center shadow-md h-9 mr-1 my-1 rounded-md bg-violet-700 text-white px-2 py-1'
            >
              <span className='pr-2'>{tag}</span>
              <span
                className='w-4 h-4 leading-3 cursor-pointer text-center font-semibold bg-white text-black rounded-full'
                onClick={() => removeTag(idx)}
              >
                x
              </span>
            </li>
          ))}
        </ul>
        <input
          type='text'
          placeholder='Press enter to add tags'
          value={text}
          onChange={changeText}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              addTag();
            }
          }}
          className='outline-none h-9 ml-1 my-1 flex-grow'
        />
      </div>
    </div>
  );
};

export default Tag;
